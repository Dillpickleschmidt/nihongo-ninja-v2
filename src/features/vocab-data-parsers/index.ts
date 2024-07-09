import type { Card } from "@/types"
import type { VocabEntry, EnhancedVocabEntry } from "@/types/vocab"

/**
 * Extracts hiragana from furigana string(s).
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @returns A hiragana string or array of hiragana strings, depending on the input type.
 */
export function extractHiragana<T extends string | string[]>(
  furigana: T,
): T extends string[] ? string[] : string {
  const extract = (text: string): string => {
    let hiragana = ""
    let skip = false

    for (let i = text.length - 1; i >= 0; i--) {
      const char = text[i]
      if (char === "[") skip = true
      else if (char === "]") skip = false
      else if (skip && char === " ") skip = false
      else if (!skip && char !== " ") hiragana = char + hiragana
    }

    return hiragana
  }

  if (Array.isArray(furigana)) {
    return furigana.map(extract) as T extends string[] ? string[] : string
  } else {
    return extract(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Converts furigana string(s) to HTML ruby text.
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @param furiganaSize - The font size for the furigana text (default: "0.75rem").
 * @returns An HTML string or array of HTML strings with ruby tags for furigana display,
 *          depending on the input type.
 */
export function convertFuriganaToRubyHtml<T extends string | string[]>(
  furigana: T,
  furiganaSize?: string,
): T extends string[] ? string[] : string {
  const convert = (text: string): string => {
    let rubyText = ""
    let tempArr: string[] = []
    let foundFurigana = false

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      tempArr.push(char)

      if (char === "[") {
        foundFurigana = true
        rubyText += `<ruby>${tempArr.join("")}<rp>(</rp><rt><span style="font-size: ${furiganaSize};">`
        tempArr = []
      } else if (char === "]") {
        rubyText += `${tempArr.join("")}</span></rt><rp>)</rp>`
        tempArr = []
      } else if (char === " " || i === text.length - 1) {
        if (foundFurigana) {
          rubyText += `${tempArr.join("")}</ruby>`
        } else {
          rubyText += tempArr.join("")
        }
        tempArr = []
      }
    }

    return rubyText.replace(/[\[\]]/g, "")
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Enhances VocabEntry objects by adding hiragana and ruby text.
 * @param entries - A single VocabEntry or an array of VocabEntry objects to enhance.
 * @param removeDuplicateKana - Whether to remove kana when it's identical to the word.
 * @returns An EnhancedVocabEntry or an array of EnhancedVocabEntry objects, depending on the input.
 */
export function enhanceVocabWithKanaAndRuby<
  T extends VocabEntry | VocabEntry[],
>(
  entries: T,
  removeDuplicateKana = false,
): T extends VocabEntry[] ? EnhancedVocabEntry[] : EnhancedVocabEntry {
  const enhance = (entry: VocabEntry): EnhancedVocabEntry => {
    const hiragana = entry.furigana
      ? extractHiragana(entry.furigana)
      : undefined
    const rubyText = entry.furigana
      ? convertFuriganaToRubyHtml(entry.furigana)
      : undefined

    if (removeDuplicateKana && hiragana && hiragana[0] === entry.word) {
      hiragana.shift()
    }

    return { ...entry, hiragana, rubyText }
  }

  return (
    Array.isArray(entries) ? entries.map(enhance) : enhance(entries)
  ) as any
}

/**
 * Sets the furigana property to an empty array in VocabEntry objects.
 * @param entries - A single VocabEntry or an array of VocabEntry objects.
 * @returns A VocabEntry or an array of VocabEntry objects with empty furigana arrays.
 */
export function stripFurigana<T extends VocabEntry | VocabEntry[]>(
  entries: T,
): T {
  const strip = (entry: VocabEntry): VocabEntry => ({
    ...entry,
    furigana: [],
  })

  return (Array.isArray(entries) ? entries.map(strip) : strip(entries)) as T
}

// /**
//  * Sets the english property to an empty array in VocabEntry objects.
//  * @param entries - A single VocabEntry or an array of VocabEntry objects.
//  * @returns The same type as the input (T), with empty english arrays.
//  */
// export function stripEnglish<T extends VocabEntry | VocabEntry[]>(
//   entries: T,
// ): T {
//   const strip = (entry: VocabEntry): VocabEntry => ({
//     ...entry,
//     english: [],
//   })

//   return (Array.isArray(entries) ? entries.map(strip) : strip(entries)) as T
// }

/**
 * Converts VocabEntry objects to Card objects for use in flashcards.
 * @param entries - A single VocabEntry or an array of VocabEntry objects to convert.
 * @returns A Card object or an array of Card objects.
 */
export function convertToFlashcards(
  entries: VocabEntry | VocabEntry[],
): Card | Card[] {
  const convert = (entry: VocabEntry, index: number): Card => {
    const hiraganaArr = entry.furigana ? extractHiragana(entry.furigana) : []

    const answerCategories = [
      ...(hiraganaArr.length > 0
        ? [{ category: "Kana", answers: hiraganaArr }]
        : []),
      ...(entry.english
        ? [{ category: "English", answers: entry.english }]
        : []),
    ]

    return {
      key: entry.word,
      answerCategories,
      mnemonics: entry.mnemonics || [],
      order: index,
      cardStyle: "multiple-choice",
      wrongAnswerCount: 0,
    }
  }

  return Array.isArray(entries) ? entries.map(convert) : convert(entries, 0)
}

/**
 * Converts VocabEntry objects from kanji to kana representation.
 * @param entries - A single VocabEntry or an array of VocabEntry objects to convert.
 * @returns The same type as the input (T), with words converted to kana.
 */
export function convertKanjiToKana<T extends VocabEntry | VocabEntry[]>(
  entries: T,
): T {
  const convert = (entry: VocabEntry): VocabEntry => {
    const hiragana = entry.furigana?.[0] && extractHiragana(entry.furigana[0])
    return {
      ...entry,
      word: hiragana ?? entry.word,
      furigana: hiragana ? [] : entry.furigana,
    }
  }

  return (Array.isArray(entries) ? entries.map(convert) : convert(entries)) as T
}

/**
 * Swaps the word and English properties of VocabEntry objects.
 * @param entries - A single VocabEntry or an array of VocabEntry objects to modify.
 * @returns The same type as the input (T), with word and English properties swapped.
 */
export function swapWordAndEnglish<T extends VocabEntry | VocabEntry[]>(
  entries: T,
): T {
  const swap = (entry: VocabEntry): VocabEntry => ({
    ...entry,
    word: entry.english?.join(", ") ?? entry.word,
    english: [],
    furigana: [entry.word],
  })

  return (Array.isArray(entries) ? entries.map(swap) : swap(entries)) as T
}
