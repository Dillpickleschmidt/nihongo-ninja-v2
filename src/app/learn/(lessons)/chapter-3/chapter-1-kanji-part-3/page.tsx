import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-3/chapter-1-kanji-part-3"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [[1318290, 281437092]]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/practice/chapter-1-kanji-part-3"
      jpdbDeckName="Nihongo Ninja: Chapter 3"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Chapter 1 Part 3 Kanji
      </h1>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
