import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  convertKanjiToKana,
  swapWordAndEnglish,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-15/irr-v-adv-misc")
  const processedData = swapWordAndEnglish(convertKanjiToKana(data))

  return (
    <PracticeModePage
      data={processedData}
      deckName={
        <>
          Irregular Verbs, Adverbs, and Misc.{" "}
          <span className="mx-2 text-orange-400">Kana</span>
        </>
      }
    />
  )
}
