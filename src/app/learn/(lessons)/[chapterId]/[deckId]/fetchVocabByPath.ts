import supabaseServer from "@/lib/supabase/server"
import { VocabEntry } from "@/types/vocab"

export async function fetchVocabularyByPath(
  path: string,
): Promise<(VocabEntry & { word: string })[]> {
  const supabase = supabaseServer()
  try {
    const { data, error } = await supabase
      .from("practice_modules")
      .select(
        `
        word,
        vocabulary (
          id,
          created_at,
          word,
          furigana,
          english,
          chapter,
          example_sentences,
          info,
          mnemonics
        )
      `,
      )
      .eq("path", path)

    if (error) {
      throw error
    }

    // Extract vocabulary data from the joined results
    const vocabularyData = data.map((entry: any) => ({
      ...entry.vocabulary,
      word: entry.word, // Add the word property to each VocabEntry
    }))
    return vocabularyData
  } catch (error) {
    console.error("Error fetching vocabulary data by paths:", error)
    throw error
  }
}

export function arrayToRecord(
  array: (VocabEntry & { word: string })[],
): Record<string, VocabEntry> {
  return array.reduce(
    (record, entry) => {
      record[entry.word] = entry
      return record
    },
    {} as Record<string, VocabEntry>,
  )
}
