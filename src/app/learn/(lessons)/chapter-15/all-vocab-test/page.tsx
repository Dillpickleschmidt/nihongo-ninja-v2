import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabTest from "@/features/vocab-test/VocabTest"

export default async function page() {
  const nouns_1 = await fetchVocabularyByPath("chapter-15/nouns-1")
  const nouns_2 = await fetchVocabularyByPath("chapter-15/nouns-2")
  const godan_and_ichidan_v = await fetchVocabularyByPath(
    "chapter-15/adj-and-verbs",
  )
  const irr_v_adv_misc = await fetchVocabularyByPath(
    "chapter-15/irr-v-adv-misc",
  )
  const data = [
    ...nouns_1,
    ...nouns_2,
    ...godan_and_ichidan_v,
    ...irr_v_adv_misc,
  ]

  return <VocabTest data={data} chapter={15} />
}
