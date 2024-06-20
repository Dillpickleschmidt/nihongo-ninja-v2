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

export function furiganaToRubyText(rawData: VocabEntry[]): string[][] {
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
          rubyText = rubyText + "<ruby>" + tempArr.join("") + "<rp>(</rp><rt>"
          tempArr.length = 0
        } else if (char === "]") {
          rubyText += tempArr.join("") + "</rt><rp>)</rp>"
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
    result.push(rubyTextArr.map((text) => text.replace(/[\[\] ]/g, "")))
  }
  return result
}

type TransformedVocabEntry = VocabEntry & {
  hiragana?: string[]
  rubyText?: string[]
}

export function transformVocabData(
  rawData: VocabEntry[],
): TransformedVocabEntry[] {
  const parsedHiragana = extractHiragana(rawData)
  const parsedRubyText = furiganaToRubyText(rawData)
  const result: TransformedVocabEntry[] = []

  rawData.forEach((entry, index) => {
    const hiragana = parsedHiragana[index]
    const rubyText = parsedRubyText[index]

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
      .filter(Boolean) as string[]

    return {
      key: entry.word,
      answerCategories: [
        {
          category: "Kana",
          answers: hiraganaArr,
        },
        {
          category: "English",
          answers: entry.english || [],
        },
      ],
      mnemonics: entry.mnemonics || [],
      order: index,
      cardStyle: "multiple-choice",
      wrongAnswerCount: 0,
    }
  })
}
