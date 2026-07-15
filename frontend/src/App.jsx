import { useEffect, useState } from 'react'
import './App.css'

const API_BASE = 'http://localhost:8000'

function App() {
  const [question, setQuestion] = useState(null)
  const [selected, setSelected] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadQuestion = () => {
    setLoading(true)
    setSelected(null)
    setResult(null)
    fetch(`${API_BASE}/questions/random`)
      .then((res) => res.json())
      .then((data) => setQuestion(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadQuestion()
  }, [])

  const submitAnswer = (index) => {
    if (result) return
    setSelected(index)
    fetch(`${API_BASE}/questions/${question.id}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selected: index }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
  }

  const optionClassName = (index) => {
    if (!result) return 'option'
    if (index === result.correct_answer) return 'option correct'
    if (index === selected) return 'option incorrect'
    return 'option'
  }

  if (loading || !question) {
    return (
      <>
        <h1>Anatomy Quiz</h1>
        <p>Loading question...</p>
      </>
    )
  }

  return (
    <>
      <h1>Anatomy Quiz</h1>
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
        {result && (
          <button className="next" onClick={loadQuestion}>
            Next question
          </button>
        )}
      </div>
    </>
  )
}

export default App
