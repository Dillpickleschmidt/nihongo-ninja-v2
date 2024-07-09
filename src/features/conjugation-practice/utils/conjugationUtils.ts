// conjugationUtils.ts

import { changeHiraganaVowel } from "./hiraganaColumnHelper"

type ConjugationOptions = {
  neutral?: boolean
  negative?: boolean
  past?: boolean
}

/**
 * Determines the type of word (verb, i-adjective, or na-adjective).
 * @param partOfSpeech - The part of speech of the word.
 * @returns The type of the word as a string.
 */
export function getType(partOfSpeech: string): string {
  if (partOfSpeech === "I-adjective") return "i-adjective"
  if (partOfSpeech === "Na-adjective") return "na-adjective"
  return "verb"
}

/**
 * Determines the group of a verb or adjective.
 * @param partOfSpeech - The part of speech of the word.
 * @returns The group of the word as a string ('1', '2', '3', 'i-adjective', 'na-adjective', or 'unknown').
 */
export function getGroup(partOfSpeech: string): string {
  if (partOfSpeech.startsWith("Godan verb")) return "1"
  if (partOfSpeech === "Ichidan verb") return "2"
  if (
    partOfSpeech.startsWith("Suru verb") ||
    partOfSpeech === "Kuru verb - special class"
  )
    return "3"
  if (partOfSpeech === "I-adjective") return "i-adjective"
  if (partOfSpeech === "Na-adjective") return "na-adjective"
  return "unknown"
}

/**
 * Gets the masu stem of a verb.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @returns The masu stem of the verb.
 */
export function getMasuStem(reading: string, partOfSpeech: string): string {
  const group = getGroup(partOfSpeech)
  if (group === "1") {
    const preMasu =
      partOfSpeech === "Godan verb - aru special class"
        ? "い"
        : changeHiraganaVowel(reading.slice(-1), "i")
    return reading.slice(0, -1) + preMasu
  }
  if (group === "2") return reading.slice(0, -1)
  if (group === "3") {
    if (partOfSpeech.startsWith("Suru verb")) {
      return (
        reading.slice(0, -2) + changeHiraganaVowel(reading.slice(-2, -1), "i")
      )
    }
    return changeHiraganaVowel(reading.slice(0, -1), "i")
  }
  return ""
}

/**
 * Gets the nai stem of a verb.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @returns The nai stem of the verb.
 */
export function getNaiStem(reading: string, partOfSpeech: string): string {
  const group = getGroup(partOfSpeech)
  switch (group) {
    case "1":
      if (partOfSpeech === "Godan verb with ru ending (irregular verb)") {
        return ""
      } else if (reading.slice(-1) === "う") {
        return reading.slice(0, -1) + "わ"
      } else {
        return (
          reading.slice(0, -1) + changeHiraganaVowel(reading.slice(-1), "a")
        )
      }
    case "2":
      return getMasuStem(reading, partOfSpeech)
    case "3":
      if (partOfSpeech.startsWith("Suru verb")) {
        return reading.slice(0, -2) + "し"
      } else if (partOfSpeech === "Kuru verb - special class") {
        return "こ"
      }
      break
  }
  return ""
}

/**
 * Conjugates a verb or adjective to its te-form.
 * @param reading - The reading of the word in hiragana.
 * @param partOfSpeech - The part of speech of the word.
 * @returns The te-form of the word.
 */
export function teForm(reading: string, partOfSpeech: string): string {
  const stem = reading.slice(0, -1)
  let ending
  switch (partOfSpeech) {
    case "Ichidan verb":
    case "Kuru verb - special class":
    case "Suru verb":
    case "Suru verb - irregular":
    case "Suru verb - special class":
      ending = "て"
      break
    case "Godan verb with u ending":
    case "Godan verb with tsu ending":
    case "Godan verb with ru ending":
    case "Godan verb - aru special class":
    case "Godan verb - Iku/Yuku special class":
      ending = "って"
      break
    case "Godan verb with ku ending":
      ending = "いて"
      break
    case "Godan verb with gu ending":
      ending = "いで"
      break
    case "Godan verb with bu ending":
    case "Godan verb with mu ending":
    case "Godan verb with nu ending":
      ending = "んで"
      break
    case "Godan verb with su ending":
      ending = "して"
      break
    case "I-adjective":
      return stem + "くて"
    case "Na-adjective":
      return reading + "で"
    default:
      ending = "て"
  }
  return stem + ending
}

