import React, { useEffect, useMemo, useState } from "react"
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

type ButtonState = {
  isSelected: boolean
  isCorrect: boolean
  isAnswered: boolean
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

  const [buttonStates, setButtonStates] = useState<ButtonState[]>([])

  const choices = useMemo(
    () => presentMultipleChoiceOptions(data, shuffleInput, currentCardIndex),
    [data, currentCardIndex, shuffleInput],
  )

  useEffect(() => {
    setCorrectEntry(choices.correctOption)
    setButtonStates(
      choices.options.map(() => ({
        isSelected: false,
        isCorrect: false,
        isAnswered: false,
      })),
    )
  }, [choices, setCorrectEntry])

  const handleSelection = (selection: string, index: number) => {
    const isCorrect = handleMultipleChoiceSelection(choices, selection)
    setIsAnswerCorrect(isCorrect)
    setHasUserAnswered(true)

    setButtonStates((prevStates) =>
      prevStates.map((state, i) => ({
        ...state,
        isSelected: i === index,
        isCorrect: i === index && isCorrect,
        isAnswered: true,
      })),
    )
  }

  function getButtonClassNames(
    isAnswered: boolean,
    isCorrect: boolean,
    isSelected: boolean,
  ) {
    return cn(
      "disabled:opacity-60 font-light bg-background",
      isAnswered &&
        isCorrect &&
        "disabled:opacity-100 bg-green-500 text-white font-semibold",
      isAnswered &&
        isSelected &&
        !isCorrect &&
        "disabled:opacity-100 bg-red-500 text-white",
    )
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
          const buttonState = buttonStates[index] || {
            isSelected: false,
            isCorrect: false,
            isAnswered: false,
          }

          return (
            <Button
              key={`button-${index}-${buttonState.isAnswered}-${buttonState.isCorrect}-${buttonState.isSelected}`}
              variant="outline"
              onClick={() => handleSelection(firstAnswerIndex, index)}
              disabled={hasUserAnswered}
              className={cn(
                getButtonClassNames(
                  buttonState.isAnswered,
                  buttonState.isCorrect,
                  buttonState.isSelected,
                ),
                "min-h-20 w-full justify-start rounded-xl py-4 text-start font-japanese text-xl shadow-md duration-75 ease-in-out hover:scale-[98.5%]",
              )}
            >
              {enabledAnswers.join(", ")}
            </Button>
          )
        })}
      </ul>
    </div>
  )
}
