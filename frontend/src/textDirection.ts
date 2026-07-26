// Answer options mix Hebrew with embedded Latin anatomy terms, e.g.
// "Internal Rotation מפרק ירך". `dir="auto"` is not good enough for those:
// it picks the direction from the FIRST strong character, so an option that
// merely starts with a Latin term is laid out left-to-right and reads
// scrambled. Every option in this dataset is either a pure Latin anatomy
// term or a Hebrew phrase that may embed Latin terms, so the presence of any
// Hebrew character is what decides the base direction.

/** Hebrew block, U+0590–U+05FF. */
const HEBREW = /[\u0590-\u05FF]/

/**
 * Base direction for a string of option text: `rtl` if it contains any Hebrew
 * character, otherwise `ltr`.
 */
export function textDirection(s: string): 'rtl' | 'ltr' {
  return HEBREW.test(s) ? 'rtl' : 'ltr'
}
