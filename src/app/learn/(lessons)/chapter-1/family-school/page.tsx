import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/family-school"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1002590, 690426107],
    [1002650, 149025526],
    [1581930, 1722154385],
    [1524590, 1717894865],
    [2261500, 3830479532],
    [1206900, 3144453909],
    [1002320, 4154471030],
    [1001830, 331667986],
    [1413240, 1100739711],
    [1389780, 2919654325],
    [1002330, 4007872180],
    [1552750, 2771263124],
    [1413260, 2796395633],
    [1283500, 2823660064],
    [1468900, 1783645507],
    [1165580, 1633027729],
    [2261490, 979215252],
    [1001990, 3743364699],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/family-school"
      jpdbDeckName="Nihongo Ninja: Chapter 1"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Family & School
      </h1>
      <VocabCards data={data} />
    </ContentBox>
  )
}
