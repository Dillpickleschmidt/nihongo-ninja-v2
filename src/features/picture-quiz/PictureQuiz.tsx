"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePictureQuizContext } from "./context/PictureQuizContext"
import PictureQuizContent from "./components/PictureQuizContent"
import { QuizItem } from "@/types/image-quiz"
import { handlePictureAnswer } from "./components/picture-quiz"
import { Textarea } from "@/components/ui/textarea"

export default function PictureQuiz() {
  const {
    correctEntry,
    setIsAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
  } = usePictureQuizContext()
  const [userAnswer, setUserAnswer] = useState<string>("")

  const handleInput = (userAnswer: string, correctEntry: QuizItem) => {
    const isCorrect = handlePictureAnswer(userAnswer, correctEntry)
    setIsAnswerCorrect(isCorrect)
    setHasUserAnswered(true)
    console.log("User answer: ", userAnswer)
    console.log("Correct answer: ", correctEntry.answers.join(", "))
    console.log("Is answer correct? ", isCorrect)
  }

  const handleNextQuestion = () => {
    console.log("Next question!")
    setHasUserAnswered(false)
    setIsAnswerCorrect(false)
  }

  return (
    <div className="inset-0 flex flex-col items-center justify-center space-y-6 py-6">
      <PictureQuizContent />
      <div className="mx-12 flex flex-col items-center space-y-6">
        <Textarea
          placeholder="Write your answer in Japanese..."
          onChange={(e) => setUserAnswer(e.target.value)}
          className="scrollbar-none min-h-72 w-[550px] resize-none rounded-[40px] border-[3px] border-black bg-background-secondary px-8 py-6 text-center font-japanese text-3xl font-medium text-black shadow-inner placeholder:text-xl placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-transparent dark:placeholder:text-black dark:placeholder:text-opacity-50"
        />
        <div className="flex w-full flex-row justify-center gap-4">
          <Button
            onClick={() => handleInput(userAnswer, correctEntry!)}
            className="w-24"
          >
            Submit
          </Button>
          {hasUserAnswered && (
            <Button onClick={handleNextQuestion}>Next Question {"->"}</Button>
          )}
        </div>
      </div>
    </div>
  )
}
