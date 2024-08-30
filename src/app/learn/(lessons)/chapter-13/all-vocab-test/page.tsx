import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabTest from "@/features/vocab-test/VocabTest"

export default async function page() {
  const nouns = await fetchVocabularyByPath("chapter-13/nouns")
  const adj_and_verbs = await fetchVocabularyByPath("chapter-13/adj-and-verbs")
  const day_count_and_misc = await fetchVocabularyByPath(
    "chapter-13/day-count-and-misc",
  )
  const data = [...nouns, ...adj_and_verbs, ...day_count_and_misc]

  return <VocabTest data={data} chapter={13} />
}
