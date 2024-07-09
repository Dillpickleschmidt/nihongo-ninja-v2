"use client"
import { cn } from "@/utils/cn"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { enhanceVocabWithKanaAndRuby } from "@/features/vocab-data-parsers"
import type { VocabEntry, EnhancedVocabEntry } from "@/types/vocab"

type CheckboxQuestionProps = {
  questions: string[]
  correctQuestions: string[]
  className?: string
  horizontal?: boolean
}

const transformQuestionsToVocabEntries = (
  questions: string[],
): VocabEntry[] => {
  return questions.map((question) => ({
    word: question.replace(/\[.*?\]/g, ""),
    furigana: [question],
  }))
}

export default function CheckboxQuestion({
  questions,
  correctQuestions,
  className,
  horizontal = false,
}: CheckboxQuestionProps) {
  const initialCheckedState = questions.reduce(
    (acc, question) => {
      acc[question] = false
      return acc
    },
    {} as { [key: string]: boolean },
  )

  const [checkedQuestions, setCheckedQuestions] = useState(initialCheckedState)
  const [correct, setCorrect] = useState<{ [key: string]: boolean }>({})
  const [submitted, setSubmitted] = useState(false)

  const handleCheckboxChange = (question: string) => {
    setCheckedQuestions((prev) => ({ ...prev, [question]: !prev[question] }))
  }

  const handleSubmit = () => {
    const newCorrect = questions.reduce(
      (acc, question) => {
        acc[question] =
          checkedQuestions[question] === correctQuestions.includes(question)
        return acc
      },
      {} as { [key: string]: boolean },
    )

    setCorrect(newCorrect)
    setSubmitted(true)
  }

  const getTextColorClass = (question: string) => {
    if (!submitted) return ""
    if (correct[question]) {
      return "rounded-md font-medium text-green-500"
    } else {
      return "dark:text-red-500 text-[#FF0000] rounded-md font-medium"
    }
  }

  const vocabEntries = transformQuestionsToVocabEntries(questions)
  const enhancedEntries = enhanceVocabWithKanaAndRuby(vocabEntries)

  const renderQuestion = (entry: EnhancedVocabEntry) => {
    return (
      <span
        className={cn("font-japanese text-xl", className)}
        dangerouslySetInnerHTML={{ __html: entry.rubyText?.[0] || entry.word }}
      />
    )
  }

  return (
    <>
      <div
        className={
          horizontal ? "md:flex md:flex-wrap md:space-x-6" : "space-y-3"
        }
      >
        {enhancedEntries.map((entry, index) => (
          <div
            key={index}
            className={`flex items-center ${horizontal ? "mt-3 space-x-3" : "space-x-3"}`}
          >
            <Checkbox
              id={`checkbox-${index}`}
              checked={!!checkedQuestions[entry.word]}
              onCheckedChange={() => handleCheckboxChange(entry.word)}
              className="cursor-pointer"
            />
            <Label
              htmlFor={`checkbox-${index}`}
              className={`${getTextColorClass(entry.word)} cursor-pointer ${!horizontal && "pr-6"} py-[.0625rem] text-xl ease-out hover:scale-[102%]`}
            >
              {renderQuestion(entry)}
            </Label>
          </div>
        ))}
      </div>
      <Button onClick={handleSubmit} size="sm" variant="outline">
        Submit
      </Button>
    </>
  )
}
