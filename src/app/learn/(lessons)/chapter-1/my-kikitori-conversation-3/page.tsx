import ContentBox from "@/features/content-box/ContentBox"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/telling-time"
    >
      <div className="h-[50vh]">
        <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
          MyKikitori - Conversation 3
        </h1>
        <div className="space-y-6 px-16 md:px-24">
          <h2 className="mt-6 text-center text-2xl font-bold">
            It's time for some listening practice!
          </h2>
          <p>
            Head over to MyKikitori - Lesson 1 and listen to{" "}
            <span className="text-xl font-bold">Conversation 3</span>, then
            answer the questions via the{" "}
            <span className="font-black">Take the Quiz!</span> button.
          </p>
          <p>
            Once you complete the quiz, come back here and move on to the next
            module when you're ready.
          </p>
          <div className="flex justify-center pt-3">
            <a target="_blank" href="https://www.mykikitori.com/lesson-1">
              <Button size="lg">MyKikitori - Lesson 1</Button>
            </a>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
