import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabTest from "@/features/vocab-test/VocabTest"

const data = await fetchVocabularyByPath("chapter-13/nouns")

export default function page() {
  return <VocabTest data={data} chapter={13} />
}
