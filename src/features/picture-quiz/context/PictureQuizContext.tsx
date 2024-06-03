"use client"
import { QuizItem } from "@/types/image-quiz"
import { createContext, useContext, useState } from "react"

type PictureQuizContextProps = {
  children: React.ReactNode
}

type PictureQuizContext = {
  correctEntry?: QuizItem
  setCorrectEntry: React.Dispatch<React.SetStateAction<QuizItem | undefined>>
  isAnswerCorrect: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  hasUserAnswered: boolean
  setHasUserAnswered: React.Dispatch<React.SetStateAction<boolean>>
}

const PictureQuizContext = createContext<PictureQuizContext | null>(null)

export function PictureQuizContextProvider({
  children,
}: PictureQuizContextProps) {
  const [correctEntry, setCorrectEntry] = useState<QuizItem>()
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [hasUserAnswered, setHasUserAnswered] = useState(false)

  return (
    <PictureQuizContext.Provider
      value={{
        correctEntry,
        setCorrectEntry,
        isAnswerCorrect,
        setIsAnswerCorrect,
        hasUserAnswered,
        setHasUserAnswered,
      }}
    >
      {children}
    </PictureQuizContext.Provider>
  )
}

export function usePictureQuizContext() {
  const context = useContext(PictureQuizContext)
  if (!context) {
    throw new Error(
      "usePictureQuizContext must be used within a PictureQuizContextProvider",
    )
  }
  return context
}
