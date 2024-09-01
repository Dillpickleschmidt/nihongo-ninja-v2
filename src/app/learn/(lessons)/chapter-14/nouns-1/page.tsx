import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-14/nouns-1"
  const data = await fetchVocabularyByPath(path)
  // const jpdbIds = [
  //   [1318290, 281437092],
  //   [1208910, 2654167550],
  //   [1296970, 1730259556],
  //   [1301940, 1711082330],
  //   [1362360, 4130076302],
  //   [1246700, 2653988765],
  //   [1316140, 2250684554],
  //   [1522150, 1953828425],
  //   [1519170, 2609029115],
  // ]

  return (
    <ContentBox
      nextPageLink="/learn/chapter-14/practice/nouns-1-readings"
      jpdbDeckName="Nihongo Ninja: Chapter 14"
      // jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Nouns 1
      </h1>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
