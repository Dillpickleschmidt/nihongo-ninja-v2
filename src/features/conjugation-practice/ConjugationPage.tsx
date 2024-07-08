"use client"
import { useState } from "react"
import PracticeInterface from "./components/PracticeInterface"
import SettingsMenu from "./components/SettingsMenu"
import { Button } from "@/components/ui/button"

export default function ConjugationPractice() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => setShowSettings(!showSettings)}
          variant="outline"
        >
          {showSettings ? "Back to Practice" : "Settings"}
        </Button>
      </div>

      {showSettings ? <SettingsMenu /> : <PracticeInterface />}
    </div>
  )
}
