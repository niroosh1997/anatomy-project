import { Link } from 'react-router-dom'
import { useQuiz } from './QuizContext'

function Question() {
  const { question, selected, result, loading, loadQuestion, submitAnswer } = useQuiz()

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
      {/* The questions are Hebrew with embedded Latin anatomy terms. The page
          itself is English (LTR), so without an explicit base direction the
          bidi algorithm lays the runs out left-to-right and scrambles the
          sentence order. Options are mixed Hebrew/Latin, so let each one
          pick its own direction. */}
      <p className="question" dir="rtl">
        {question.question}
      </p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            dir="auto"
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
