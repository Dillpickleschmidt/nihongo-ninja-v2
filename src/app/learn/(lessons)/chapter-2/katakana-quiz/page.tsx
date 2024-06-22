import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-2/katakana")
  // transform data to kana: { hiragana: string; romaji: string[] }[]
  const katakana = data
    .filter((item) => item.english) // Filter out items with undefined english property
    .map((item) => ({
      hiragana: item.word,
      romaji: item.english!,
    }))

  return (
    <KanaQuiz
      kana={katakana}
      nextLesson="/learn/chapter-0/dakuten-handakuten"
      title="Hiragana Quiz 1"
    />
  )
}
