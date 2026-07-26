import AnatomyLinks from './AnatomyLinks'
import { useQuiz } from './QuizContext'
import QuizResults from './QuizResults'
import { textDirection } from './textDirection'

function Question() {
  const {
    phase,
    current,
    selected,
    result,
    questionNumber,
    total,
    isLastQuestion,
    submitAnswer,
    next,
  } = useQuiz()

  const optionClassName = (index: number) => {
    if (!result) return 'option'
    if (index === result.correct_answer) return 'option correct'
    if (index === selected) return 'option incorrect'
    return 'option'
  }

  if (phase === 'finished') {
    return <QuizResults />
  }

  if (phase === 'loading' || !current) {
    return <p>Loading quiz...</p>
  }

  return (
    <div className="card">
      <p className="progress">
        Question {questionNumber} of {total}
      </p>
      {/* The questions are Hebrew with embedded Latin anatomy terms. The page
          itself is English (LTR), so without an explicit base direction the
          bidi algorithm lays the runs out left-to-right and scrambles the
          sentence order. Options are mixed Hebrew/Latin, so each one gets the
          direction implied by whether it contains Hebrew at all. */}
      <p className="question" dir="rtl">
        {current.question}
      </p>
      <div className="options">
        {current.options.map((option, index) => (
          <button
            key={index}
            dir={textDirection(option)}
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
        <AnatomyLinks names={current.anatomy_components} label="Anatomy in this question:" />
      )}
      {result && (
        <button className="next" onClick={next}>
          {isLastQuestion ? 'See results' : 'Next question'}
        </button>
      )}
    </div>
  )
}

export default Question
