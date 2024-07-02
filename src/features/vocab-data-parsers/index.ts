import type { Card, Entry } from "@/types"
import type { VocabEntry } from "@/types/vocab"

type ExtractedTextArray = string[][]

export function extractHiragana(rawData: VocabEntry[]): ExtractedTextArray {
  const result: ExtractedTextArray = []

  for (const entry of rawData) {
    if (!entry.furigana) continue

    const furiganaArr = entry.furigana
    const parsedFuriganaArr: string[] = []

    for (const furiganaStr of furiganaArr) {
      const hiragana = extractHiraganaFromFurigana(furiganaStr)
      parsedFuriganaArr.push(hiragana)
    }

    result.push(parsedFuriganaArr)
  }
  return result
}

function extractHiraganaFromFurigana(furigana: string): string {
  let hiragana = ""
  let skip = false

  for (let i = furigana.length - 1; i >= 0; i--) {
    const char = furigana[i]

    if (char === "[") {
      skip = true
    } else if (char === "]") {
      skip = false
    } else if (!skip && char !== " ") {
      hiragana = char + hiragana
    }
  }

  return hiragana
}

export function furiganaToRubyText(
  rawData: VocabEntry[],
  furiganaSize = "0.75rem",
): string[][] {
  const result: string[][] = []

  for (const entry of rawData) {
    if (!entry.furigana) continue

    const furiganaArr = entry.furigana
    const rubyTextArr: string[] = []

    const tempArr: string[] = []

    for (const furiganaStr of furiganaArr) {
      let rubyText = ""
      let foundFurigana = false

      for (let i = 0; i < furiganaStr.length; i++) {
        const char = furiganaStr[i]

        tempArr.push(char)

        if (char === "[") {
          foundFurigana = true
          rubyText =
            rubyText +
            "<ruby>" +
            tempArr.join("") +
            `<rp>(</rp><rt><span style="font-size: ${furiganaSize};">`
          tempArr.length = 0
        } else if (char === "]") {
          rubyText += tempArr.join("") + "</span></rt><rp>)</rp>"
          tempArr.length = 0
        } else if (char === " ") {
          rubyText += tempArr.join("")
          tempArr.length = 0
        }
        if (i === furiganaStr.length - 1) {
          if (foundFurigana) {
            rubyText += tempArr.join("") + "</ruby>"
            tempArr.length = 0
          } else {
            rubyText += tempArr.join("")
            tempArr.length = 0
          }
        }
      }
      rubyTextArr.push(rubyText)
    }
    result.push(rubyTextArr.map((text) => text.replace(/[\[\]]/g, "")))
  }
  return result
}

type TransformedVocabEntry = VocabEntry & {
  hiragana?: string[]
  rubyText?: string[]
}

export function transformVocabData(
  rawData: VocabEntry[],
  removeDuplicateKana?: boolean,
): TransformedVocabEntry[] {
  const parsedHiragana = extractHiragana(rawData)
  const parsedRubyText = furiganaToRubyText(rawData)
  const result: TransformedVocabEntry[] = []

  rawData.forEach((entry, index) => {
    const hiragana = parsedHiragana[index]
    const rubyText = parsedRubyText[index]

    // if the kana and word are the same, remove the kana
    if (removeDuplicateKana && hiragana && hiragana[0] === entry.word) {
      hiragana.shift()
    }

    result.push({
      ...entry,
      hiragana,
      rubyText,
    })
  })

  return result
}

export function vocabEntriesToCards(rawData: VocabEntry[]): Card[] {
  return rawData.map((entry, index) => {
    const hiraganaArr = (entry.furigana ?? [])
      .map((f) => extractHiraganaFromFurigana(f))
      .filter(Boolean)

    const answerCategories = []
    if (hiraganaArr.length > 0) {
      answerCategories.push({
        category: "Kana",
        answers: hiraganaArr,
      })
    }
    if (entry.english) {
      answerCategories.push({
        category: "English",
        answers: entry.english,
      })
    }

    return {
      key: entry.word,
      answerCategories: answerCategories,
      mnemonics: entry.mnemonics || [],
      order: index,
      cardStyle: "multiple-choice",
      wrongAnswerCount: 0,
    }
  })
}

export function VocabEntryKanjiToKana(entries: VocabEntry[]): VocabEntry[] {
  // For each entry, make word the hiragana (from the first furigana entry)
  return entries.map((entry) => {
    const hiragana =
      entry.furigana?.[0] && extractHiraganaFromFurigana(entry.furigana?.[0])
    return {
      ...entry,
      word: hiragana ?? entry.word,
      furigana: hiragana ? undefined : entry.furigana,
    }
  })
}

export function SwapWordAndEnglish(entries: VocabEntry[]): VocabEntry[] {
  return entries.map((entry) => {
    return {
      ...entry,
      word: entry.english?.[0] ?? entry.word,
      english: undefined,
      furigana: [entry.word],
    }
  })
}
