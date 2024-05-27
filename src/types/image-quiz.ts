type QuizDimension = {
  width: number
  height: number
}

export type QuizItem = {
  image: string
  dimensions: QuizDimension
  description?: string
  prompt: string
  answers: string[]
}

export type QuizData = QuizItem[]
