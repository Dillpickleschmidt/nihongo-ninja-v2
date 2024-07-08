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

  useEffect(() => {
    // Select a new word when the component mounts or when settings change
    const newWord = selectWord(context)
    setCurrentWord(newWord)
  }, [context])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentWord) return

    const isCorrect = checkAnswer(currentWord, userInput)
    setFeedback(isCorrect ? "correct" : "incorrect")

    if (isCorrect) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setMaxStreak(Math.max(maxStreak, newStreak))
    } else {
      setStreak(0)
    }

    // Select a new word for the next question
    const newWord = selectWord(context)
    setCurrentWord(newWord)
    setUserInput("")
  }

  if (!currentWord) return <div className="text-center">Loading...</div>

  return (
    <div className="bg-card p-6 px-32">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          {
            showFurigana
              ? currentWord.wordJSON.kanji
              : currentWord.wordJSON.kanji /* display without furigana */
          }
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
        <WanakanaWrapper>
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            // placeholder="Enter conjugation"
            className="w-full font-japanese text-lg font-medium"
          />
        </WanakanaWrapper>
        <Button type="submit" size="lg" className="mt-4 w-full">
          Submit
        </Button>
      </form>

      {feedback && (
        <div
          className={`rounded p-2 text-center ${
            feedback === "correct"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {feedback === "correct" ? "Correct!" : "Incorrect. Try again."}
        </div>
      )}

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
