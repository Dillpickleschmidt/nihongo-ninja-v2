export type UniversalJSONData = Record<string, any>

export type AnswerCategory = {
  answers: string[]
  category: string
}

export type Entry = {
  key: string
  mnemonics?: string[]
  order: number
  answerCategories: AnswerCategory[]
}

export type Card = Entry & {
  cardStyle: string
  wrongAnswerCount: number
}
