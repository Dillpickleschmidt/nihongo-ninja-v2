import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/countries-time"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1269060, 2805783274],
    [1288850, 1736536790],
    [1478750, 1713267335],
    [1424270, 3611455887],
    [1576100, 1925836304],
    [1268990, 2809757434],
    [2612170, 1169415654],
    [1021160, 3864140793],
    [1216170, 2955086449],
    [1582710, 2798898833],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/countries-time"
      jpdbDeckName="Nihongo Ninja: Chapter 1"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Countries & Time
      </h1>
      <VocabCards data={data} />
    </ContentBox>
  )
}
