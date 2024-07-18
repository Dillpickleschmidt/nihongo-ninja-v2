import ContentBox from "@/features/content-box/ContentBox"
import PlacesMoneyFood from "@/features/vocab-list/components/chapter-2/PlacesMoneyFood"
import Things from "@/features/vocab-list/components/chapter-2/Things"
import WordsThatPoint from "@/features/vocab-list/components/chapter-2/WordsThatPoint"

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
            Things
          </h3>
          <Things />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
          <h3 className="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>
      </div>
    </ContentBox>
  )
}
