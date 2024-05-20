type VocabData = {
  [key: string]: {
    furigana: string[]
    english: string[]
    mnemonics: string[]
  }
}

type ExtractedHiragana = {
  [key: string]: string[]
}

export function extractHiragana(data: VocabData): ExtractedHiragana {
  const result: ExtractedHiragana = {}

  for (const key in data) {
    const furiganaArr = data[key].furigana
    const parsedFuriganaArr: string[] = []

    for (const furiganaStr of furiganaArr) {
      let hiragana = ""
      let skip = false

      for (let i = furiganaStr.length - 1; i >= 0; i--) {
        const char = furiganaStr[i]

        if (char === "[") {
          skip = true
        } else if (char === "]" || char === " ") {
          skip = false
        } else if (!skip) {
          hiragana = char + hiragana
        }
      }

      parsedFuriganaArr.push(hiragana)
    }

    result[key] = parsedFuriganaArr
  }

  return result
}

type TransformedVocabData = {
  [key: string]: {
    hiragana: string[]
    english: string[]
    mnemonics: string[]
  }
}

export function transformVocabData(data: VocabData): TransformedVocabData {
  const parsedHiragana = extractHiragana(data)
  const result: TransformedVocabData = {}

  for (const key in data) {
    const { english, mnemonics } = data[key]
    const hiragana = parsedHiragana[key]

    result[key] = {
      hiragana,
      english,
      mnemonics,
    }
  }

  return result
}
