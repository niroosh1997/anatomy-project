# -*- coding: utf-8 -*-
"""The courses the quiz offers, and the lookup that spans them.

One place to register a course. Adding a third means adding a module and one
entry here; nothing in main.py needs to change.
"""
import questions as anatomy
import questions_orthopedics as orthopedics


class Course:
    def __init__(self, slug: str, name: str, name_he: str, questions: list[dict]):
        self.slug = slug
        self.name = name
        self.name_he = name_he
        self.questions = questions


COURSES: dict[str, Course] = {
    c.slug: c
    for c in (
        Course("anatomy", "Anatomy", "אנטומיה", anatomy.QUESTIONS),
        Course("orthopedics", "Orthopedics", "אורתופדיה", orthopedics.QUESTIONS),
    )
}

# The course a request falls back to when it does not name one, so links and
# bookmarks made before there was a choice keep working.
DEFAULT_COURSE = "anatomy"

# Answers are submitted as /questions/{id}/answer with no course in the path,
# so an id has to identify a question on its own. Catching a clash here fails
# the process at import rather than silently marking the wrong question.
_seen: dict[int, str] = {}
for course in COURSES.values():
    for q in course.questions:
        clash = _seen.get(q["id"])
        if clash:
            raise ValueError(
                f"question id {q['id']} is used by both {clash} and {course.slug}; "
                "ids must be unique across courses"
            )
        _seen[q["id"]] = course.slug

QUESTIONS_BY_ID: dict[int, dict] = {
    q["id"]: q for course in COURSES.values() for q in course.questions
}

# Which course a question belongs to. Built from the same pass that proved the
# ids unique, so it cannot disagree with QUESTIONS_BY_ID.
COURSE_OF_QUESTION: dict[int, str] = _seen
