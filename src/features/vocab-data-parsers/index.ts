import { JSONWithAnswerCategories } from "@/types"
import { VocabData, VocabEntry } from "@/types/vocab"

type ExtractedTextArray = string[][]

type VocabDataRaw = VocabData["data"]

export function extractHiragana(rawData: VocabDataRaw): ExtractedTextArray {
  const result: ExtractedTextArray = []

  for (const key in rawData) {
    const entry = rawData[key]
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

export function furiganaToRubyText(rawData: VocabDataRaw): ExtractedTextArray {
  const result: ExtractedTextArray = []

  for (const key in rawData) {
    const entry = rawData[key]
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

type TransformedVocabData = {
  [key: string]: TransformedVocabEntry
}

export function transformVocabData(
  rawData: VocabDataRaw
): TransformedVocabData {
  const parsedHiragana = extractHiragana(rawData)
  const parsedRubyText = furiganaToRubyText(rawData)
  const result: TransformedVocabData = {}

  let index = 0
  for (const key in rawData) {
    const {
      furigana = [],
      english = [],
      info = [],
      mnemonics = [],
      videos = [],
    } = rawData[key] // Assign an empty array as default value

    const hiragana = parsedHiragana[index]
    const rubyText = parsedRubyText[index]

    result[key] = {
      furigana,
      hiragana,
      english,
      info,
      mnemonics,
      videos,
      rubyText,
    }
    index++
  }

  return result
}

export function vocabDataToJSONWithAnswerCategories(
  rawData: VocabDataRaw
): JSONWithAnswerCategories {
  const newJson: JSONWithAnswerCategories = {}

  Object.keys(rawData).forEach((key) => {
    for (const key in rawData) {
      const entry = rawData[key]
      const hiraganaArr: string[] = []
      for (let i = 0; i < (entry.furigana ?? []).length; i++) {
        const hiragana =
          entry.furigana && extractHiraganaFromFurigana(entry.furigana[i])
        hiragana && hiraganaArr.push(hiragana)
      }

      newJson[key] = {
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
      }
    }
  })

  return newJson
}
