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
#   ids 1016-1035 "אורתופדיה - אורתופדיה בדיקות - 98150.PDF", the lecture
#             slides. Unlike the two sheets above this one carries no answer
#             key, because it is not a question paper — each answer is the
#             fact its slide states, and the distractors are the other terms
#             and modalities from the same slides. 1016-1020 are the five
#             terms on slide 9 (הפרעות תחושה וכאב); 1021-1035 cover the five
#             imaging modalities on slides 15-19, three questions each —
#             ionising radiation, what it shows, and how it works.
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
    {
        "id": 1016,
        "question": "מה המשמעות של Hypoesthesia?",
        "options": [
            "תחושתיות יתר",
            "ירידה תחושתית",
            "גירוי לא מכאיב מעורר כאב",
            "תחושה לא תקינה - נימולים, דקירות ותחושת שריפה",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1017,
        "question": "מה המשמעות של Hyperesthesia?",
        "options": [
            "גירוי מכאיב גורם לכאב מוגבר מן הצפוי",
            "ירידה תחושתית",
            "תחושתיות יתר",
            "גירוי לא מכאיב מעורר כאב",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1018,
        "question": "מה המשמעות של Paresthesia?",
        "options": [
            "תחושה לא תקינה - נימולים, דקירות ותחושת שריפה",
            "ירידה תחושתית",
            "תחושתיות יתר",
            "גירוי מכאיב גורם לכאב מוגבר מן הצפוי",
        ],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1019,
        "question": "מה המשמעות של Hyperalgesia?",
        "options": [
            "גירוי לא מכאיב מעורר כאב",
            "תחושתיות יתר",
            "ירידה תחושתית",
            "גירוי מכאיב גורם לכאב מוגבר מן הצפוי",
        ],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1020,
        "question": "מה המשמעות של Allodynia?",
        "options": [
            "גירוי מכאיב גורם לכאב מוגבר מן הצפוי",
            "ירידה תחושתית",
            "גירוי לא מכאיב מעורר כאב",
            "תחושתיות יתר",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1021,
        "question": "האם קיימת קרינה מייננת בצילום רנטגן (X-ray)?",
        "options": [
            "ללא קרינה מייננת",
            "קרינה מייננת נמוכה",
            "קרינה מייננת",
            "קרינה מייננת הנובעת מהזרקת חומר סימון רדיואקטיבי",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1022,
        "question": "האם קיימת קרינה מייננת ב-CT?",
        "options": [
            "קרינה מייננת נמוכה",
            "ללא קרינה מייננת",
            "קרינה מייננת",
            "קרינה מייננת הנובעת מהזרקת חומר סימון רדיואקטיבי",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1023,
        "question": "האם קיימת קרינה מייננת ב-MRI?",
        "options": [
            "קרינה מייננת",
            "קרינה מייננת נמוכה",
            "קרינה מייננת הנובעת מהזרקת חומר סימון רדיואקטיבי",
            "ללא קרינה מייננת",
        ],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1024,
        "question": "האם קיימת קרינה מייננת במיפוי עצמות?",
        "options": [
            "קרינה מייננת הנובעת מהזרקת חומר סימון רדיואקטיבי",
            "ללא קרינה מייננת",
            "קרינה מייננת נמוכה",
            "קרינה מייננת",
        ],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1025,
        "question": "האם קיימת קרינה מייננת באולטרה סאונד (US)?",
        "options": [
            "קרינה מייננת נמוכה",
            "ללא קרינה מייננת",
            "קרינה מייננת",
            "קרינה מייננת הנובעת מהזרקת חומר סימון רדיואקטיבי",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1026,
        "question": "מה מאתרת בדיקת רנטגן (X-ray)?",
        "options": [
            "מניסקוסים, דיסקים ורצועות",
            "שברים, פריקות והסתיידויות",
            "שברי מאמץ, דלקות וגידולים",
            "שרירים, גידים ורצועות",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
    {
        "id": 1027,
        "question": "אילו שברים מודגמים במיוחד ב-CT?",
        "options": [
            "שברים בעצמות ארוכות בלבד",
            "שברי מאמץ בלבד",
            "שברים מורכבים, תוך מפרקיים, קטנים ובחוליות",
            "CT אינו מתאים להדגמת שברים",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1028,
        "question": "באילו רקמות יעילה בדיקת MRI?",
        "options": [
            "רקמת עצם בלבד",
            "הסתיידויות בלבד",
            "אזורים עם פעילות מוגברת של בניית עצם",
            "רקמות רכות - מניסקוסים, דיסקים, רצועות ומערכת העצבים",
        ],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1029,
        "question": "מה מאתר מיפוי עצמות?",
        "options": [
            "שברי מאמץ, דלקות, גידולים וזיהומים",
            "קרעים ברצועות בלבד",
            "מניסקוסים ודיסקים בלבד",
            "פריקות מפרקים בלבד",
        ],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1030,
        "question": "אילו מבנים נבדקים באולטרה סאונד (US)?",
        "options": [
            "חוליות ודיסקים",
            "מוח וחוט השדרה",
            "שרירים, רצועות, גידים ואיברים פנימיים",
            "עצמות בלבד",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1031,
        "question": "מה מאפיין את בדיקת הרנטגן (X-ray) מבחינת זמינות?",
        "options": [
            "בדיקה יקרה וארוכה",
            "מחייבת הזרקת חומר סימון רדיואקטיבי",
            "תלויה במיומנות המפעיל",
            "בדיקה פשוטה וזמינה",
        ],
        "answer": 3,
        "anatomy_components": [],
    },
    {
        "id": 1032,
        "question": "כיצד מדמה בדיקת CT את האזור הנבדק?",
        "options": [
            "צילום תלת מימדי ברזולוציה גבוהה",
            "צילום דו מימדי ברזולוציה נמוכה",
            "הדמיה בזמן אמת בלבד",
            "הדמיה המבוססת על חומר רדיואקטיבי",
        ],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1033,
        "question": "מתי השימוש ב-MRI בעייתי?",
        "options": [
            "כאשר יש חשד לשבר",
            "כאשר המטופל צעיר מאוד",
            "כאשר יש מתכות בגוף",
            "כאשר יש צורך בהדמיית רקמות רכות",
        ],
        "answer": 2,
        "anatomy_components": [],
    },
    {
        "id": 1034,
        "question": "כיצד מתבצע מיפוי עצמות?",
        "options": ["בהזרקת חומר סימון רדיואקטיבי", "בגלי קול", "בשדה מגנטי", "בצילום תלת מימדי"],
        "answer": 0,
        "anatomy_components": [],
    },
    {
        "id": 1035,
        "question": "מהי מגבלה של בדיקת אולטרה סאונד (US)?",
        "options": [
            "חשיפה לקרינה מייננת גבוהה",
            "אינו יכול לחדור עצמות ועומק החדירה מוגבל",
            "מחייב הזרקת חומר ניגוד",
            "אורך זמן רב מאוד",
        ],
        "answer": 1,
        "anatomy_components": [],
    },
]
