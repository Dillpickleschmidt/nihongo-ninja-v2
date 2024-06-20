"use client"
import ContentBox from "@/components/ContentBox"
import PracticePage from "./components/pages/PracticePage"
import StartPage from "./components/pages/StartPage"
import ReviewPage from "./components/pages/ReviewPage"
import FinishPage from "./components/pages/FinishPage"
import { usePracticeModeContext } from "./context/PracticeModeContext"
import { useEffect, useMemo, useState } from "react"
import type { Card } from "@/types"

type PracticeModeProps = {
  children: React.ReactNode
  deckName: string
  slicedData: Card[]
  remainingData: Card[]
  unslicedData: Card[]
}

export default function PracticeMode({
  children,
  deckName,
  slicedData,
  remainingData,
  unslicedData,
}: PracticeModeProps) {
  const { currentPage, setEnabledAnswerCategories, setData } =
    usePracticeModeContext()

  useEffect(() => {
    setData(unslicedData)
  }, [unslicedData, setData])

  const uniqueCategories = useMemo(
    () => extractUniqueCategories(unslicedData),
    [unslicedData],
  )

  const [activeCards, setActiveCards] = useState(slicedData)
  const [inactiveCards, setInactiveCards] = useState(remainingData)

  useEffect(() => {
    setEnabledAnswerCategories(uniqueCategories)
  }, [uniqueCategories, setEnabledAnswerCategories])

  function renderPage() {
    switch (currentPage) {
      case "start":
        return <StartPage deckName={deckName}>{children}</StartPage>
      case "practice":
        return (
          <PracticePage
            deckName={deckName}
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
    }
  }

  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=""
    >
      {renderPage()}
    </ContentBox>
  )
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
