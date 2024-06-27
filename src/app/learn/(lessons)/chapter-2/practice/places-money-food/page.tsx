import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  SwapWordAndEnglish,
  VocabEntryKanjiToKana,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-2/places-money-food")
  const kanaData = VocabEntryKanjiToKana(data)
  const swappedData = SwapWordAndEnglish(kanaData)

  return <PracticeModePage data={swappedData} deckName="Things" />
}
