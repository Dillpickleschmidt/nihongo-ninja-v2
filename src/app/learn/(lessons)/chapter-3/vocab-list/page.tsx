import ContentBox from "@/features/content-box/ContentBox"
import AdverbsExpressions from "@/features/vocab-list/components/chapter-3/AdverbsExpressions"
import AndSoBut from "@/features/vocab-list/components/chapter-3/AndSoBut"
import DaysAndTime from "@/features/vocab-list/components/chapter-3/DaysAndTime"
import Nouns from "@/features/vocab-list/components/chapter-3/Nouns"
import VerbsAndAdjectives from "@/features/vocab-list/components/chapter-3/VerbsAndAdjectives"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/grammar-notes"
    >
      <div className="mx-16 border-b border-neutral-600 pb-16">
        <h1 className="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div className="mx-8">
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <Nouns />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Days of The Week & Time
          </h3>
          <DaysAndTime />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Verbs & Adjectives
          </h3>
          <VerbsAndAdjectives />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adverbs & Expressions
          </h3>
          <AdverbsExpressions />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            And, So, and But
          </h3>
          <AndSoBut />
        </div>
      </div>
    </ContentBox>
  )
}
