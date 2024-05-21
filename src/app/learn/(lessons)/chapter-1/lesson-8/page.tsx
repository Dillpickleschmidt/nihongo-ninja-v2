import ContentBox from "@/components/ContentBox"
import VocabCards from "@/features/vocab-card/VocabCards"
import data from "./test_data.json"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/vocab"
    >
      <div className="w-full h-24 bg-neutral-500"></div>
      {/* <div className="relative w-full h-96 flex flex-col justify-center bg-gray-900"> */}
      <VocabCards data={data} />
      {/* </div> */}
    </ContentBox>
  )
}
