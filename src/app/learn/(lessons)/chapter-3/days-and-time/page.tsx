import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-3/days-and-time"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1586330, 1262547411],
    [1299400, 2373372162],
    [1270590, 1445326988],
    [1482110, 1953030635],
    [1371260, 1960654445],
    [1173720, 1890876179],
    [1002430, 3202573393],
    [1329015, 3118935943],
    [1183720, 2359051606],
    [1602340, 3156463396],
    [1191730, 1719503060],
    [1206730, 3266861604],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/practice/days-and-time-readings"
      jpdbDeckName="Nihongo Ninja: Chapter 3"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Days of The Week & Time
      </h1>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
