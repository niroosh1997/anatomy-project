import os
import random
import time
import uuid
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import db
from questions import QUESTIONS


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()


app = FastAPI(lifespan=lifespan)

# Comma-separated origins, set by the deployment; defaults to the Vite dev server.
# Origins only — scheme + host + port, no trailing path.
ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.environ.get("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)


# How many questions make up one round.
QUIZ_LENGTH = 10


def client_id_of(request: Request) -> str | None:
    """The caller's anonymous browser id, or None if absent or malformed.

    Validated here rather than at insert time: client_id is a uuid column, so
    letting arbitrary header text through would just produce a failed write.
    """
    raw = request.headers.get("x-client-id", "")
    try:
        return str(uuid.UUID(raw))
    except ValueError:
        return None


@app.middleware("http")
async def log_requests(request: Request, call_next):
    started = time.perf_counter()
    response = await call_next(request)
    if db.enabled():
        db.record_request(
            client_id_of(request),
            request.method,
            request.url.path,
            response.status_code,
            int((time.perf_counter() - started) * 1000),
            request.headers.get("user-agent"),
        )
    return response


class QuestionPublic(BaseModel):
    id: int
    question: str
    options: list[str]
    anatomy_components: list[str]


class AnswerSubmission(BaseModel):
    selected: int


class AnswerResult(BaseModel):
    correct: bool
    correct_answer: int


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/quiz", response_model=list[QuestionPublic])
def new_quiz():
    """Deal a round of distinct questions.

    random.sample rather than repeated random.choice so a round never asks the
    same question twice. The min() guard keeps this working if the bank ever
    shrinks below QUIZ_LENGTH — sample raises ValueError when k > population.
    """
    return random.sample(QUESTIONS, min(QUIZ_LENGTH, len(QUESTIONS)))


@app.post("/questions/{question_id}/answer", response_model=AnswerResult)
async def answer_question(question_id: int, submission: AnswerSubmission, request: Request):
    # async, not sync: a sync endpoint runs in a threadpool with no event loop,
    # and the background log write needs one. Nothing here blocks.
    question = next((q for q in QUESTIONS if q["id"] == question_id), None)
    if question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    correct = submission.selected == question["answer"]
    if db.enabled():
        # anatomy_components is copied in rather than referenced: the component
        # lists live in questions.py, not the database, so without this column
        # "which body parts get failed most" is not answerable in SQL.
        db.record_answer(
            client_id_of(request),
            question_id,
            submission.selected,
            correct,
            question["anatomy_components"],
        )
    return AnswerResult(correct=correct, correct_answer=question["answer"])
