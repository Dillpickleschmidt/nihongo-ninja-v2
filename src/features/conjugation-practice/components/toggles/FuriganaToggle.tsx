"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function FuriganaToggle() {
  const { showFurigana, setShowFurigana } = useConjugationPracticeContext()

  const toggleFurigana = () => {
    setShowFurigana(!showFurigana)
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="toggleFurigana"
        onClick={toggleFurigana}
        checked={showFurigana}
      />
      <Label
        htmlFor="toggleFurigana"
        className="text-base font-normal hover:cursor-pointer"
      >
        Show furigana above kanji
      </Label>
    </div>
  )
}
