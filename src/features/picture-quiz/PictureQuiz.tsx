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
    <div className="absolute inset-0 py-6 space-y-6 flex flex-col items-center justify-center">
      <PictureQuizContent />
      <div className="mx-12 space-y-6 flex flex-col items-center">
        <Textarea
          placeholder="Write your answer in Japanese..."
          onChange={(e) => setUserAnswer(e.target.value)}
          className="font-japanese resize-none w-[550px] min-h-72 bg-background-secondary rounded-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-none py-6 px-8 placeholder:text-xl dark:placeholder:text-black dark:placeholder:text-opacity-50 placeholder:font-normal text-3xl text-black text-center font-medium shadow-inner border-[3px] dark:border-transparent border-black"
        />
        <div className="w-full flex flex-row justify-center gap-4">
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