/**
 * Conjugates a verb to its volitional form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param neutral - Whether to use the neutral (polite) form.
 * @returns An array of possible volitional forms.
 */
export function volitional(
  reading: string,
  partOfSpeech: string,
  neutral: boolean = false,
): string[] {
  if (neutral) {
    return [getMasuStem(reading, partOfSpeech) + "ましょう"]
  }

  const group = getGroup(partOfSpeech)
  let conjugation = ""

  switch (group) {
    case "1":
      conjugation =
        reading.slice(0, -1) +
        changeHiraganaVowel(reading.slice(-1), "o") +
        "う"
      break
    case "2":
      conjugation = reading.slice(0, -1) + "よう"
      break
    case "3":
      if (partOfSpeech.startsWith("Suru verb")) {
        conjugation = getMasuStem(reading, partOfSpeech) + "よう"
      } else if (partOfSpeech === "Kuru verb - special class") {
        conjugation = "こよう"
      }
      break
  }

  return conjugation ? [conjugation] : []
}

/**
 * Conjugates a verb to its tai-form (desire form).
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible tai-forms.
 */
export function taiForm(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { negative = false, past = false, neutral = false } = options
  const type = getType(partOfSpeech)

  if (type !== "verb") return []

  let conjugation = getMasuStem(reading, partOfSpeech) + "たい"

  if (negative) {
    conjugation = conjugation.slice(0, -1) + "くない"
  }

  if (past) {
    conjugation = conjugation.slice(0, -1) + "かった"
  }

  if (neutral) {
    conjugation += "です"
  }

  return [conjugation]
}

/**
 * Conjugates a verb or adjective to its tari-form.
 * @param reading - The reading of the word in hiragana.
 * @param partOfSpeech - The part of speech of the word.
 * @param negative - Whether to use the negative form.
 * @returns An array of possible tari-forms.
 */
export function tariForm(
  reading: string,
  partOfSpeech: string,
  negative: boolean = false,
): string[] {
  return normalForm(reading, partOfSpeech, { negative, past: true }).map(
    (form) => form + "り",
  )
}

/**
 * Conjugates a verb to its potential form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible potential forms.
 */
export function potential(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  const group = getGroup(partOfSpeech)
  let stem = ""

  if (reading === "分かる") return []

  switch (group) {
    case "1":
      stem = reading.slice(0, -1) + changeHiraganaVowel(reading.slice(-1), "e")
      break
    case "2":
      stem = reading.slice(0, -1) + "られ"
      break
    case "3":
      if (partOfSpeech === "Kuru verb - special class") {
        stem = "こられ"
      } else if (partOfSpeech.startsWith("Suru verb")) {
        const baseStem = reading.slice(0, -2)
        return [baseStem + "でき", baseStem + "出来", baseStem + "出き"].map(
          (s) =>
            normalForm(s + "る", "Ichidan verb", {
              neutral,
              negative,
              past,
            })[0],
        )
      }
      break
  }

  return stem
    ? normalForm(stem + "る", "Ichidan verb", { neutral, negative, past })
    : []
}

/**
 * Conjugates a verb to its imperative form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param negative - Whether to use the negative form.
 * @returns An array of possible imperative forms.
 */
export function imperative(
  reading: string,
  partOfSpeech: string,
  negative: boolean = false,
): string[] {
  if (negative) {
    return [reading + "な"]
  }

  const group = getGroup(partOfSpeech)
  let conjugation = ""

  switch (group) {
    case "1":
      conjugation =
        reading.slice(0, -1) + changeHiraganaVowel(reading.slice(-1), "e")
      break
    case "2":
      conjugation =
        reading !== "呉れる"
          ? getMasuStem(reading, partOfSpeech) + "ろ"
          : "くれ"
      break
    case "3":
      if (partOfSpeech.startsWith("Suru verb")) {
        conjugation = getMasuStem(reading, partOfSpeech) + "ろ"
      } else if (partOfSpeech === "Kuru verb - special class") {
        conjugation = "こい"
      }
      break
  }

  return conjugation ? [conjugation] : []
}

/**
 * Conjugates a verb or adjective to its conditional form.
 * @param reading - The reading of the word in hiragana.
 * @param partOfSpeech - The part of speech of the word.
 * @param negative - Whether to use the negative form.
 * @returns An array of possible conditional forms.
 */
