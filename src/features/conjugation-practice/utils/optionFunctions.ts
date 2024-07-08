import type { Word } from "@/features/conjugation-practice/types"

/**
 * Determines the part of speech of a given word.
 * @param {Word} word - The word object containing wordJSON and conjugation data.
 * @returns {string | undefined} - Returns "v" for verbs, "a" for adjectives, and undefined for others.
 */
export function wordPartOfSpeech(word: Word): string | undefined {
  if (["u", "ru", "irv"].includes(word.wordJSON.type)) return "v"
  else if (["i", "na", "ira"].includes(word.wordJSON.type)) return "a"
}

/**
 * Checks if the tense of a given word is not equal to a specified tense.
 * @param {Word} word - The word object containing wordJSON and conjugation data.
 * @param {string} s - The tense to compare against.
 * @returns {boolean} - Returns true if the word's tense is not equal to the specified tense.
 */
export function isNotTense(word: Word, s: string): boolean {
  return word.conjugation.tense !== s
}

// If one of these filters is applied to an array of Words,
// that type of Word will be removed from the array.
export const questionRemoveFilters = {
  // Returns true if the word is not a verb.
  verb: (word: Word) => wordPartOfSpeech(word) !== "v",
  verbs: {
    // Returns true if the verb is not in the present tense.
    verbpresent: (word: Word) => isNotTense(word, "Present"),
    // Returns true if the verb is not in the past tense.
    verbpast: (word: Word) => isNotTense(word, "Past"),
    // Returns true if the verb is not in the て-form.
    verbte: (word: Word) => isNotTense(word, "て-form"),
    // Returns true if the verb is not affirmative.
    verbaffirmative: (word: Word) => word.conjugation.affirmative !== true,
    // Returns true if the verb is not negative.
    verbnegative: (word: Word) => word.conjugation.affirmative !== false,
    // Returns true if the verb is not in plain form.
    verbplain: (word: Word) => word.conjugation.polite !== false,
    // Returns true if the verb is not in polite form.
    verbpolite: (word: Word) => word.conjugation.polite !== true,
    // Returns true if the verb is not a u-verb.
    verbgodan: (word: Word) => word.wordJSON.type !== "godan",
    // Returns true if the verb is not a ru-verb.
    verbichidan: (word: Word) => word.wordJSON.type !== "ichidan",
    // Returns true if the verb is not an irregular verb.
    verbirregular: (word: Word) => word.wordJSON.type !== "irv",
  },
  // Returns true if the word is not an adjective.
  adjective: (word: Word) => wordPartOfSpeech(word) !== "a",
  adjectives: {
    // Returns true if the adjective is not in the present tense.
    adjectivepresent: (word: Word) => isNotTense(word, "Present"),
    // Returns true if the adjective is not in the past tense.
    adjectivepast: (word: Word) => isNotTense(word, "Past"),
    // Returns true if the adjective is not in the adverbial form.
    adjectiveadverb: (word: Word) => isNotTense(word, "Adverb"),
    // Returns true if the adjective is not affirmative.
    adjectiveaffirmative: (word: Word) => word.conjugation.affirmative !== true,
    // Returns true if the adjective is not negative.
    adjectivenegative: (word: Word) => word.conjugation.affirmative !== false,
    // Returns true if the adjective is not in plain form.
    adjectiveplain: (word: Word) => word.conjugation.polite !== false,
    // Returns true if the adjective is not in polite form.
    adjectivepolite: (word: Word) => word.conjugation.polite !== true,
    // Returns true if the adjective is not an i-adjective.
    adjectivei: (word: Word) => word.wordJSON.type !== "i",
    // Returns true if the adjective is not a na-adjective.
    adjectivena: (word: Word) => word.wordJSON.type !== "na",
    // Returns true if the adjective is not an irregular adjective.
    adjectiveirregular: (word: Word) => word.wordJSON.type !== "ira",
  },

  /* Example usage:
  // Filter out all words that are not verbs
  const verbsOnly = words.filter(word => !questionRemoveFilters.verb(word));
  console.log('Verbs Only:', verbsOnly);

  // Filter out all verbs that are not in the present tense
  const presentVerbs = verbsOnly.filter(word => !questionRemoveFilters.verbs.verbpresent(word));
  console.log('Present Verbs:', presentVerbs);

  // Filter out all adjectives that are not in the past tense
  const pastAdjectives = words.filter(word => !questionRemoveFilters.adjective(word))
                              .filter(word => !questionRemoveFilters.adjectives.adjectivepast(word));
  console.log('Past Adjectives:', pastAdjectives);
  */
}
