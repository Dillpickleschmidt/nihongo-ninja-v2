import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-2/things"
  const data = await fetchVocabularyByPath(path)

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice/things"
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
