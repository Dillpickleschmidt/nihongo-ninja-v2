import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import { removeFurigana } from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-3/verb-conj-masu")
  const removedFuriganaData = removeFurigana(data)

  return (
    <PracticeModePage
      data={removedFuriganaData}
      deckName={
        <>
          Nouns <span className="text-sky-400">Readings</span>
        </>
      }
    />
  )
}
