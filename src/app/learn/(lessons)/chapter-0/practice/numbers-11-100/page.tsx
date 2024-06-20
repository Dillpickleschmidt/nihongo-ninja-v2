import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-0/numbers-11-100")

  return <PracticeModePage data={data} deckName="Practice Numbers 11-100" />
}