export function conditional(
  reading: string,
  partOfSpeech: string,
  negative: boolean = false,
): string[] {
  const type = getType(partOfSpeech)

  if (!negative) {
    switch (type) {
      case "verb":
        return [
          reading.slice(0, -1) +
            changeHiraganaVowel(reading.slice(-1), "e") +
            "ば",
        ]
      case "i-adjective":
        return [reading.slice(0, -1) + "ければ"]
      case "na-adjective":
        return [reading + "なら"]
    }
  } else {
    switch (type) {
      case "verb":
        return [getNaiStem(reading, partOfSpeech) + "なければ"]
      case "i-adjective":
        return [reading.slice(0, -1) + "くなければ"]
      case "na-adjective":
        return [reading + "ではなければ", reading + "じゃなければ"]
    }
  }

  return []
}

/**
 * Conjugates a verb to its passive form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible passive forms.
 */
export function passive(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  let stem = ""
  switch (getGroup(partOfSpeech)) {
    case "1":
      stem = getNaiStem(reading, partOfSpeech)
      break
    case "2":
      stem = getNaiStem(reading, partOfSpeech) + "ら"
      break
    case "3":
      if (partOfSpeech.startsWith("Suru verb")) {
        stem = reading.slice(0, -2) + "さ"
      } else if (partOfSpeech === "Kuru verb - special class") {
        stem = "こら"
      }
      break
  }
  if (partOfSpeech === "Godan verb with ru ending (irregular verb)") {
    stem = "あら"
  }
  return stem
    ? normalForm(stem + "れる", "Ichidan verb", { neutral, negative, past })
    : []
}

/**
 * Conjugates a verb to its causative form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible causative forms.
 */
export function causative(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  let stem = ""
  switch (getGroup(partOfSpeech)) {
    case "1":
      stem = getNaiStem(reading, partOfSpeech)
      break
    case "2":
      stem = getNaiStem(reading, partOfSpeech) + "さ"
      break
    case "3":
      if (partOfSpeech.startsWith("Suru verb")) {
        stem = reading.slice(0, -2) + "さ"
      } else if (partOfSpeech === "Kuru verb - special class") {
        stem = "こさ"
      }
      break
  }
  if (partOfSpeech === "Godan verb with ru ending (irregular verb)") {
    stem = "あら"
  }
  return stem
    ? normalForm(stem + "せる", "Ichidan verb", { neutral, negative, past })
    : []
}

/**
 * Conjugates a verb to its causative-passive form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible causative-passive forms.
 */
export function causativePassive(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  const causativeForm = causative(reading, partOfSpeech)[0]
  const passiveForm = passive(causativeForm, "Ichidan verb")[0]

  if (getGroup(partOfSpeech) === "1" && !reading.endsWith("す")) {
    return [
      normalForm(passiveForm, "Ichidan verb", { neutral, negative, past })[0],
      normalForm(passiveForm.slice(0, -4) + "される", "Ichidan verb", {
        neutral,
        negative,
        past,
      })[0],
    ]
  }

  return normalForm(passiveForm, "Ichidan verb", { neutral, negative, past })
}

/**
 * Conjugates a verb or adjective to its normal form based on the given options.
 * @param reading - The reading of the word in hiragana.
 * @param partOfSpeech - The part of speech of the word.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible normal forms.
 */
export function normalForm(
  reading: string,
  partOfSpeech: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  const type = getType(partOfSpeech)

  if (type === "i-adjective") {
    return iAdjectiveNormalForm(reading, { neutral, negative, past })
  }

  if (type === "na-adjective") {
    return naAdjectiveNormalForm(reading, { neutral, negative, past })
  }

  // Verbs
  if (neutral) {
    const stem = getMasuStem(reading, partOfSpeech)
    const ending = past
      ? negative
        ? "ませんでした"
        : "ました"
      : negative
        ? "ません"
        : "ます"
    return [stem + ending]
  } else {
    if (!past) {
      return negative ? [plainNegative(reading, partOfSpeech)] : [reading]
    } else {
      return negative
        ? [plainNegativePast(reading, partOfSpeech)]
        : [plainPast(reading, partOfSpeech)]
    }
  }
}

/**
 * Conjugates an i-adjective to its normal form.
 * @param reading - The reading of the adjective in hiragana.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible normal forms for the i-adjective.
 */
