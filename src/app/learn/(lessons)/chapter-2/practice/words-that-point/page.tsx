import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  convertKanjiToKana,
  swapWordAndEnglish,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-2/words-that-point")
  const processedData = swapWordAndEnglish(convertKanjiToKana(data))

  return <PracticeModePage data={processedData} deckName="Words That Point" />
}
