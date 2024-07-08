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
  furigana: boolean
  emoji: boolean
  streak: boolean
  translation: boolean
  translationTiming: string
  verb: boolean
  adjective: boolean
  // Add more settings as required
}
