"use client"
import React, { useState, useEffect } from "react"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Word } from "@/features/conjugation-practice/types"
import {
  selectWord,
  checkAnswer,
} from "@/features/conjugation-practice/utils/wordSelection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import RubyText from "./RubyText"

export default function PracticeInterface() {
  const context = useConjugationPracticeContext()
  const {
    showFurigana,
    showEmojis,
    showStreak,
    showTranslation,
    isTranslationTransparent,
  } = context

  const [currentWord, setCurrentWord] = useState<Word | null>(null)
  const [userInput, setUserInput] = useState("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [isReadyForNext, setIsReadyForNext] = useState(false)
  const [enteredWord, setEnteredWord] = useState("")

  useEffect(() => {
    // Select a new word when the component mounts or when settings change
    const newWord = selectWord(context)
    setCurrentWord(newWord)
  }, [context])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentWord) return

    if (isReadyForNext) {
      // Move to the next word
      const newWord = selectWord(context)
      setCurrentWord(newWord)
      setUserInput("")
      setFeedback(null)
      setIsReadyForNext(false)
      setEnteredWord("")
    } else {
      // Check the answer
      const isCorrect = checkAnswer(currentWord, userInput)
      setFeedback(isCorrect ? "correct" : "incorrect")

      if (isCorrect) {
        const newStreak = streak + 1
        setStreak(newStreak)
        setMaxStreak(Math.max(maxStreak, newStreak))
      } else {
        setStreak(0)
      }

      setIsReadyForNext(true)
      setEnteredWord(userInput)
      setUserInput("")
    }
  }

  if (!currentWord) return <div className="text-center">Loading...</div>

  return (
    <div className="bg-card p-6 px-32">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          <RubyText showFurigana={showFurigana} furiganaSize="1rem">
            {currentWord.wordJSON.kanji}
          </RubyText>
        </h2>
        {showTranslation && (
          <p
            className={`text-lg ${isTranslationTransparent ? "text-transparent" : "text-card-foreground"}`}
          >
            {currentWord.wordJSON.eng}
          </p>
        )}
      </div>

      <div className="mb-6 text-center">
        {showEmojis && (
          <span className="mr-2 text-2xl">
            {/* Add emoji based on conjugation type */}
          </span>
        )}
        <p className="text-lg font-semibold">
          {`${currentWord.conjugation.tense}, 
            ${currentWord.conjugation.affirmative ? "Affirmative" : "Negative"}, 
            ${currentWord.conjugation.polite ? "Polite" : "Plain"}`}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4 h-24">
          {feedback && (
            <div
              className={`h-full rounded-lg p-2 text-center ${
                feedback === "correct" ? "bg-green-600" : "bg-card-foreground"
              }`}
            >
              {feedback === "correct" ? (
                <>
                  <p className="mt-2 text-xl font-medium">Correct!</p>
                  <p className="font-japanese text-3xl font-medium">
                    {enteredWord}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center">
                      <p className="min-h-10 font-japanese text-3xl font-medium">
                        {enteredWord}
                      </p>
                      <p className="ml-2 text-2xl text-red-500">✘</p>
                    </div>
                    <div className="flex items-center">
                      <p className="min-h-10 font-japanese text-3xl font-medium">
                        {currentWord.conjugation.conjugations.join(", ")}
                      </p>
                      <p className="ml-2 text-3xl text-green-500">●</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <WanakanaWrapper onChange={(e) => setUserInput(e.target.value)}>
          <Input
            type="text"
            value={userInput}
            // placeholder="Enter conjugation"
            className="w-full font-japanese text-lg font-medium"
            disabled={isReadyForNext}
          />
        </WanakanaWrapper>
        <Button type="submit" size="lg" className="mt-4 w-full">
          {isReadyForNext ? "Next" : "Submit"}
        </Button>
      </form>

      {showStreak && (
        <div className="mt-6 text-center">
          <p className="text-lg">
            Current Streak: <span className="font-bold">{streak}</span>
          </p>
          <p className="text-lg">
            Max Streak: <span className="font-bold">{maxStreak}</span>
          </p>
        </div>
      )}
    </div>
  )
}
