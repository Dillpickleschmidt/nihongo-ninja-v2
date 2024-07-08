"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function VerbToggle() {
  const { showVerbOptions, setShowVerbOptions } =
    useConjugationPracticeContext()

  const toggleVerbOptions = () => {
    setShowVerbOptions(!showVerbOptions)
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="toggleVerbs"
        onClick={toggleVerbOptions}
        checked={showVerbOptions}
      />
      <Label
        htmlFor="toggleVerbs"
        className="text-2xl font-semibold hover:cursor-pointer"
      >
        Verbs
      </Label>
    </div>
  )
}
