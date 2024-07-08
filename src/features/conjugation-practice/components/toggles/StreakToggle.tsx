"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Emoji() {
  const { showStreak, setShowStreak } = useConjugationPracticeContext()

  const toggleStreak = () => {
    setShowStreak(!showStreak)
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="toggleStreak" onClick={toggleStreak} checked={showStreak} />
      <Label
        htmlFor="toggleStreak"
        className="text-base font-normal hover:cursor-pointer"
      >
        Show current/max streak
      </Label>
    </div>
  )
}
