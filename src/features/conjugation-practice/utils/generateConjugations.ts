/*
generateConjugations does the following:

It separates the conjugation logic for verbs and adjectives into separate functions (conjugateVerb and conjugateAdjective).
For verbs, it handles godan (う-verbs), ichidan (る-verbs), and irregular verbs (する and 来る).
For adjectives, it handles i-adjectives, na-adjectives, and the irregular adjective いい.
It generates all the necessary conjugations: present/past, affirmative/negative, and plain/polite forms for both verbs and adjectives, as well as the て-form for verbs and the adverbial form for adjectives.
It removes furigana from the kanji before conjugating.
*/

import { WordJSON, Conjugation } from "@/features/conjugation-practice/types"

/**
 * Changes the last character of a う-verb to its い sound equivalent.
 * @param {string} char - The last character of a う-verb.
 * @returns {string} The character changed to its い sound equivalent.
 */
function changeUtoI(char: string): string {
  const uToI: { [key: string]: string } = {
    う: "い",
    く: "き",
    ぐ: "ぎ",
    す: "し",
    つ: "ち",
    ぬ: "に",
    ぶ: "び",
    む: "み",
    る: "り",
  }
  return uToI[char] || char
}

/**
 * Changes the last character of a う-verb to its あ sound equivalent.
 * @param {string} char - The last character of a う-verb.
 * @returns {string} The character changed to its あ sound equivalent.
 */
function changeUtoA(char: string): string {
  const uToA: { [key: string]: string } = {
    う: "わ",
    く: "か",
    ぐ: "が",
    す: "さ",
    つ: "た",
    ぬ: "な",
    ぶ: "ば",
    む: "ま",
    る: "ら",
  }
  return uToA[char] || char
}

/**
 * Conjugates a verb in its different forms.
 * @param {string} base - The dictionary form of the verb.
 * @param {string} type - The type of the verb ('godan', 'ichidan', or 'irv').
 * @returns {Object} An object containing the different conjugations of the verb.
 * @throws {Error} If the verb type is unknown.
 */
function conjugateVerb(
  base: string,
  type: string,
): {
  presentAffirmative: string
  presentNegative: string
  pastAffirmative: string
  pastNegative: string
  teForm: string
} {
  let stem = base.slice(0, -1)
  let lastChar = base.slice(-1)

  // Helper function to conjugate する verbs
  function conjugateSuru(prefix: string) {
    return {
      presentAffirmative: `${prefix}する`,
      presentNegative: `${prefix}しない`,
      pastAffirmative: `${prefix}した`,
      pastNegative: `${prefix}しなかった`,
      teForm: `${prefix}して`,
    }
  }

  // Helper function to remove all furigana tags
  function removeFurigana(text: string): string {
    return text.replace(/<rt>.*?<\/rt>/g, "").replace(/<ruby>|<\/ruby>/g, "")
  }

  if (type === "godan") {
    return {
      presentAffirmative: base,
      presentNegative: stem + changeUtoA(lastChar) + "ない",
      pastAffirmative: stem + changeUtoI(lastChar) + "た",
      pastNegative: stem + changeUtoA(lastChar) + "なかった",
      teForm: stem + changeUtoI(lastChar) + "て",
    }
  } else if (type === "ichidan") {
    return {
      presentAffirmative: base,
      presentNegative: stem + "ない",
      pastAffirmative: stem + "た",
      pastNegative: stem + "なかった",
      teForm: stem + "て",
    }
  } else if (type === "irv") {
    // Irregular verbs
    const cleanBase = removeFurigana(base)
    switch (cleanBase) {
      case "行く":
        return {
          presentAffirmative: "行く",
          presentNegative: "行かない",
          pastAffirmative: "行った",
          pastNegative: "行かなかった",
          teForm: "行って",
        }
      case "する":
        return conjugateSuru("")
      case "来る":
      case "くる":
        return {
          presentAffirmative: "来る",
          presentNegative: "来ない",
          pastAffirmative: "来た",
          pastNegative: "来なかった",
          teForm: "来て",
        }
      case "ある":
        return {
          presentAffirmative: "ある",
          presentNegative: "ない",
          pastAffirmative: "あった",
          pastNegative: "なかった",
          teForm: "あって",
        }
      case "問う":
        return {
          presentAffirmative: "問う",
          presentNegative: "問わない",
          pastAffirmative: "問うた",
          pastNegative: "問わなかった",
          teForm: "問うて",
        }
      case "勉強する":
        return conjugateSuru("勉強")
      case "運動する":
        return conjugateSuru("運動")
      case "持って行く":
        return {
          presentAffirmative: "持って行く",
          presentNegative: "持って行かない",
          pastAffirmative: "持って行った",
          pastNegative: "持って行かなかった",
          teForm: "持って行って",
        }
      default:
        throw new Error(`Unknown irregular verb: ${cleanBase}`)
    }
  }

  throw new Error(`Unknown verb type: ${type}`)
}

