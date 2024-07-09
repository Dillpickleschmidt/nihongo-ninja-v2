import { WordJSON, Conjugation } from "@/features/conjugation-practice/types"
import { extractHiragana } from "@/features/vocab-data-parsers"

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

// Conjugates the verb する.
function conjugateSuru(prefix: string) {
  return {
    presentAffirmative: `${prefix}する`,
    presentNegative: `${prefix}しない`,
    pastAffirmative: `${prefix}した`,
    pastNegative: `${prefix}しなかった`,
    teForm: `${prefix}して`,
  }
}

/**
 * Conjugates an irregular verb.
 * @param {string} base - The dictionary form of the irregular verb.
 * @returns {Object | null} An object containing the conjugations, or null if not irregular.
 */
function conjugateIrregularVerb(base: string): {
  presentAffirmative: string
  presentNegative: string
  pastAffirmative: string
  pastNegative: string
  teForm: string
} | null {
  switch (base) {
    case "行く":
      return {
        presentAffirmative: "いく",
        presentNegative: "いかない",
        pastAffirmative: "いった",
        pastNegative: "いかなかった",
        teForm: "いって",
      }
    case "する":
      return conjugateSuru("")
    case "来る":
    case "くる":
      return {
        presentAffirmative: "くる",
        presentNegative: "こない",
        pastAffirmative: "きた",
        pastNegative: "こなかった",
        teForm: "きて",
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
        presentAffirmative: "とう",
        presentNegative: "とわない",
        pastAffirmative: "とうた",
        pastNegative: "とわなかった",
        teForm: "とうて",
      }
    case "勉強する":
      return conjugateSuru("べんきょう")
    case "運動する":
      return conjugateSuru("うんどう")
    case "持って行く":
      return {
        presentAffirmative: "もっていく",
        presentNegative: "もっていかない",
        pastAffirmative: "もっていった",
        pastNegative: "もっていかなかった",
        teForm: "もっていって",
      }
    default:
      return null
  }
}

/**
 * Conjugates a regular verb.
 * @param {string} base - The dictionary form of the verb in hiragana.
 * @param {string} type - The type of the verb ('godan' or 'ichidan').
 * @returns {Object} An object containing the conjugations.
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
  }

  throw new Error(`Unknown verb type: ${type}`)
}

/**
 * Conjugates an irregular adjective.
 * @param {string} base - The dictionary form of the irregular adjective.
 * @returns {Object | null} An object containing the conjugations, or null if not irregular.
 */
function conjugateIrregularAdjective(base: string): {
  presentAffirmative: string
  presentNegative: string
  pastAffirmative: string
  pastNegative: string
  adverbial: string
} | null {
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
      return null
  }
}

/**
 * Conjugates a regular adjective.
 * @param {string} base - The dictionary form of the adjective in hiragana.
 * @param {string} type - The type of the adjective ('i' or 'na').
 * @returns {Object} An object containing the conjugations.
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

  let base = word.kanji.replace(/\[.*?\]/g, "").replace(/\s+/g, "")
  let baseHiragana = extractHiragana(word.kanji)

  let conj

  if (isVerb) {
    if (word.type === "irv") {
      conj = conjugateIrregularVerb(base)
      if (!conj) {
        throw new Error(`Unknown irregular verb: ${base}`)
      }
    } else {
      conj = conjugateVerb(baseHiragana, word.type)
    }

    conjugations.push(
      {
        conjugations: [conj.presentAffirmative],
        tense: "Present",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [conj.presentAffirmative + "ます"],
        tense: "Present",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [conj.presentNegative],
        tense: "Present",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [conj.presentNegative.slice(0, -1) + "いません"],
        tense: "Present",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [conj.pastAffirmative],
        tense: "Past",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [conj.pastAffirmative.slice(0, -1) + "ました"],
        tense: "Past",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [conj.pastNegative],
        tense: "Past",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [conj.pastNegative.slice(0, -4) + "いませんでした"],
        tense: "Past",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [conj.teForm],
        tense: "て-form",
        affirmative: null,
        polite: null,
      },
    )
  } else if (isAdjective) {
    if (word.type === "ira") {
      conj = conjugateIrregularAdjective(base)
      if (!conj) {
        throw new Error(`Unknown irregular adjective: ${base}`)
      }
    } else {
      conj = conjugateAdjective(baseHiragana, word.type)
    }

    conjugations.push(
      {
        conjugations: [conj.presentAffirmative],
        tense: "Present",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [conj.presentAffirmative + "です"],
        tense: "Present",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [conj.presentNegative],
        tense: "Present",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [conj.presentNegative + "です"],
        tense: "Present",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [conj.pastAffirmative],
        tense: "Past",
        affirmative: true,
        polite: false,
      },
      {
        conjugations: [conj.pastAffirmative + "です"],
        tense: "Past",
        affirmative: true,
        polite: true,
      },
      {
        conjugations: [conj.pastNegative],
        tense: "Past",
        affirmative: false,
        polite: false,
      },
      {
        conjugations: [conj.pastNegative + "です"],
        tense: "Past",
        affirmative: false,
        polite: true,
      },
      {
        conjugations: [conj.adverbial],
        tense: "Adverb",
        affirmative: null,
        polite: null,
      },
    )
  }

  return conjugations
}
