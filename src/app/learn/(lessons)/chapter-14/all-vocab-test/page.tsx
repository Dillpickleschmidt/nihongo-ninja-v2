import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabTest from "@/features/vocab-test/VocabTest"

export default async function page() {
  const nouns_1 = await fetchVocabularyByPath("chapter-14/nouns-1")
  const nouns_2 = await fetchVocabularyByPath("chapter-14/nouns-2")
  const adj_and_verbs = await fetchVocabularyByPath("chapter-14/adj-and-verbs")
  const counters_adv_misc = await fetchVocabularyByPath(
    "chapter-14/counters-adv-misc",
  )
  const data = [...nouns_1, ...nouns_2, ...adj_and_verbs, ...counters_adv_misc]

  return <VocabTest data={data} chapter={14} />
}
