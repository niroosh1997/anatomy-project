import logging
import os
import random
import time
import uuid
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import db
from courses import COURSE_OF_QUESTION, COURSES, DEFAULT_COURSE, QUESTIONS_BY_ID

# Uvicorn configures its own loggers but leaves the root logger alone, so
# without this Python's fallback handler drops anything below WARNING — which
# would hide "access log: connected, schema ready" while still showing the
# failure. Setup is much easier to diagnose when success is visible too.
logging.basicConfig(level=logging.INFO, format="%(levelname)s:    %(name)s: %(message)s")


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
QUIZ_LENGTH = 20


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


class CoursePublic(BaseModel):
    slug: str
    name: str
    name_he: str
    question_count: int


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/courses", response_model=list[CoursePublic])
def list_courses():
    """What the picker offers.

    question_count is included so the picker can say which courses have
    material yet, rather than letting someone start an empty round.
    """
    return [
        CoursePublic(
            slug=c.slug, name=c.name, name_he=c.name_he, question_count=len(c.questions)
        )
        for c in COURSES.values()
    ]


@app.get("/quiz", response_model=list[QuestionPublic])
def new_quiz(course: str = DEFAULT_COURSE):
    """Deal a round of distinct questions from one course.

    random.sample rather than repeated random.choice so a round never asks the
    same question twice. The min() guard keeps this working when a bank holds
    fewer than QUIZ_LENGTH — sample raises ValueError when k > population, and
    a course with no material yet deals an empty round rather than failing.
    """
    if course not in COURSES:
        raise HTTPException(status_code=404, detail=f"No course named {course!r}")
    bank = COURSES[course].questions
    return random.sample(bank, min(QUIZ_LENGTH, len(bank)))


@app.post("/questions/{question_id}/answer", response_model=AnswerResult)
async def answer_question(question_id: int, submission: AnswerSubmission, request: Request):
    # async, not sync: a sync endpoint runs in a threadpool with no event loop,
    # and the background log write needs one. Nothing here blocks.
    #
    # Looked up across every course: the id alone identifies a question, which
    # courses.py enforces at import time.
    question = QUESTIONS_BY_ID.get(question_id)
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
            COURSE_OF_QUESTION.get(question_id),
        )
    return AnswerResult(correct=correct, correct_answer=question["answer"])
