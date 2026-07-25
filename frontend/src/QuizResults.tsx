import AnatomyLinks from './AnatomyLinks'
import { useQuiz } from './QuizContext'

function QuizResults() {
  const { score, total, misses, startQuiz } = useQuiz()
  const percent = total > 0 ? Math.round((score / total) * 100) : 0

  return (
    <div className="card">
      <p className="score">
        {score} / {total}
      </p>
      <p className="score-percent">{percent}%</p>

      {misses.length === 0 ? (
        <p className="feedback correct">Perfect round — every answer correct.</p>
      ) : (
        <div className="review">
          <h3>Review your misses</h3>
          {misses.map(({ question, selected, result }) => (
            <div className="review-item" key={question.id}>
              <p className="question" dir="rtl">
                {question.question}
              </p>
              <p className="review-line">
                <span className="review-label">You answered</span>{' '}
                <span className="review-wrong" dir="auto">
                  {question.options[selected]}
                </span>
              </p>
              <p className="review-line">
                <span className="review-label">Correct answer</span>{' '}
                <span className="review-right" dir="auto">
                  {question.options[result.correct_answer]}
                </span>
              </p>
              <AnatomyLinks names={question.anatomy_components} label="Revise:" />
            </div>
          ))}
        </div>
      )}

      <button className="next" onClick={startQuiz}>
        Start a new quiz
      </button>
    </div>
  )
}

export default QuizResults
