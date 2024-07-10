"use client"
import { useState } from "react"
import SettingsPage from "./components/SettingsPage"
import ReviewPage from "./components/ReviewPage"
import { Button } from "@/components/ui/button"
import { SettingsContextProvider } from "./context/SettingsContext"

type Page = "settings" | "review"

export default function ConjugationPractice() {
  const [currentPage, setCurrentPage] = useState<Page>("settings")

  const navigateToReview = () => setCurrentPage("review")
  const navigateToSettings = () => setCurrentPage("settings")

  return (
    <div className="container mx-auto flex flex-col items-center p-4">
      <SettingsContextProvider>
        {currentPage === "settings" && (
          <SettingsPage onStartReview={navigateToReview} />
        )}
        {currentPage === "review" && (
          <>
            <ReviewPage />
            <Button onClick={navigateToSettings} className="mt-4">
              Back to Settings
            </Button>
          </>
        )}
      </SettingsContextProvider>
    </div>
  )
}
