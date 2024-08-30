"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { EnhancedVocabEntry, VocabEntry } from "@/types/vocab"
import { extractHiragana } from "../vocab-data-parsers"
import ContentBox from "../content-box/ContentBox"

type VocabTestProps = {
  data: VocabEntry[]
  chapter: number
}

export default function VocabTest({ data, chapter }: VocabTestProps) {
  const [randomizedData, setRandomizedData] = useState<VocabEntry[]>([])
  const [showAnswers, setShowAnswers] = useState(false)
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    setRandomizedData([...data].sort(() => Math.random() - 0.5))
  }, [data])

  const handleInputChange = (
    index: number,
    field: "kana" | "english",
    value: string,
  ) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${index}-${field}`]: value.toLowerCase(),
    }))
  }

  const handleCheckAnswers = () => {
    setShowAnswers(true)
  }

  const isCorrect = (index: number, field: "kana" | "english") => {
    const userAnswer = userAnswers[`${index}-${field}`] || ""
    const entry = randomizedData[index]
    if (field === "kana") {
      return (
        userAnswer === extractHiragana(entry.furigana?.[0] ?? "").toLowerCase()
      )
    } else {
      return entry.english?.some((eng) => eng.toLowerCase() === userAnswer)
    }
  }

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={3}
      nextPageLink="/learn"
    >
      <h1 className="mx-28 border-b-2 border-orange-400 pb-12 pt-24 text-center text-4xl font-semibold">
        Chapter {chapter} Vocab Test
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <ul className="mt-12 list-none space-y-2">
          {randomizedData.map((entry, index) => (
            <li key={index} className="grid w-full grid-cols-3 gap-2">
              <h3 className="text-center text-[1.33rem]">{entry.word}</h3>

              <div className="flex flex-col space-y-1">
                <Input
                  placeholder="kana"
                  onChange={(e) =>
                    handleInputChange(index, "kana", e.target.value)
                  }
                  className="min-h-0 rounded-sm bg-card py-1 font-japanese text-lg placeholder:text-base placeholder:opacity-75"
                />
                {showAnswers && (
                  <>
                    {isCorrect(index, "kana") ? (
                      <span>✅</span>
                    ) : (
                      <small className="text-red-500">
                        {extractHiragana(entry.furigana?.[0] ?? "")}
                      </small>
                    )}
                  </>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <Input
                  placeholder="English"
                  onChange={(e) =>
                    handleInputChange(index, "english", e.target.value)
                  }
                  className="min-h-0 rounded-sm bg-card py-1 text-lg placeholder:text-base placeholder:opacity-75"
                />
                {showAnswers && (
                  <>
                    {isCorrect(index, "english") ? (
                      <span>✅</span>
                    ) : (
                      <small className="font-medium text-red-500">
                        {entry.english?.join(", ")}
                      </small>
                    )}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="!mt-8 flex justify-center">
          <Button onClick={handleCheckAnswers} className="bg-indigo-400">
            Check Answers
          </Button>
        </div>
      </div>
    </ContentBox>
  )
}