function iAdjectiveNormalForm(
  reading: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  let ending: string
  if (!past) {
    ending = !negative ? "い" : "くない"
  } else {
    ending = !negative ? "かった" : "くなかった"
  }
  return [reading.slice(0, -1) + ending + (neutral ? "です" : "")]
}

/**
 * Conjugates a na-adjective to its normal form.
 * @param reading - The reading of the adjective in hiragana.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible normal forms for the na-adjective.
 */
function naAdjectiveNormalForm(
  reading: string,
  options: ConjugationOptions = {},
): string[] {
  const { neutral = false, negative = false, past = false } = options
  const endings = deAruNormalForm({ neutral, negative, past })

  return endings.map((ending) => reading + ending)
}

/**
 * Conjugates the copula 'dearu' to its various forms.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible forms for 'dearu'.
 */
function deAruNormalForm(options: ConjugationOptions = {}): string[] {
  const { neutral = false, negative = false, past = false } = options
  const dewa = "では"
  const ja = "じゃ"
  const nai = "ない"
  const desu = "です"
  const katta = "かった"

  if (neutral) {
    if (!past) {
      return !negative
        ? [desu]
        : [
            dewa + "ありません",
            dewa + nai + desu,
            ja + "ありません",
            ja + nai + desu,
          ]
    } else {
      return !negative
        ? ["でした"]
        : [
            dewa + "ありませんでした",
            dewa + "な" + katta + desu,
            ja + "ありませんでした",
            ja + "な" + katta + desu,
          ]
    }
  } else {
    if (!past) {
      return !negative ? ["だ"] : [dewa + nai, ja + nai]
    } else {
      return !negative ? ["だった"] : [dewa + "な" + katta, ja + "な" + katta]
    }
  }
}

/**
 * Conjugates a verb to its plain negative form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @returns The plain negative form of the verb.
 */
function plainNegative(reading: string, partOfSpeech: string): string {
  return getNaiStem(reading, partOfSpeech) + "ない"
}

/**
 * Conjugates a verb to its plain negative past form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @returns The plain negative past form of the verb.
 */
function plainNegativePast(reading: string, partOfSpeech: string): string {
  return plainNegative(reading, partOfSpeech).slice(0, -1) + "かった"
}

/**
 * Conjugates a verb to its plain past form.
 * @param reading - The reading of the verb in hiragana.
 * @param partOfSpeech - The part of speech of the verb.
 * @returns The plain past form of the verb.
 */
function plainPast(reading: string, partOfSpeech: string): string {
  const teFormEnding = teForm(reading, partOfSpeech).slice(-1)
  return reading.slice(0, -1) + changeHiraganaVowel(teFormEnding, "a")
}

/**
 * Main conjugation function that delegates to specific conjugation functions based on the type.
 * @param reading - The reading of the word in hiragana.
 * @param partOfSpeech - The part of speech of the word.
 * @param type - The type of conjugation to perform.
 * @param options - Conjugation options (neutral, negative, past).
 * @returns An array of possible conjugated forms.
 *
 * @example
 * conjugate('食べる', 'Ichidan verb', 'te-form') // returns ['食べて']
 * conjugate('行く', 'Godan verb - Iku/Yuku special class', 'potential', { neutral: true, negative: true, past: true }) // Returns: ['行けませんでした']'
 */
export function conjugate(
  reading: string,
  partOfSpeech: string,
  type: string,
  options: ConjugationOptions = {},
): string[] {
  switch (type) {
    case "te-form":
      return [teForm(reading, partOfSpeech)]
    case "volitional":
      return volitional(reading, partOfSpeech, options.neutral)
    case "tai-form":
      return taiForm(reading, partOfSpeech, options)
    case "tari-form":
      return tariForm(reading, partOfSpeech, options.negative)
    case "potential":
      return potential(reading, partOfSpeech, options)
    case "imperative":
      return imperative(reading, partOfSpeech, options.negative)
    case "conditional":
      return conditional(reading, partOfSpeech, options.negative)
    case "passive":
      return passive(reading, partOfSpeech, options)
    case "causative":
      return causative(reading, partOfSpeech, options)
    case "causative-passive":
      return causativePassive(reading, partOfSpeech, options)
    default:
      return normalForm(reading, partOfSpeech, options)
  }
}
