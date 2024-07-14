"use client"
import { useState } from "react"
import SettingsPage from "./components/SettingsPage"
import PracticePage from "./components/PracticePage"
import { Button } from "@/components/ui/button"
import { SettingsContextProvider } from "./context/SettingsContext"

type Page = "settings" | "practice"

export default function ConjugationPractice() {
  const [currentPage, setCurrentPage] = useState<Page>("settings")

  const navigateToReview = () => setCurrentPage("practice")
  const navigateToSettings = () => setCurrentPage("settings")

  return (
    <div className="flex w-full flex-col items-center px-12 pb-36 sm:px-16 md:px-24">
      <SettingsContextProvider>
        {currentPage === "settings" && (
          <SettingsPage onStartReview={navigateToReview} />
        )}
        {currentPage === "practice" && (
          <>
            <div
              style={{
                transform: "translate(-50%, -75%)",
                left: "50%",
                top: "50%",
                position: "absolute",
              }}
            >
              <PracticePage />
              <Button
                onClick={navigateToSettings}
                size="sm"
                variant="link"
                className="mt-4"
              >
                {"<-"} Back to Settings
              </Button>
            </div>
          </>
        )}
      </SettingsContextProvider>
    </div>
  )
}
