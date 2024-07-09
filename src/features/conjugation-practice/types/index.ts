export type WordJSON = {
  type: string
  kanji: string
  eng: string
  altOkurigana?: string[]
}

export type Conjugation = {
  conjugations: string[]
  tense: string
  affirmative: boolean | null
  polite: boolean | null
}

export type Word = {
  wordJSON: WordJSON
  conjugation: Conjugation
  probability: number
  wasRecentlyIncorrect: boolean
}

export type Settings = {
  // Form types
  normal: boolean
  teForm: boolean
  volitional: boolean
  taiForm: boolean
  tariForm: boolean
  potential: boolean
  imperative: boolean
  conditional: boolean
  passive: boolean
  causative: boolean
  causativePassive: boolean

  // Part of speech
  verb: boolean
  iAdjective: boolean
  naAdjective: boolean

  // Speech level
  polite: boolean
  plain: boolean

  // Tense
  nonPast: boolean
  past: boolean

  // Positive/Negative
  positive: boolean
  negative: boolean

  // Special options
  jlptLevel: "n5" | "n4" | "n3" | "n2" | "n1"
  leaveOutSuru: boolean
  reverse: boolean
  amount: number
  showMeaning: boolean
  noFurigana: boolean
  emoji: boolean
}
