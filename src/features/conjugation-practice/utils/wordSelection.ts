import {
  Word,
  WordJSON,
  Conjugation,
} from "@/features/conjugation-practice/types"
import { generateConjugations } from "./generateConjugations"
import wordData from "@/features/conjugation-practice/data/wordData"

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
  return availableWords[randomIndex]
}

export function checkAnswer(word: Word, userInput: string): boolean {
  // This is a placeholder. You'll need to implement the actual answer checking logic.
  return word.conjugation.conjugations.includes(userInput)
}
