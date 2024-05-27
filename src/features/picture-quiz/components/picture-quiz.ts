import { QuizData, QuizItem } from "@/types/image-quiz"

export function presentPictureQuestion(quizData: QuizData) {
  let entries = quizData

  if (entries.length < 1) {
    throw new Error("Entries is empty, cannot pick a correct key.")
  }

  // Randomize the order of the questions
  entries = entries.sort(() => 0.5 - Math.random())

  // Get the first question from the randomized list
  const [firstQuestion] = entries

  return firstQuestion
}

export function handlePictureAnswer(
  userAnswer: string,
  correctOption: QuizItem
) {
  const isCorrect = correctOption.answers.includes(userAnswer)

  return isCorrect
}
