import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

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

interface QuizContextValue {
  question: QuestionData | null
  selected: number | null
  result: AnswerResult | null
  loading: boolean
  loadQuestion: () => void
  submitAnswer: (index: number) => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
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

  return (
    <QuizContext.Provider value={{ question, selected, result, loading, loadQuestion, submitAnswer }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }
  return context
}
