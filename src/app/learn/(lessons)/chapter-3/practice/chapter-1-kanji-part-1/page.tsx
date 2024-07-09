import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  stripFurigana,
  enhanceVocabWithKanaAndRuby,
} from "@/features/vocab-data-parsers"

export default async function Page() {
  const data = await fetchVocabularyByPath("chapter-3/chapter-1-kanji-part-1")
  const processedData = stripFurigana(enhanceVocabWithKanaAndRuby(data))

  return (
    <PracticeModePage
      data={processedData}
      deckName={
        <>
          Chapter 1 <span className="text-sky-400">Kanji</span> Pt. 1
        </>
      }
    />
  )
}
