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
          id,
          created_at,
          word,
          furigana,
          english,
          chapter,
          example_sentences,
          info,
          mnemonics,
          videos (
            src,
            title,
            origin
          )
        )
      `,
      )
      .eq("path", path)

    if (error) {
      throw error
    }

    // Extract vocabulary data from the joined results and format it
    const vocabularyData = data.map((entry: any) => {
      const vocab = entry.vocabulary
      return {
        ...vocab,
        videos: Array.isArray(vocab.videos)
          ? vocab.videos
          : vocab.videos
            ? [vocab.videos]
            : [],
      }
    })

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
