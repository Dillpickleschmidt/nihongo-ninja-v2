import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-3/adverbs-expressions"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1584930, 3980647874],
    [2008670, 474705737],
    [1395620, 4289485632],
    [1605870, 2194932429],
    [1001140, 100459985],
    [1598680, 1553763224],
    [1414580, 1406264136],
    [1008910, 157196650],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/practice/adjectives-adverbs-expressions-readings"
      jpdbDeckName="Nihongo Ninja: Chapter 3"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Adverbs & Expressions
      </h1>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
