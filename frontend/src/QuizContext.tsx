import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { clientId } from './clientId'
import { clearRound, loadRound, ROUND_VERSION, saveRound } from './roundStorage'

// Set at build time by the deploy workflow; falls back to the local dev server.
const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000'

export interface QuestionData {
  id: number
  question: string
  options: string[]
  anatomy_components: string[]
}

export interface AnswerResult {
  correct: boolean
  correct_answer: number
}

export interface AnsweredQuestion {
  question: QuestionData
  selected: number
  result: AnswerResult
}

export interface CourseData {
  slug: string
  name: string
  name_he: string
  question_count: number
}

// 'empty' is its own phase rather than a finished round of zero: a course with
// no material yet needs to say so, not congratulate you on a perfect score.
type Phase = 'loading' | 'answering' | 'finished' | 'empty'

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

export function QuizProvider({ course, children }: { course: string; children: ReactNode }) {
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [answered, setAnswered] = useState<AnsweredQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [phase, setPhase] = useState<Phase>('loading')

  // Blocks the save effect until a restore has been attempted, so the initial
  // empty state can't overwrite a good saved round before it is read back.
  const restored = useRef(false)

  const startQuiz = () => {
    clearRound()
    setPhase('loading')
    setAnswered([])
    setCurrentIndex(0)
    setSelected(null)
    setResult(null)
    fetch(`${API_BASE}/quiz?course=${encodeURIComponent(course)}`, {
      headers: { 'X-Client-Id': clientId() },
    })
      .then((res) => res.json())
      .then((data: QuestionData[]) => {
        setQuestions(data)
        setPhase(data.length === 0 ? 'empty' : 'answering')
      })
  }

  // Keyed on course so switching courses deals a fresh round rather than
  // leaving the previous course's questions on screen. A reload lands here too,
  // and picks the round back up where it was rather than starting over.
  useEffect(() => {
    restored.current = false
    const saved = loadRound(course)
    if (saved) {
      setQuestions(saved.questions)
      setAnswered(saved.answered)
      setCurrentIndex(saved.currentIndex)
      setSelected(saved.selected)
      setResult(saved.result)
      setPhase(saved.phase)
      restored.current = true
    } else {
      startQuiz()
    }
  }, [course])

  // Write after every change rather than on unload: a phone can discard the tab
  // without ever firing an unload event, and beforeunload is unreliable on iOS.
  useEffect(() => {
    if (phase !== 'answering' && phase !== 'finished') return
    if (!restored.current && questions.length === 0) return
    restored.current = true
    saveRound({
      v: ROUND_VERSION,
      course,
      questions,
      answered,
      currentIndex,
      selected,
      result,
      phase,
    })
  }, [course, questions, answered, currentIndex, selected, result, phase])

  // Dropping a removed question shortens the round, which can leave the index
  // past the end. Without this the view has no current question and sits on
  // "Loading quiz..." forever.
  useEffect(() => {
    if (phase === 'answering' && currentIndex >= questions.length) {
      setPhase('finished')
    }
  }, [phase, currentIndex, questions.length])

  const current = questions[currentIndex] ?? null

  const submitAnswer = (index: number) => {
    if (result || !current) return
    const asked = current
    setSelected(index)
    fetch(`${API_BASE}/questions/${asked.id}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Client-Id': clientId() },
      body: JSON.stringify({ selected: index }),
    })
      .then((res) => {
        // A saved round outlives deploys, so it can still hold a question that
        // has since been removed from the bank. Without this the 404 body parses
        // into a result with undefined fields, and the question renders as wrong
        // with no correct answer marked.
        if (res.status === 404) {
          setQuestions((prev) => prev.filter((q) => q.id !== asked.id))
          setSelected(null)
          return null
        }
        if (!res.ok) throw new Error(`answer failed: ${res.status}`)
        return res.json() as Promise<AnswerResult>
      })
      .then((data) => {
        if (!data) return
        setResult(data)
        // Recorded here rather than in next(), so the score is already correct
        // if the user navigates away to an anatomy page before advancing.
        setAnswered((prev) => [...prev, { question: asked, selected: index, result: data }])
      })
      .catch(() => {
        // Network blip or server error: re-enable the options so the answer can
        // be given again, rather than leaving the round stuck on a dead button.
        setSelected(null)
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
