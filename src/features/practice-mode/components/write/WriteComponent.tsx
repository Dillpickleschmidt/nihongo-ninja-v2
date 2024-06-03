import { useEffect, useMemo, useState } from "react"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { handleWrittenAnswer, presentWriteOptions } from "./write"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardObject } from "@/types"

type WriteComponentProps = {
  data: CardObject
  shuffleInput?: boolean
}

export default function WriteComponent({
  data,
  shuffleInput = true,
}: WriteComponentProps) {
  const {
    setCorrectEntry,
    setIsAnswerCorrect,
    setHasUserAnswered,
    enabledAnswerCategories,
    currentCardIndex,
    hasUserAnswered,
    isAnswerCorrect,
  } = usePracticeModeContext()

  const correctEntry = useMemo(
    () => presentWriteOptions(data, shuffleInput, currentCardIndex),
    [data, currentCardIndex]
  )
  const [userAnswer, setUserAnswer] = useState<string>("")

  useEffect(() => {
    setCorrectEntry(correctEntry)
    setUserAnswer("")
  }, [correctEntry])

  const handleInput = (userAnswer: string) => {
    setIsAnswerCorrect(
      handleWrittenAnswer(userAnswer, correctEntry, enabledAnswerCategories)
    )
    setHasUserAnswered(true)

    // Flatten the enabled answers from all categories for logging
    const enabledAnswers = correctEntry.answerCategories
      .filter((category) => enabledAnswerCategories.includes(category.category))
      .flatMap((category) => category.answers)

    console.log("User answer: ", userAnswer)
    console.log("Correct answer: ", enabledAnswers.join(", "))
  }

  return (
    <div className="mt-4">
      <label>{!hasUserAnswered && "Type your answer"}</label>
      <Input
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        disabled={hasUserAnswered}
        className={`${
          hasUserAnswered &&
          (isAnswerCorrect ? "text-green-500" : "text-red-500")
        } font-bold opacity-100 xl:!text-lg`}
      />
      <Button
        onClick={() => handleInput(userAnswer)}
        disabled={hasUserAnswered}
        className="my-2 disabled:opacity-90"
      >
        Submit
      </Button>
    </div>
  )
}
