import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const data = await fetchVocabularyByPath(
    "chapter-0/greetings-common-expressions",
  )

  return (
    <PracticeModePage data={data} deckName="Greetings & Common Expressions" />
  )
}
