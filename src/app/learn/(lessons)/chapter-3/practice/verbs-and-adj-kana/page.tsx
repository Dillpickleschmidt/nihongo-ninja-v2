import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  swapWordAndEnglish,
  convertKanjiToKana,
} from "@/features/vocab-data-parsers"

export default async function Page() {
  const data = await fetchVocabularyByPath("chapter-3/verbs-and-adj")
  const processedData = swapWordAndEnglish(convertKanjiToKana(data))

  return (
    <PracticeModePage
      data={processedData}
      deckName={
        <>
          Verbs & Adjectives <span className="mx-4 text-orange-400">Kana</span>
        </>
      }
    />
  )
}
