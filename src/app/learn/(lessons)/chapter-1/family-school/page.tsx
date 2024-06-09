import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/family-school"
  const data = await fetchVocabularyByPath(path)

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/family-school/practice"
    >
      <h1 className="px-28 pb-6 pt-28 text-3xl">Family & School</h1>
      <VocabCards data={data} />
    </ContentBox>
  )
}
