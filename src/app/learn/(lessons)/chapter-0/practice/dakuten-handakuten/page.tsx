import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import { stripFurigana } from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-0/dakuten-handakuten")
  const processedData = stripFurigana(data)

  return (
    <PracticeModePage data={processedData} deckName="Dakuten & Handakuten" />
  )
}
