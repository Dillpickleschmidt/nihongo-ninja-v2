"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function AdjectiveToggle() {
  const { showAdjectiveOptions, setShowAdjectiveOptions } =
    useConjugationPracticeContext()

  const toggleAdjectiveOptions = () => {
    setShowAdjectiveOptions(!showAdjectiveOptions)
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="toggleAdjectives"
        onClick={toggleAdjectiveOptions}
        checked={showAdjectiveOptions}
      />
      <Label
        htmlFor="toggleAdjectives"
        className="text-2xl font-semibold hover:cursor-pointer"
      >
        Adjectives
      </Label>
    </div>
  )
}
