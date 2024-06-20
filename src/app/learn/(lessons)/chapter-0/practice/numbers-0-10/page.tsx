import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-0/numbers-0-10")

  return <PracticeModePage data={data} deckName="Numbers 0-10" />
}
