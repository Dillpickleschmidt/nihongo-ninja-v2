"use client"

import { createContext, useContext, useState } from "react"
import { CardObject, Entry } from "@/types"

type PracticeModeContextProps = {
  children: React.ReactNode
}

export type PageOptions = "start" | "practice" | "review" | "finished"

type PracticeModeContext = {
  isAnswerCorrect: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  hasUserAnswered: boolean
  setHasUserAnswered: React.Dispatch<React.SetStateAction<boolean>>
  correctEntry?: Entry & { key: string }
  setCorrectEntry: React.Dispatch<
    React.SetStateAction<(Entry & { key: string }) | undefined>
  >
  enabledAnswerCategories: string[]
  setEnabledAnswerCategories: React.Dispatch<React.SetStateAction<string[]>>
  currentCardIndex: number
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>
  currentPage: PageOptions
  setCurrentPage: React.Dispatch<React.SetStateAction<PageOptions>>
  recentlySeenCards: CardObject | null
  setRecentlySeenCards: React.Dispatch<React.SetStateAction<CardObject | null>>
}

const PracticeModeContext = createContext<PracticeModeContext | null>(null)

export function PracticeModeContextProvider({
  children,
}: PracticeModeContextProps) {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [hasUserAnswered, setHasUserAnswered] = useState(false)
  const [correctEntry, setCorrectEntry] = useState<
    (Entry & { key: string }) | undefined
  >()
  const [enabledAnswerCategories, setEnabledAnswerCategories] = useState<
    string[]
  >([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [recentlySeenCards, setRecentlySeenCards] = useState<CardObject | null>(
    null
  )
  const [currentPage, setCurrentPage] = useState<PageOptions>("start")

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
      "usePracticeModeContext must be used within a PracticeModeContextProvider"
    )
  }
  return context
}
