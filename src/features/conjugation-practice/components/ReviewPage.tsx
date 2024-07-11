"use client"

/*
When you click to switch to the ReviewPage, it triggers the creation of a new review session.
This calls the generateQuestions function in questionGenerator.ts.
generateQuestions calls setAnswers for each question.
setAnswers calls getConjugations.
*/

import { useState, useEffect } from "react"
import { useSettingsContext } from "../context/SettingsContext"
import { useReviewSession } from "../hooks/useReviewSession"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export default function ReviewPage() {
  const { settings } = useSettingsContext()
  const [sessionState, sessionActions] = useReviewSession()
  const [userAnswer, setUserAnswer] = useState("")

  useEffect(() => {
    // Only start a new session if there are no questions or if the session is complete
    if (sessionState.questions.length === 0 || sessionState.isComplete) {
      console.log("Starting new session")
      sessionActions.startSession()
    }
  }, [
    settings,
    sessionActions,
    sessionState.questions.length,
    sessionState.isComplete,
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sessionActions.submitAnswer(userAnswer)
    setUserAnswer("")
  }

  const currentQuestion = sessionActions.getCurrentQuestion()

  if (sessionState.isComplete) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Review Complete!</h1>
        <p className="text-xl">
          Your score: {sessionState.score} / {sessionState.questions.length}
        </p>
        <Button onClick={() => sessionActions.startSession()}>
          Start New Session
        </Button>
      </div>
    )
  }

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  const displayTerm = currentQuestion.reversed
    ? currentQuestion.answers[0]
    : currentQuestion.term

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Review</h1>
      <div className="space-y-2">
        <p className="text-xl">
          {currentQuestion.reversed
            ? "What is the dictionary form of:"
            : "Conjugate:"}{" "}
          <span className="font-bold">{displayTerm.reading}</span>
          {displayTerm.word !== displayTerm.reading && ` (${displayTerm.word})`}
        </p>
        <p>Type: {currentQuestion.type}</p>
        <p>Part of Speech: {currentQuestion.term.partOfSpeech}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <WanakanaWrapper
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        >
          <Input type="text" placeholder="Your answer" />
        </WanakanaWrapper>
        <Button type="submit">Submit</Button>
      </form>
      {currentQuestion.answered && (
        <div className="space-y-2">
          <p
            className={
              currentQuestion.correct ? "text-green-600" : "text-red-600"
            }
          >
            {currentQuestion.correct ? "Correct!" : "Incorrect."}
          </p>
          {!currentQuestion.correct && (
            <p>
              Correct answer(s):{" "}
              {currentQuestion.answers.map((a) => a.reading).join(", ")}
            </p>
          )}
          <Button onClick={sessionActions.nextQuestion}>Next Question</Button>
        </div>
      )}
      <p>
        Question {sessionState.currentIndex + 1} of{" "}
        {sessionState.questions.length}
      </p>
    </div>
  )
}
