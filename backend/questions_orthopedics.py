# -*- coding: utf-8 -*-
# Orthopedics question bank.
#
# Sources, both supplied by the course and both carrying their own answer key,
# so no answer here was derived:
#   ids 1001-1013 "אורתופדיה - שאלות דוגמה אורתופדיה צאלי עם תשובות נכונות -
#             98761.DOCX". The correct option is the one highlighted yellow in
#             the document; the highlight is the key.
#   ids 1014-1015 "אורתופדיה - שאלות לדוגמה מחיים לחומר שלו - 98791.DOCX",
#             which lists its answers as letters in a "תשובות" block at the end.
#
# Question text is verbatim apart from two normalisations: the "א. ב. ג. ד."
# prefixes are dropped, since the app renders options as buttons and shows no
# letters, and for the same reason two distractors reading "א+ב נכונות" are
# rephrased by position. Option order is untouched, so the answer indices below
# are the document's own.
#
# Ids start at 1001 because /questions/{id}/answer identifies a question by id
# alone, with no course in the path — see courses.py, which refuses to start if
# two courses ever claim the same number.
#
# anatomy_components borrows the reference pages in frontend/src/anatomyData.ts
# rather than orthopedics having its own. It is empty where a question is about
# a process — fracture healing, hernia, choice of imaging — rather than about a
# structure the reader could go and look at.
QUESTIONS = [
    {
        "id": 1001,
        "question": "מה לא  נכון לגבי הרצועה ?",
        "options": [
            "בקרע מלא דרוש ניתוח על מנת לאחות את הרצועה",
            "בקרע מלא ניתן לקבע את המפרק והרצועה תתאחה לאחר 6 שבועות",
            "יציבות המפרק נפגעת בעקבות הקרע",
            "לרצועה אספקת דם פחות טובה ולכן ריפוי איטי",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1002,
        "question": "מה יכול להיות  סיבוך של שבר ?",
        "options": ["קיצור הגפה", "הגבלת טווח התנועה במפרק", "פגיעה בכלי דם או/ו עצב", "כל התשובות נכונות"],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1003,
        "question": "מה המנגנון הגורם לשברי מאמץ בחוליות (spondylolisis) ?",
        "options": ["פשיטת גב", "גיפוף גב", "שתי התשובות הראשונות נכונות", "אף תשובה לא נכונה"],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1004,
        "question": "באילו אזורים נפוצה פריצת דיסק ?",
        "options": ["L1-L2", "L2-L3", "L4-L5", "פריצת דיסק יכולה לקרות באופן שווה בכל הנ''ל"],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1005,
        "question": "מה זה spondylolistesis   ?",
        "options": [
            "שברי מאמץ בחוליות",
            "החלקה של חוליה אחת על גבי השנייה בעקבות שברי מאמץ",
            "פריצות דיסק קטנות באזור המותני",
            "מקרה פרטי של בלט דיסק",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1006,
        "question": "מה הסכנה העיקרית בשבר פתוח ?",
        "options": ["איבוד דם", "זיהום", "שתי התשובות הראשונות נכונות", "אין שום הבדל בין שבר פתוח לסגור"],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1007,
        "question": "מה נכון לגבי פריקות כתף ?",
        "options": [
            "מתרחש בה שבר של עצם הזרוע",
            "נפוצות יותר פריקות אחוריות ותחתונות של הכתף",
            "המנח בו מתרחשות  פשיטה ורוטציה פנימה",
            "יציבות הכתף נפגעת בעקבות פגיעה ברצועות",
        ],
        "answer": 3,
        "anatomy_components": ["Glenohumeral Joint", "Glenohumeral Ligament"],
    },
    {
        "id": 1008,
        "question": "מה המנח של פריקת כתף קדמית ?",
        "options": [
            "רוטציה פנימה ופשיטת כתף",
            "ריחוק אופקי בלבד",
            "רוטציה החוצה וריחוק כתף",
            "אף תשובה לא נכונה",
        ],
        "answer": 2,
        "anatomy_components": ["Glenohumeral Joint"],
    },
    {
        "id": 1009,
        "question": "איזה רקמה נפגעת במרפק טניס ?",
        "options": ["עצב", "שרירי פושטי שורש כף היד", "שרירי מכופפי שורש כף היד", "בורסה של המרפק"],
        "answer": 1,
        "anatomy_components": [
            "Extensor Carpi Radialis Brevis",
            "Extensor Carpi Ulnaris",
            "Lateral Epicondyle",
        ],
    },
    {
        "id": 1010,
        "question": "מה זה OSHGOOD SHLATER ?",
        "options": [
            "שם של מדען גרמני שהמציא את מכשיר הרנטגן",
            "עומס על גיד הפיקה בעקבות גדילה מהירה של עצם",
            "עומס על גיד הפיקה בעקבות גדילה מהירה של שריר",
            "מאפיין יותר אנשים בגילאי 40+",
        ],
        "answer": 1,
        "anatomy_components": ["Patella", "Tibia"],
    },
    {
        "id": 1011,
        "question": "מה זה בקע מפשעתי ?",
        "options": [
            "פריצת דיסק לכיוון המפשעה",
            "פריצת מעיים לתוך החלל של המפשעה",
            "שקע טבעי שקיים אצל כל האוכלוסייה",
            "מצב  של קרע בשרירי הירך",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1012,
        "question": "באיזה שלב בן אדם ירגיש כאב בעקבות שחיקת סחוס הברך ?",
        "options": [
            "כבר בשלב ההתחלתי מכיוון שלסחוס יש רשת עצבים ענפה",
            "בן אדם לא ירגיש כאב בשום שלב",
            "הכאב יורגש בדרגה 3+4 , בעת חשיפה של עצם",
            "אף תשובה אינה נכונה",
        ],
        "answer": 2,
        "anatomy_components": ["Knee Joint"],
    },
    {
        "id": 1013,
        "question": "כיצד נטפל בשבר פתוח ?",
        "options": [
            "נקבע על ידי גבס",
            "נקבע על ידי ברזלים בתוך העצם",
            "נקבע על ידי מקבע חיצוני ואנטיביוטיקה",
            "שבר פתוח אינו מסוכן ומתרפא באופן עצמאי ללא כל התערבות",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1014,
        "question": "מטרת האבחון החולה האורתופדי:",
        "options": [
            "למצוא את התהליך הפתולוגי",
            "להבין את החסר הפונקציונאלי",
            "הבנת המוגבלות הנובעת מתוך החסר הפונקציונאלי",
            "כל המשפטים הנ\"ל נכונים.",
        ],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1015,
        "question": "מהי שיטת דימות המתאימה ביותר לאבחון שבר?:",
        "options": ["צילום רנטגן", "צילום MRI", "אולטרסאונד", "אף אחד מהנ\"ל"],
        "answer": 0,
        "anatomy_components": [],
    },
]
