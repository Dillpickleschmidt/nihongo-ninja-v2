import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-1/minutes")

  return <PracticeModePage data={data} deckName="Minutes" />
}
