import os
import random

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from questions import QUESTIONS

app = FastAPI()

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


@app.get("/questions/random", response_model=QuestionPublic)
def random_question():
    return random.choice(QUESTIONS)


@app.post("/questions/{question_id}/answer", response_model=AnswerResult)
def answer_question(question_id: int, submission: AnswerSubmission):
    question = next((q for q in QUESTIONS if q["id"] == question_id), None)
    if question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return AnswerResult(
        correct=submission.selected == question["answer"],
        correct_answer=question["answer"],
    )
