"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Emoji() {
  const { showEmojis, setShowEmojis } = useConjugationPracticeContext()

  const toggleEmojis = () => {
    setShowEmojis(!showEmojis)
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="toggleEmojis" onClick={toggleEmojis} checked={showEmojis} />
      <Label
        htmlFor="toggleEmojis"
        className="text-base font-normal hover:cursor-pointer"
      >
        Show emojis above conjugation types
      </Label>
    </div>
  )
}
