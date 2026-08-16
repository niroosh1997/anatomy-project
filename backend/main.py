import os
import random

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from courses import COURSES, DEFAULT_COURSE, QUESTIONS_BY_ID

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


# How many questions make up one round.
QUIZ_LENGTH = 20


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
def answer_question(question_id: int, submission: AnswerSubmission):
    # Looked up across every course: the id alone identifies a question, which
    # courses.py enforces at import time.
    question = QUESTIONS_BY_ID.get(question_id)
    if question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return AnswerResult(
        correct=submission.selected == question["answer"],
        correct_answer=question["answer"],
    )
