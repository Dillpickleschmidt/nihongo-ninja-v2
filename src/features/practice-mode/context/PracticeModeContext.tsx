"use client"

import { createContext, useContext, useState } from "react"
import { Card } from "@/types"

type PracticeModeContextProps = {
  children: React.ReactNode
}

type PracticeModeContext = {
  isAnswerCorrect: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  hasUserAnswered: boolean
  setHasUserAnswered: React.Dispatch<React.SetStateAction<boolean>>
  correctEntry?: Card
  setCorrectEntry: React.Dispatch<React.SetStateAction<Card | undefined>>
  enabledAnswerCategories: string[]
  setEnabledAnswerCategories: React.Dispatch<React.SetStateAction<string[]>>
  currentCardIndex: number
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>
  data: Card[]
  setData: React.Dispatch<React.SetStateAction<Card[]>>
  currentPage: PageOptions
  setCurrentPage: React.Dispatch<React.SetStateAction<PageOptions>>
  recentlySeenCards: Card[] | null
  setRecentlySeenCards: React.Dispatch<React.SetStateAction<Card[] | null>>
}

export type PageOptions = "start" | "practice" | "review" | "finished"

const PracticeModeContext = createContext<PracticeModeContext | null>(null)

export function PracticeModeContextProvider({
  children,
}: PracticeModeContextProps) {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [hasUserAnswered, setHasUserAnswered] = useState(false)
  const [correctEntry, setCorrectEntry] = useState<Card | undefined>()
  const [enabledAnswerCategories, setEnabledAnswerCategories] = useState<
    string[]
  >([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [data, setData] = useState<Card[]>([])
  const [currentPage, setCurrentPage] = useState<PageOptions>("start")
  const [recentlySeenCards, setRecentlySeenCards] = useState<Card[] | null>([])

  return (
    <PracticeModeContext.Provider
      value={{
        isAnswerCorrect,
        setIsAnswerCorrect,
        hasUserAnswered,
        setHasUserAnswered,
        correctEntry,
        setCorrectEntry,
        enabledAnswerCategories,
        setEnabledAnswerCategories,
        currentCardIndex,
        setCurrentCardIndex,
        data,
        setData,
        currentPage,
        setCurrentPage,
        recentlySeenCards,
        setRecentlySeenCards,
      }}
    >
      {children}
    </PracticeModeContext.Provider>
  )
}

export function usePracticeModeContext() {
  const context = useContext(PracticeModeContext)
  if (!context) {
    throw new Error(
      "usePracticeModeContext must be used within a PracticeModeContextProvider",
    )
  }
  return context
}
