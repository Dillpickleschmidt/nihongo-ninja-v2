// questionGenerator.ts

import { Settings } from "../types"
import {
  Question,
  createQuestion,
  setAnswers,
  reverseQuestion,
} from "./questionUtils"
import { getJLPTLevels } from "./settingsUtils"
import wordDatabase from "../data/wordDatabase.json"

type WordDatabase = {
  verb: Word[]
  "adj-i": Word[]
  "adj-na": Word[]
}

type Word = {
  japanese: { word?: string; reading: string }[]
  senses: { english_definitions: string[]; parts_of_speech: string[] }[]
  level: number
}

/**
 * Generates a set of practice questions based on the provided settings.
 * @param settings - The current application settings.
 * @returns An array of Question objects.
 */
export function generateQuestions(settings: Settings): Question[] {
  const questions: Question[] = []
  const words = filterWords(settings)
  const types = getQuestionTypes(settings)

  while (questions.length < settings.amount && words.length > 0) {
    const wordIndex = Math.floor(Math.random() * words.length)
    const word = words[wordIndex]
    const typeIndex = Math.floor(Math.random() * types.length)
    const type = types[typeIndex]

    const questionWord = {
      word: word.japanese[0].word || word.japanese[0].reading,
      reading: word.japanese[0].reading,
      partOfSpeech: word.senses[0].parts_of_speech[0],
      meaning: word.senses[0].english_definitions[0],
    }

    let question = createQuestion(questionWord, type)
    question = setAnswers(question)

    if (settings.reverse && Math.random() < 0.5) {
      question = reverseQuestion(question)
    }

    questions.push(question)
    words.splice(wordIndex, 1) // Remove the word to avoid duplicates
  }

  shuffleArray(questions)
  return questions
}

/**
 * Filters the word database based on the current settings.
 * @param settings - The current application settings.
 * @returns An array of filtered Word objects.
 */
function filterWords(settings: Settings): Word[] {
  const jlptLevels = getJLPTLevels(settings.jlptLevel)
  const filteredWords: Word[] = []

  if (settings.verb) {
    const verbs = wordDatabase.verb.filter(
      (word) =>
        jlptLevels.includes(`n${word.level}`) &&
        (!settings.leaveOutSuru ||
          !word.senses[0].parts_of_speech.includes("Suru verb")),
    )
    filteredWords.push(...verbs)
  }
  if (settings.iAdjective) {
    const iAdjectives = wordDatabase["adj-i"].filter((word) =>
      jlptLevels.includes(`n${word.level}`),
    )
    filteredWords.push(...iAdjectives)
  }
  if (settings.naAdjective) {
    const naAdjectives = wordDatabase["adj-na"].filter((word) =>
      jlptLevels.includes(`n${word.level}`),
    )
    filteredWords.push(...naAdjectives)
  }

  return filteredWords
}

/**
 * Determines the question types to use based on the current settings.
 * @param settings - The current application settings.
 * @returns An array of question type strings.
 */
function getQuestionTypes(settings: Settings): string[] {
  const types: string[] = []

  if (settings.normal) types.push("normal")
  if (settings.teForm) types.push("te-form")
  if (settings.volitional) types.push("volitional")
  if (settings.taiForm) types.push("tai-form")
  if (settings.tariForm) types.push("tari-form")
  if (settings.potential) types.push("potential")
  if (settings.imperative) types.push("imperative")
  if (settings.conditional) types.push("conditional")
  if (settings.passive) types.push("passive")
  if (settings.causative) types.push("causative")
  if (settings.causativePassive) types.push("causative-passive")

  const fullTypes: string[] = []

  const speechLevels: string[] = []
  if (settings.polite) speechLevels.push("polite")
  if (settings.plain) speechLevels.push("plain")

  const tenses: string[] = []
  if (settings.nonPast) tenses.push("non-past")
  if (settings.past) tenses.push("past")

  const polarities: string[] = []
  if (settings.positive) polarities.push("positive")
  if (settings.negative) polarities.push("negative")

  types.forEach((type) => {
    speechLevels.forEach((speechLevel) => {
      tenses.forEach((tense) => {
        polarities.forEach((polarity) => {
          fullTypes.push(`${speechLevel}-${tense}-${polarity}-${type}`)
        })
      })
    })
  })

  return fullTypes
}

/**
 * Shuffles an array in place.
 * @param array - The array to shuffle.
 */
function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
