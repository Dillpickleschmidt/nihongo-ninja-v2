import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import ContentBox from "@/features/content-box/ContentBox"

export default function FinishPage() {
  const { data } = usePracticeModeContext()

  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=""
      fixedElements={
        <div className="fixed bottom-0 my-6 flex w-full justify-center">
          <Link href="/learn">
            <Button size="lg" className="mb-4 mt-2 w-40 bg-orange-500">
              Return
            </Button>
          </Link>
        </div>
      }
    >
      <div className="w-full pb-10 pt-24">
        <h1 className="text-center text-5xl font-semibold">
          You've finished this deck!
        </h1>
        <div className="mt-2 text-4xl">🎉</div>
      </div>
      <div className="pb-28 lg:mx-48 2xl:mx-96">
        <div>
          {data.map((entry, index) => (
            <div key={index} className="my-2 rounded-xl bg-card p-6 shadow-md">
              <p className="text-2xl font-bold !text-orange-500 text-primary">
                {entry.key}
              </p>
              {entry.answerCategories.map((categoryObj, i) => (
                <div key={i}>
                  <p className="my-1 italic text-muted-foreground">
                    {categoryObj.category}:
                  </p>
                  {categoryObj.answers.map((answer: string, j: number) => (
                    <p key={j} className="text-xl font-bold text-primary">
                      {categoryObj.category === "Kana" ? (
                        <span className="font-japanese text-2xl">{answer}</span>
                      ) : (
                        answer
                      )}
                    </p>
                  ))}
                </div>
              ))}
              {entry.wrongAnswerCount > 0 && (
                <p className="text-red-500">
                  You missed this question {entry.wrongAnswerCount} times
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentBox>
  )
}
