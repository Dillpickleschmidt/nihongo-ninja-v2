import ContentBox from "@/features/content-box/ContentBox"
import CommonExpressions from "@/features/vocab-list/components/chapter-0/CommonExpressions"
import Greetings from "@/features/vocab-list/components/chapter-0/Greetings"
import Numbers from "@/features/vocab-list/components/chapter-0/Numbers"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/greetings"
    >
      <div>
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
