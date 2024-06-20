import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/countries-time"
  const data = await fetchVocabularyByPath(path)

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/countries-time"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Countries & Time
      </h1>
      <VocabCards data={data} />
    </ContentBox>
  )
}
