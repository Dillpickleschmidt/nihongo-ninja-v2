import supabaseServer from "@/lib/supabase/server"
import type { VocabEntry } from "@/types/vocab"

export async function fetchVocabularyByPath(
  path: string,
): Promise<VocabEntry[]> {
  const supabase = supabaseServer()
  try {
    const { data, error } = await supabase
      .from("practice_modules")
      .select(
        `
        vocabulary (
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
    const vocabularyData = data.map((entry: any) => entry.vocabulary)

    return vocabularyData
  } catch (error) {
    console.error("Error fetching vocabulary data by path:", error)
    throw error
  }
}

export function arrayToRecord(array: VocabEntry[]): Record<string, VocabEntry> {
  return array.reduce(
    (record, entry) => {
      record[entry.word] = entry
      return record
    },
    {} as Record<string, VocabEntry>,
  )
}
