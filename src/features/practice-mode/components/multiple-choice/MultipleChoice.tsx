import { useEffect, useMemo, useState } from "react"
import {
  handleMultipleChoiceSelection,
  presentMultipleChoiceOptions,
} from "./multiple-choice"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Card } from "@/types"
import { cn } from "@/utils/cn"

type MultipleChoiceProps = {
  data: Card[]
  shuffleInput?: boolean
}

export default function MultipleChoice({
  data,
  shuffleInput = true,
}: MultipleChoiceProps) {
  const {
    setCorrectEntry,
    setIsAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
    enabledAnswerCategories,
    currentCardIndex,
  } = usePracticeModeContext()

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  )

  const choices = useMemo(
    () => presentMultipleChoiceOptions(data, shuffleInput, currentCardIndex),
    [data, currentCardIndex],
  )

  useEffect(() => {
    setCorrectEntry(choices.correctOption)
  }, [choices, setCorrectEntry])

  const handleSelection = (selection: string, index: number) => {
    const isCorrect = handleMultipleChoiceSelection(choices, selection)
    setIsAnswerCorrect(isCorrect)
    setHasUserAnswered(true)
    setSelectedButtonIndex(index)
  }

  const correctAnswer = choices.correctOption.answerCategories
    .filter((category) => enabledAnswerCategories.includes(category.category))
    .flatMap((category) => category.answers)

  function getButtonClassNames(
    hasUserAnswered: boolean,
    isCorrect: boolean,
    isSelected: boolean,
  ) {
    const baseClass = "disabled:opacity-60 font-light bg-background"
    let newClasses = ""
    if (hasUserAnswered) {
      if (isCorrect) {
        newClasses =
          "disabled:opacity-100 bg-green-500 text-white font-semibold"
      } else if (isSelected) {
        newClasses = "disabled:opacity-100 bg-red-500 text-white"
      }
    }
    return cn(baseClass, newClasses)
  }

  return (
    <div>
      <ul className="mx-16 mb-6 mt-32 grid grid-cols-1 gap-[.875rem] lg:grid-cols-2">
        {choices.options.map((option, index) => {
          const enabledAnswers = option.answerCategories
            .filter((category) =>
              enabledAnswerCategories.includes(category.category),
            )
            .flatMap((category) => category.answers)

          const firstAnswerIndex = enabledAnswers[0]

          const isCorrect = correctAnswer.includes(firstAnswerIndex)
          const isSelected = selectedButtonIndex === index

          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleSelection(firstAnswerIndex, index)}
              disabled={hasUserAnswered}
              className={`${getButtonClassNames(
                hasUserAnswered,
                isCorrect,
                isSelected,
              )} min-h-20 w-full justify-start rounded-xl py-4 text-start font-japanese text-xl shadow-md duration-75 ease-in-out hover:scale-[98.5%]`}
            >
              {enabledAnswers.join(", ")}
            </Button>
          )
        })}
      </ul>
    </div>
  )
}
