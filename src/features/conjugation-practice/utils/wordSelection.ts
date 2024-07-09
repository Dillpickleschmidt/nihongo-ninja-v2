import {
  Word,
  WordJSON,
  Conjugation,
} from "@/features/conjugation-practice/types"
import { generateConjugations } from "./generateConjugations"
import wordData from "@/features/conjugation-practice/data/wordData"
import { extractHiragana } from "@/features/vocab-data-parsers"

export function selectWord(settings: any): Word | null {
  const {
    showVerbOptions,
    showAdjectiveOptions,
    showVerbTypes,
    showAdjectiveTypes,
    showVerbTenses,
    showAdjectiveTenses,
    showVerbAffirmativeNegative,
    showAdjectiveAffirmativeNegative,
    showVerbPlainPolite,
    showAdjectivePlainPolite,
  } = settings

  let availableWords: Word[] = []

  if (showVerbOptions) {
    const filteredVerbs = wordData.verbs.filter(
      (verb) =>
        (showVerbTypes.verbgodan && verb.type === "godan") ||
        (showVerbTypes.verbichidan && verb.type === "ichidan") ||
        (showVerbTypes.verbirregular && verb.type === "irv"),
    )

    filteredVerbs.forEach((verb) => {
      const conjugations = generateConjugations(verb)
      conjugations.forEach((conj) => {
        if (
          (showVerbTenses.verbpresent && conj.tense === "Present") ||
          (showVerbTenses.verbpast && conj.tense === "Past") ||
          (showVerbTenses.verbte && conj.tense === "て-form")
        ) {
          if (
            (showVerbAffirmativeNegative.verbaffirmative && conj.affirmative) ||
            (showVerbAffirmativeNegative.verbnegative && !conj.affirmative)
          ) {
            if (
              (showVerbPlainPolite.verbplain && !conj.polite) ||
              (showVerbPlainPolite.verbpolite && conj.polite)
            ) {
              availableWords.push({
                wordJSON: verb,
                conjugation: conj,
                probability: 1,
                wasRecentlyIncorrect: false,
              })
            }
          }
        }
      })
    })
  }

  if (showAdjectiveOptions) {
    const filteredAdjectives = wordData.adjectives.filter(
      (adj) =>
        (showAdjectiveTypes.adjectivei && adj.type === "i") ||
        (showAdjectiveTypes.adjectivena && adj.type === "na") ||
        (showAdjectiveTypes.adjectiveirregular && adj.type === "ira"),
    )

    filteredAdjectives.forEach((adj) => {
      const conjugations = generateConjugations(adj)
      conjugations.forEach((conj) => {
        if (
          (showAdjectiveTenses.adjectivepresent && conj.tense === "Present") ||
          (showAdjectiveTenses.adjectivepast && conj.tense === "Past") ||
          (showAdjectiveTenses.adjectiveadverb && conj.tense === "て-form")
        ) {
          if (
            (showAdjectiveAffirmativeNegative.adjectiveaffirmative &&
              conj.affirmative) ||
            (showAdjectiveAffirmativeNegative.adjectivenegative &&
              !conj.affirmative)
          ) {
            if (
              (showAdjectivePlainPolite.adjectiveplain && !conj.polite) ||
              (showAdjectivePlainPolite.adjectivepolite && conj.polite)
            ) {
              availableWords.push({
                wordJSON: adj,
                conjugation: conj,
                probability: 1,
                wasRecentlyIncorrect: false,
              })
            }
          }
        }
      })
    })
  }

  if (availableWords.length === 0) {
    return null
  }

  // Select a random word from the available words
  const randomIndex = Math.floor(Math.random() * availableWords.length)
  console.log(
    "Correct answers:",
    availableWords[randomIndex].conjugation.conjugations,
  )
  return availableWords[randomIndex]
}

/**
 * Checks if the user's answer matches any of the correct conjugations.
 * @param {Word} word - The current word object containing the correct conjugations.
 * @param {string} userInput - The user's input to check.
 * @returns {boolean} True if the answer is correct, false otherwise.
 */
export function checkAnswer(word: Word, userInput: string): boolean {
  // Normalize the user input by trimming whitespace
  const normalizedUserInput = userInput.trim()

  console.log("User input:", normalizedUserInput)
  console.log("Expected answers:", word.conjugation.conjugations)

  // Check if the normalized user input matches any of the correct conjugations
  return word.conjugation.conjugations.some(
    (correctAnswer) => normalizedUserInput === correctAnswer,
  )
}
