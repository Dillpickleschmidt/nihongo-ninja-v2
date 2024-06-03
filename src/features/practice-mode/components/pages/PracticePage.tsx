"use client"
import { useEffect, useState, useRef } from "react"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Button } from "@/components/ui/button"
import { CardObject } from "@/types"
import CardTypeSwitch from "../CardTypeSwitch"
import { handleNextQuestion } from "../cardHandlers"

type PracticePageProps = {
  deckId: string
  activeCards: CardObject
  setActiveCards: (cards: CardObject) => void
  inactiveCards: CardObject
  setInactiveCards: (cards: CardObject) => void
  unslicedData: CardObject
}

export default function PracticePage({
  deckId,
  activeCards,
  setActiveCards,
  inactiveCards,
  setInactiveCards,
  unslicedData,
}: PracticePageProps) {
  const {
    isAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
    currentCardIndex,
    setCurrentCardIndex,
    setCurrentPage,
    recentlySeenCards,
    setRecentlySeenCards,
  } = usePracticeModeContext()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    console.log("Now practicing deck " + deckId)
  }, [deckId])

  useEffect(() => {
    if (recentlySeenCards && Object.keys(recentlySeenCards).length === 7) {
      setCurrentPage("review")
    }
  }, [recentlySeenCards, setCurrentPage])

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [hasUserAnswered])

  return (
    <div className="flex w-full justify-center">
      <div className="mt-64 w-full">
        {/* <h1 className="text-3xl text-center font-black">
          Deck {deckId} Learning Page
        </h1> */}
        {/* <Text className="text-xl">This is where you'll practice</Text> */}
        {/* <div>
          <CategoryDropdown uniqueCategories={uniqueCategories} />
        </div> */}
        <CardTypeSwitch data={activeCards} />
      </div>
      {hasUserAnswered && (
        <Button
          ref={buttonRef}
          size="lg"
          onClick={() =>
            handleNextQuestion(
              isAnswerCorrect,
              activeCards,
              inactiveCards,
              currentCardIndex,
              setCurrentCardIndex,
              setHasUserAnswered,
              setActiveCards,
              setInactiveCards,
              setCurrentPage,
              recentlySeenCards,
              setRecentlySeenCards,
              unslicedData,
            )
          }
          className="absolute bottom-12 shadow-md"
        >
          <span>Next Question {"->"}</span>
        </Button>
      )}
    </div>
  )
}
