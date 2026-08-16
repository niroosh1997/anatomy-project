# -*- coding: utf-8 -*-
# Orthopedics question bank. Empty on purpose — the course material has not been
# supplied yet, and every question in this project is traceable to a slide the
# course actually teaches rather than written from general knowledge.
#
# To fill it, follow what questions.py did: read the course decks as rendered
# page images (text extraction scrambles the Hebrew right-to-left runs), write
# one question per fact a slide states, then check each answer back against the
# slide it came from.
#
# Same shape as an anatomy question, with one difference — ids start at 1001.
# Ids are unique across every course because /questions/{id}/answer looks a
# question up by id alone, so two courses must never reuse a number.
#
#     {
#         "id": 1001,
#         "question": "...",
#         "options": ["...", "...", "...", "..."],
#         "answer": 0,
#         "anatomy_components": ["ACL"],
#     }
#
# anatomy_components links a question to the reference pages in
# frontend/src/anatomyData.ts. Orthopedics shares those pages rather than
# getting its own set, so use the same names — a question about an ACL tear
# lists "ACL" and the reader gets the existing illustrated page.
QUESTIONS: list[dict] = []