/**
 * Conjugates an adjective in its different forms.
 * @param {string} base - The dictionary form of the adjective.
 * @param {string} type - The type of the adjective ('i', 'na', or 'ira').
 * @returns {Object} An object containing the different conjugations of the adjective.
 * @throws {Error} If the adjective type is unknown.
 */
function conjugateAdjective(
  base: string,
  type: string,
): {
  presentAffirmative: string
  presentNegative: string
  pastAffirmative: string
  pastNegative: string
  adverbial: string
} {
  if (type === "i") {
    let stem = base.slice(0, -1)
    return {
      presentAffirmative: base,
      presentNegative: stem + "くない",
      pastAffirmative: stem + "かった",
      pastNegative: stem + "くなかった",
      adverbial: stem + "く",
    }
  } else if (type === "na") {
    return {
      presentAffirmative: base + "だ",
      presentNegative: base + "じゃない",
      pastAffirmative: base + "だった",
      pastNegative: base + "じゃなかった",
      adverbial: base + "に",
    }
  } else if (type === "ira") {
    // irregular adjectives
    switch (base) {
      case "いい":
        return {
          presentAffirmative: "いい",
          presentNegative: "よくない",
          pastAffirmative: "よかった",
          pastNegative: "よくなかった",
          adverbial: "よく",
        }
      case "かっこいい":
        return {
          presentAffirmative: "かっこいい",
          presentNegative: "かっこよくない",
          pastAffirmative: "かっこよかった",
          pastNegative: "かっこよくなかった",
          adverbial: "かっこよく",
        }
      default:
        throw new Error(`Unknown irregular adjective: ${base}`)
    }
  }

  throw new Error(`Unknown adjective type: ${type}`)
}

/**
 * Generates all possible conjugations for a given word.
 * @param {WordJSON} word - The word object containing the base form and type of the word.
 * @returns {Conjugation[]} An array of Conjugation objects for the word.
 */
export function generateConjugations(word: WordJSON): Conjugation[] {
  const conjugations: Conjugation[] = []
  const isVerb = ["godan", "ichidan", "irv"].includes(word.type)
  const isAdjective = ["i", "na", "ira"].includes(word.type)

  let base = word.kanji.replace(/<rt>.*?<\/rt>/g, "") // Remove furigana

  if (isVerb) {
    const verbConj = conjugateVerb(base, word.type)
    conjugations.push(
      {
        conjugations: [verbConj.presentAffirmative],
        tense: "Present",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [verbConj.presentAffirmative + "ます"],
        tense: "Present",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [verbConj.presentNegative],
        tense: "Present",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [verbConj.presentNegative.slice(0, -1) + "いません"],
        tense: "Present",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [verbConj.pastAffirmative],
        tense: "Past",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [verbConj.pastAffirmative.slice(0, -1) + "ました"],
        tense: "Past",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [verbConj.pastNegative],
        tense: "Past",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [verbConj.pastNegative.slice(0, -4) + "いませんでした"],
        tense: "Past",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [verbConj.teForm],
        tense: "て-form",
        affirmative: null,
        polite: null,
      },
    )
  } else if (isAdjective) {
    const adjConj = conjugateAdjective(base, word.type)
    conjugations.push(
      {
        conjugations: [adjConj.presentAffirmative],
        tense: "Present",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [adjConj.presentAffirmative + "です"],
        tense: "Present",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [adjConj.presentNegative],
        tense: "Present",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [adjConj.presentNegative + "です"],
        tense: "Present",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [adjConj.pastAffirmative],
        tense: "Past",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [adjConj.pastAffirmative + "です"],
        tense: "Past",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [adjConj.pastNegative],
        tense: "Past",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [adjConj.pastNegative + "です"],
        tense: "Past",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [adjConj.adverbial],
        tense: "Adverb",
        affirmative: null,
        polite: null,
      },
    )
  }

  return conjugations
}
