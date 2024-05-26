import ContentBox from "@/components/ContentBox"
import VocabCards from "@/features/vocab-card/VocabCards"
import data from "@/data/chapter-1/test_data.json"
import {
  extractHiragana,
  transformVocabData,
  furiganaToRubyText,
} from "@/utils/vocab-data-parsers"
import { VocabData } from "@/types/vocab"

export default function page() {
  const rubyText = furiganaToRubyText(data)
  console.log(rubyText)

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/vocab"
    >
      <h1 className="pt-28 px-28 pb-6 text-3xl">
        Now that you&apos;re familiar with the basics, let&apos;s dive into some
        common Japanese greetings. These phrases will be your first steps into
        conversational Japanese, and they&apos;re essential for everyday
        interactions.
      </h1>
      {/* <div className="relative w-full h-96 flex flex-col justify-center bg-gray-900"> */}
      <VocabCards data={data} />
      {/* </div> */}
    </ContentBox>
  )
}
