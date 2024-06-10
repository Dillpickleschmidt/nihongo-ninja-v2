import ContentBox from "@/components/ContentBox"

export default async function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/countries-time"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Your Japanese Voice
      </h1>
    </ContentBox>
  )
}
