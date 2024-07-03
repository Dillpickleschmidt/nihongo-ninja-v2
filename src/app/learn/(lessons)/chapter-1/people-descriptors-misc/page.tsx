import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/people-descriptors-misc"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1387990, 406160283],
    [1202150, 4220409974],
    [1294940, 1962749405],
    [1531710, 3511332528],
    [1270910, 2787959195],
    [1540170, 3768385324],
    [1443840, 3633371468],
    [1482290, 1083903618],
    [1005340, 1964648434],
    [1577100, 1737572525],
    [1010080, 3189537382],
    [1339260, 1294214972],
    [1311110, 1819875830],
    [2022640, 1829320985],
    [1000430, 3702174873],
    [1464700, 3034679503],
    [2837492, 2915909738],
    [1464530, 3361009543],
    [1366410, 1736745155],
  ]

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/people-descriptors-misc"
      jpdbDeckName="Nihongo Ninja: Chapter 1"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        People, Descriptors, & Misc
      </h1>
      <VocabCards data={data} />
    </ContentBox>
  )
}
