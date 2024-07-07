import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import { removeFurigana } from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-3/chapter-1-kanji-part-1")
  const removedFuriganaData = removeFurigana(data)

  return (
    <PracticeModePage
      data={removedFuriganaData}
      deckName={
        <>
          Chapter 1 <span className="text-sky-400">Kanji</span> Pt. 1
        </>
      }
    />
  )
}
