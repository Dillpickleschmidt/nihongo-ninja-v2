import ContentBox from "@/components/ContentBox"
import Greetings from "./components/Greetings"
import CommonExpressions from "./components/CommonExpressions"
import Numbers from "./components/Numbers"

export default async function page() {
  const tableClassName = "table-fixed w-full"
  const japaneseClassName = "font-japanese text-[1.35rem] font-medium"

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/greetings"
    >
      <div>
        <h1 className="px-20 pb-6 pt-28 text-center text-4xl font-medium leading-[3.25rem]">
          <span className="text-5xl font-medium">Great job</span>, you've
          finally made it! You've now got a strong grasp of Hiragana! Not only
          can you <span className="text-5xl">read</span> hiragana, but you also
          have the phonetic arsenal to <span className="text-5xl">say</span>{" "}
          pretty much <span className="font-bold">*anything*</span> in
          Japanese!🔥
        </h1>
        <p className="px-28 py-6 text-xl leading-8">
          You're probably tired of practicing hiragana, so here's a quick
          preview of what you'll learn in the next few lessons. You'll quckly
          work your way through each word as they come up, and you'll be having
          real Japanese conversations before you know it!
        </p>

        <div className="mx-16 border-b border-neutral-600 pb-16">
          <h1 className="mx-auto mb-12 mt-6 text-center text-5xl font-semibold tracking-wide">
            <em>Vocabulary</em>
          </h1>
          <div className="mx-8">
            <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Greetings
            </h3>
            <Greetings />
            <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Common Expressions
            </h3>
            <CommonExpressions />
            <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Numbers
            </h3>
            <Numbers />
            <h3 className="mt-4 text-center">...up to 99 (it's easy).</h3>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
