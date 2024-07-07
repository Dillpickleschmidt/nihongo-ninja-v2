import ContentBox from "@/features/content-box/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-3/verbs-and-adj"
  const data = await fetchVocabularyByPath(path)
  const jpdbIds = [
    [1578850, 495123619],
    [1169870, 2839775424],
    [1358280, 1232985445],
    [1360010, 2923483838],
    [1223640, 3230428144],
    [1221270, 1589949286],
    [1157170, 460825390],
    [2820690, 895801849],
    [1259290, 3110766742],
    [1591110, 3865890281],
    [1562350, 4280520068],
    [1456360, 3629470669],
    [1547720, 1154899103],
    [1404975, 2342358459],
  ]
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/practice/verbs-and-adj-readings"
      jpdbDeckName="Nihongo Ninja: Chapter 3"
      jpdbVocab={jpdbIds}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Verbs and Adjectives
      </h1>
      <p className="mx-16">
        This is likely your first time encountering verbs and adjectives in
        Japanese. In every vocab listing like this one, we provide additional
        information about the particles that some verbs expect to have paried
        with nouns. You've already learned a few of these particles, but these
        verbs expect several new ones that you haven't learned yet. Don't worry
        about them right now, but be aware that they exist and that you'll learn
        them shortly.
      </p>
      <p className="mx-16 mt-4">
        We encourage you to come back here after you've learned the new
        particles to see how they interact with these verbs. You'll want to pay
        special attention to the particles going forward to make grammatially
        correct sentences.
      </p>
      <VocabCards data={data} furiganaSize="1rem" />
    </ContentBox>
  )
}
