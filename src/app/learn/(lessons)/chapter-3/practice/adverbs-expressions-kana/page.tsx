import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  convertKanjiToKana,
  swapWordAndEnglish,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-3/adverbs-expressions")
  const processedData = swapWordAndEnglish(convertKanjiToKana(data))

  return (
    <PracticeModePage
      data={processedData}
      deckName={
        <>
          Adverbs & Expressions <span className="text-orange-400">Kana</span>
        </>
      }
    />
  )
}
