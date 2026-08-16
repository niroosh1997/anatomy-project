import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Question from './Question'
import { QuizProvider, type CourseData } from './QuizContext'

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000'

/** One course's quiz. The slug comes from the route, so a round is linkable. */
function QuizPage() {
  const { course = '' } = useParams<{ course: string }>()
  const [meta, setMeta] = useState<CourseData | null>(null)

  // Only for the heading — the round itself is dealt by QuizProvider, which
  // does not need the course to exist before asking for it.
  useEffect(() => {
    fetch(`${API_BASE}/courses`)
      .then((res) => res.json())
      .then((all: CourseData[]) => setMeta(all.find((c) => c.slug === course) ?? null))
      .catch(() => setMeta(null))
  }, [course])

  return (
    <>
      <p className="course-heading" dir="rtl">
        {meta?.name_he ?? course}
      </p>
      <QuizProvider course={course}>
        <Question />
      </QuizProvider>
      <Link to="/" className="back-link">
        Choose a different course
      </Link>
    </>
  )
}

export default QuizPage
