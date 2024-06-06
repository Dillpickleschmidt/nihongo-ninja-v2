"use client"
import ContentBox from "@/components/ContentBox"
import PracticePage from "./components/pages/PracticePage"
import StartPage from "./components/pages/StartPage"
import ReviewPage from "./components/pages/ReviewPage"
import FinishPage from "./components/pages/FinishPage"
import { CardObject, JSONWithAnswerCategories } from "@/types"
import { usePracticeModeContext } from "./context/PracticeModeContext"
import { useEffect, useMemo, useState } from "react"
import useDeckSplit from "./components/useDeckSplit"
import { Button } from "@/components/ui/button"

type PracticeModeProps = {
  children: React.ReactNode
  data: JSONWithAnswerCategories
  deckId: string
  slicedData: CardObject
  remainingData: CardObject
  unslicedData: CardObject
}

export default function PracticeMode({
  children,
  data,
  deckId,
  slicedData,
  remainingData,
  unslicedData,
}: PracticeModeProps) {
  const {
    currentPage,
    setEnabledAnswerCategories,
    setCurrentPage,
    recentlySeenCards,
  } = usePracticeModeContext()

  const uniqueCategories = useMemo(() => extractUniqueCategories(data), [data])

  const [activeCards, setActiveCards] = useState(slicedData)
  const [inactiveCards, setInactiveCards] = useState(remainingData)

  useEffect(() => {
    setEnabledAnswerCategories(uniqueCategories)
  }, [uniqueCategories])

  function renderPage() {
    switch (currentPage) {
      case "start":
        return (
          <StartPage deckId={deckId} data={data}>
            {children}
          </StartPage>
        )
      case "practice":
        return (
          <PracticePage
            deckId={deckId}
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
        return <FinishPage data={unslicedData} />
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

function extractUniqueCategories(data: JSONWithAnswerCategories): string[] {
  const categories = new Set<string>()
  Object.values(data).forEach((value) => {
    value.answerCategories.forEach((category) => {
      categories.add(category.category)
    })
  })
  return Array.from(categories)
}
