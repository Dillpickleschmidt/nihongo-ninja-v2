import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import { VocabEntryKanjiToKana } from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-2/things")
  const kanaData = VocabEntryKanjiToKana(data)

  return <PracticeModePage data={kanaData} deckName="Things" />
}
