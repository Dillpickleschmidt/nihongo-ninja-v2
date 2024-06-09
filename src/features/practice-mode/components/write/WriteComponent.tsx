import { useEffect, useMemo, useState, useRef } from "react"
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
    [data, currentCardIndex],
  )
  const [userAnswer, setUserAnswer] = useState<string>("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setCorrectEntry(correctEntry)
    setUserAnswer("")
  }, [correctEntry, setCorrectEntry])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [hasUserAnswered])

  const handleInput = (userAnswer: string) => {
    setIsAnswerCorrect(
      handleWrittenAnswer(userAnswer, correctEntry, enabledAnswerCategories),
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
    <div className="mx-40 mt-28">
      <label className="text-sm">
        {!hasUserAnswered && "Type your answer"}
      </label>
      <Input
        ref={inputRef}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !hasUserAnswered) {
            e.preventDefault()
            handleInput(userAnswer)
          }
        }}
        autoFocus
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
