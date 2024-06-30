import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-2/things"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1318290, 281437092],
    [1208910, 2654167550],
    [1296970, 1730259556],
    [1301940, 1711082330],
    [1362360, 4130076302],
    [1246700, 2653988765],
    [1316140, 2250684554],
    [1522150, 1953828425],
    [1519170, 2609029115],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice/things"
      jpdbDeckName="Nihongo Ninja: Chapter 2"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Things
      </h1>
      <p className="mx-16">
        We're providing the kanji here just to familiarize you with how it
        looks. You won't need to memorize the kanji until Chapter 3. For now,
        just focus on the hiragana.
      </p>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
