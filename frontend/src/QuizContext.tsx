import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// Set at build time by the deploy workflow; falls back to the local dev server.
const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000'

export interface QuestionData {
  id: number
  question: string
  options: string[]
  anatomy_components: string[]
}

interface AnswerResult {
  correct: boolean
  correct_answer: number
}

export interface AnsweredQuestion {
  question: QuestionData
  selected: number
  result: AnswerResult
}

type Phase = 'loading' | 'answering' | 'finished'

interface QuizContextValue {
  phase: Phase
  current: QuestionData | null
  selected: number | null
  result: AnswerResult | null
  questionNumber: number
  total: number
  isLastQuestion: boolean
  score: number
  misses: AnsweredQuestion[]
  submitAnswer: (index: number) => void
  next: () => void
  startQuiz: () => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [answered, setAnswered] = useState<AnsweredQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [phase, setPhase] = useState<Phase>('loading')

  const startQuiz = () => {
    setPhase('loading')
    setAnswered([])
    setCurrentIndex(0)
    setSelected(null)
    setResult(null)
    fetch(`${API_BASE}/quiz`)
      .then((res) => res.json())
      .then((data: QuestionData[]) => {
        setQuestions(data)
        setPhase('answering')
      })
  }

  useEffect(() => {
    startQuiz()
  }, [])

  const current = questions[currentIndex] ?? null

  const submitAnswer = (index: number) => {
    if (result || !current) return
    setSelected(index)
    fetch(`${API_BASE}/questions/${current.id}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selected: index }),
    })
      .then((res) => res.json())
      .then((data: AnswerResult) => {
        setResult(data)
        // Recorded here rather than in next(), so the score is already correct
        // if the user navigates away to an anatomy page before advancing.
        setAnswered((prev) => [...prev, { question: current, selected: index, result: data }])
      })
  }

  const next = () => {
    setSelected(null)
    setResult(null)
    if (currentIndex + 1 >= questions.length) {
      setPhase('finished')
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  const value: QuizContextValue = {
    phase,
    current,
    selected,
    result,
    questionNumber: currentIndex + 1,
    total: questions.length,
    isLastQuestion: questions.length > 0 && currentIndex + 1 === questions.length,
    score: answered.filter((a) => a.result.correct).length,
    misses: answered.filter((a) => !a.result.correct),
    submitAnswer,
    next,
    startQuiz,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }
  return context
}
