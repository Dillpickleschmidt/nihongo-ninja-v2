"use client"
import { useState } from "react"
import { Settings } from "../types"
import { Question, checkAnswer } from "../utils/questionUtils"
import { generateQuestions } from "../utils/questionGenerator"

type ReviewSessionState = {
  questions: Question[]
  currentIndex: number
  score: number
  isComplete: boolean
}

type ReviewSessionActions = {
  startSession: (settings: Settings) => void
  submitAnswer: (answer: string) => void
  nextQuestion: () => void
  getCurrentQuestion: () => Question | null
}

export function useReviewSession(): [ReviewSessionState, ReviewSessionActions] {
  const [state, setState] = useState<ReviewSessionState>({
    questions: [],
    currentIndex: 0,
    score: 0,
    isComplete: false,
  })

  function startSession(settings: Settings) {
    const questions = generateQuestions(settings)
    setState({
      questions,
      currentIndex: 0,
      score: 0,
      isComplete: false,
    })
  }

  function submitAnswer(answer: string) {
    setState((prevState) => {
      if (
        prevState.isComplete ||
        prevState.currentIndex >= prevState.questions.length
      ) {
        return prevState
      }

      const currentQuestion = prevState.questions[prevState.currentIndex]
      const checkedQuestion = checkAnswer(currentQuestion, answer)
      const newScore = prevState.score + (checkedQuestion.correct ? 1 : 0)

      const updatedQuestions = [...prevState.questions]
      updatedQuestions[prevState.currentIndex] = checkedQuestion

      return {
        ...prevState,
        questions: updatedQuestions,
        score: newScore,
      }
    })
  }

  function nextQuestion() {
    setState((prevState) => {
      const nextIndex = prevState.currentIndex + 1
      const isComplete = nextIndex >= prevState.questions.length

      return {
        ...prevState,
        currentIndex: nextIndex,
        isComplete,
      }
    })
  }

  function getCurrentQuestion() {
    return state.questions[state.currentIndex] || null
  }

  const actions: ReviewSessionActions = {
    startSession,
    submitAnswer,
    nextQuestion,
    getCurrentQuestion,
  }

  return [state, actions]
}
