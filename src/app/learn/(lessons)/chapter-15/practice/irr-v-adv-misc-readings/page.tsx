import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  enhanceVocabWithKanaAndRuby,
  stripFurigana,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-15/irr-v-adv-misc")
  const processedData = stripFurigana(enhanceVocabWithKanaAndRuby(data))

  return (
    <PracticeModePage
      data={processedData}
      deckName={
        <>
          Irregular Verbs, Adverbs, and Misc.{" "}
          <span className="text-sky-400">Readings</span>
        </>
      }
    />
  )
}
