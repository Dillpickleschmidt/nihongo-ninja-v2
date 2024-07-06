import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  SwapWordAndEnglish,
  VocabEntryKanjiToKana,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-3/nouns")
  const kanaData = VocabEntryKanjiToKana(data)
  const swappedData = SwapWordAndEnglish(kanaData)
  console.log(swappedData)

  return <PracticeModePage data={swappedData} deckName="Things" />
}
