"use client"
import { useState } from "react"
import SettingsPage from "./components/SettingsPage"
import PracticePage from "./components/PracticePage"
import SummaryPage from "./components/SummaryPage"
import { Button } from "@/components/ui/button"
import { SettingsContextProvider } from "./context/SettingsContext"
import { useReviewSession } from "./hooks/useReviewSession"

type Page = "settings" | "practice" | "summary"

export default function ConjugationPracticePageHandler() {
  const [currentPage, setCurrentPage] = useState<Page>("settings")
  const [sessionState, sessionActions] = useReviewSession()

  const navigateToReview = () => {
    sessionActions.startSession()
    setCurrentPage("practice")
  }
  const navigateToSettings = () => setCurrentPage("settings")
  const navigateToSummary = () => setCurrentPage("summary")

  return (
    <div className="flex w-full flex-col items-center px-12 pb-36 sm:px-16 md:px-24">
      <>
        {currentPage === "settings" && (
          <SettingsPage onStartReview={navigateToReview} />
        )}
        {currentPage === "practice" && (
          <div
            style={{
              transform: "translate(-50%, -75%)",
              left: "50%",
              top: "50%",
              position: "absolute",
            }}
          >
            <PracticePage
              sessionState={sessionState}
              sessionActions={sessionActions}
              onComplete={navigateToSummary}
            />
            <Button
              onClick={navigateToSettings}
              size="sm"
              variant="link"
              className="mt-4"
            >
              {"<-"} Back to Settings
            </Button>
          </div>
        )}
        {currentPage === "summary" && (
          <SummaryPage
            sessionState={sessionState}
            onRestartSession={navigateToReview}
            onReturnToSettings={navigateToSettings}
          />
        )}
      </>
    </div>
  )
}
