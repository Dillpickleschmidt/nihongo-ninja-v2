import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-2/places-money-food"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1537370, 4252604492],
    [1578010, 2645011235],
    [1283190, 3064717489],
    [1243490, 2169005455],
    [1370420, 966089194],
    [1175570, 1711941020],
    [1463520, 2780378450],
    [1542430, 731068579],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice/places-money-food"
      jpdbDeckName="Nihongo Ninja: Chapter 2"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Places, Money, & Food
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
