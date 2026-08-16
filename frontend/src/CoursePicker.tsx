import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { clientId } from './clientId'
import type { CourseData } from './QuizContext'

// Set at build time by the deploy workflow; falls back to the local dev server.
const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000'

/** The landing screen: which course to be quizzed on. */
function CoursePicker() {
  const [courses, setCourses] = useState<CourseData[] | null>(null)
  // Distinguished from an empty list on purpose: "no courses" and "could not
  // reach the server" look identical to a reader otherwise, and the second one
  // is the one worth acting on.
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE}/courses`, { headers: { 'X-Client-Id': clientId() } })
      .then((res) => res.json())
      .then(setCourses)
      .catch(() => setFailed(true))
  }, [])

  if (failed) return <p>Could not reach the quiz server. Check it is running, then reload.</p>
  if (courses === null) return <p>Loading courses...</p>

  return (
    <div className="card">
      <p className="progress">Choose a course</p>
      <div className="courses">
        {courses.map((course) =>
          // A course with no questions yet is shown rather than hidden, so the
          // list matches what the syllabus will eventually cover — but it is
          // not a link, because starting it would deal an empty round.
          course.question_count > 0 ? (
            <Link key={course.slug} to={`/quiz/${course.slug}`} className="course">
              <span className="course-name" dir="rtl">
                {course.name_he}
              </span>
              <span className="course-count">{course.question_count} questions</span>
            </Link>
          ) : (
            <div key={course.slug} className="course empty" aria-disabled="true">
              <span className="course-name" dir="rtl">
                {course.name_he}
              </span>
              <span className="course-count">No questions yet</span>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default CoursePicker
