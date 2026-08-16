import type { AnsweredQuestion, QuestionData } from './QuizContext'

const STORAGE_KEY = 'anatomy-quiz-round'

/** Bumped whenever the shape below changes, so a browser holding an older
 *  payload discards it and deals a fresh round instead of restoring something
 *  half-understood. */
const VERSION = 1

export interface SavedRound {
  v: number
  course: string
  questions: QuestionData[]
  answered: AnsweredQuestion[]
  currentIndex: number
  selected: number | null
  result: { correct: boolean; correct_answer: number } | null
  /** Only the two phases worth restoring. 'loading' is transient and 'empty'
   *  is re-derived from the course having no questions. */
  phase: 'answering' | 'finished'
}

export function saveRound(round: SavedRound): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(round))
  } catch {
    // Private browsing, blocked storage, or a full quota. Losing the ability to
    // resume is not worth failing the round the user is in the middle of.
  }
}

export function clearRound(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* same as above */
  }
}

/** The saved round for this course, or null if there isn't a usable one.
 *
 *  Everything here is untrusted: it may have been written by an older build,
 *  hand-edited, or truncated by a quota error mid-write. Anything that doesn't
 *  match the expected shape is discarded rather than partially restored, since
 *  a wrong currentIndex would crash the question view.
 */
export function loadRound(course: string): SavedRound | null {
  let raw: string | null = null
  try {
    raw = localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
  if (!raw) return null

  try {
    const r = JSON.parse(raw) as SavedRound
    const ok =
      r &&
      r.v === VERSION &&
      r.course === course &&
      Array.isArray(r.questions) &&
      r.questions.length > 0 &&
      r.questions.every((q) => typeof q?.id === 'number' && Array.isArray(q?.options)) &&
      Array.isArray(r.answered) &&
      Number.isInteger(r.currentIndex) &&
      r.currentIndex >= 0 &&
      r.currentIndex < r.questions.length &&
      (r.phase === 'answering' || r.phase === 'finished')
    if (!ok) {
      clearRound()
      return null
    }
    return r
  } catch {
    clearRound()
    return null
  }
}

export { VERSION as ROUND_VERSION }
