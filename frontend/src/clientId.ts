const STORAGE_KEY = 'anatomy-quiz-client-id'

let cached: string | null = null

/** A random id for this browser, stable across reloads.
 *
 *  Not a login and not personal data: it is a random UUID this app generates,
 *  tied to nothing about the person, and the user can reset it by clearing site
 *  data. It exists so the stats can tell "this browser keeps failing shoulder
 *  questions" apart from "lots of people each failed one".
 */
export function clientId(): string {
  if (cached) return cached
  try {
    cached = localStorage.getItem(STORAGE_KEY)
    if (!cached) {
      cached = crypto.randomUUID()
      localStorage.setItem(STORAGE_KEY, cached)
    }
  } catch {
    // Private browsing and blocked storage both throw. Cache the value in
    // memory instead, so a single round still shares one id rather than
    // generating a new one per request; it just resets on reload.
    cached = crypto.randomUUID()
  }
  return cached
}
