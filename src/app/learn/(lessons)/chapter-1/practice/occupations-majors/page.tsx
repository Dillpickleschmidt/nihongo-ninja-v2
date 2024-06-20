import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-1/occupations-majors")

  return <PracticeModePage data={data} deckName="Occuupations & Majors" />
}
