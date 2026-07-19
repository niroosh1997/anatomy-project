import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_BASE = 'http://localhost:8000'

interface QuestionData {
  id: number
  question: string
  options: string[]
  anatomy_components: string[]
}

interface AnswerResult {
  correct: boolean
  correct_answer: number
}

function Question() {
  const [question, setQuestion] = useState<QuestionData | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [loading, setLoading] = useState(true)

  const loadQuestion = () => {
    setLoading(true)
    setSelected(null)
    setResult(null)
    fetch(`${API_BASE}/questions/random`)
      .then((res) => res.json())
      .then((data: QuestionData) => setQuestion(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadQuestion()
  }, [])

  const submitAnswer = (index: number) => {
    if (result || !question) return
    setSelected(index)
    fetch(`${API_BASE}/questions/${question.id}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selected: index }),
    })
      .then((res) => res.json())
      .then((data: AnswerResult) => setResult(data))
  }

  const optionClassName = (index: number) => {
    if (!result) return 'option'
    if (index === result.correct_answer) return 'option correct'
    if (index === selected) return 'option incorrect'
    return 'option'
  }

  if (loading || !question) {
    return <p>Loading question...</p>
  }

  return (
    <div className="card">
      <p className="question">{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={optionClassName(index)}
            onClick={() => submitAnswer(index)}
            disabled={Boolean(result)}
          >
            {option}
          </button>
        ))}
      </div>
      {result && (
        <p className={result.correct ? 'feedback correct' : 'feedback incorrect'}>
          {result.correct ? 'Correct!' : 'Incorrect.'}
        </p>
      )}
      {result && question.anatomy_components.length > 0 && (
        <div className="anatomy-components">
          <p>Anatomy in this question:</p>
          <div className="anatomy-links">
            {question.anatomy_components.map((name) => (
              <Link key={name} to={`/anatomy/${encodeURIComponent(name)}`} className="anatomy-link">
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {result && (
        <button className="next" onClick={loadQuestion}>
          Next question
        </button>
      )}
    </div>
  )
}

export default Question
