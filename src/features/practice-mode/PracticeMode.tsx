"use client"
import ContentBox from "@/components/ContentBox"
import PracticePage from "./components/pages/PracticePage"
import StartPage from "./components/pages/StartPage"
import ReviewPage from "./components/pages/ReviewPage"
import FinishPage from "./components/pages/FinishPage"
import { usePracticeModeContext } from "./context/PracticeModeContext"
import { useEffect, useMemo, useState } from "react"
import type { Card } from "@/types"
import useDeckSplit from "./components/useDeckSplit"

type PracticeModeProps = {
  deckName: string
  data: Card[]
}

export default function PracticeMode({
  deckName,
  data: propData,
}: PracticeModeProps) {
  const { currentPage, setEnabledAnswerCategories, data, setData } =
    usePracticeModeContext()
  const [shuffleInput, setShuffleInput] = useState(true)

  useEffect(() => {
    if (propData.length > 0) {
      // Shuffle the input data
      const newData = shuffleInput
        ? [...propData].sort(() => Math.random() - 0.5)
        : propData
      setData(newData)
    }
  }, [propData, setData, shuffleInput])

  const { slicedData, remainingData, unslicedData } = useDeckSplit(data)

  const uniqueCategories = useMemo(
    () => extractUniqueCategories(unslicedData),
    [unslicedData],
  )

  const [activeCards, setActiveCards] = useState(slicedData)
  const [inactiveCards, setInactiveCards] = useState(remainingData)

  useEffect(() => {
    setActiveCards(slicedData)
    setInactiveCards(remainingData)
  }, [unslicedData])

  useEffect(() => {
    setEnabledAnswerCategories(uniqueCategories)
  }, [uniqueCategories, setEnabledAnswerCategories])

  function renderPage() {
    switch (currentPage) {
      case "start":
        return <StartPage deckName={deckName} />
      case "practice":
        return (
          <PracticePage
            unslicedData={unslicedData}
            activeCards={activeCards}
            setActiveCards={setActiveCards}
            inactiveCards={inactiveCards}
            setInactiveCards={setInactiveCards}
          />
        )
      case "review":
        return <ReviewPage />
      case "finished":
        return <FinishPage />
      default:
        return null
    }
  }

  return <>{renderPage()}</>
}

function extractUniqueCategories(data: Card[]): string[] {
  const categories = new Set<string>()
  data.forEach((card) => {
    card.answerCategories.forEach((category) => {
      categories.add(category.category)
    })
  })
  return Array.from(categories)
}
