import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import ContentBox from "@/components/ContentBox"

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
    >
      <p className="mx-6 mt-16 text-center text-3xl font-bold italic xl:text-5xl">
        You've finished this deck!
      </p>
      <div className="mt-2 text-4xl">🎉</div>
      <div className="flex w-full justify-center">
        <div>
          <div className="mt-6 w-full">
            {data.map((entry, index) => (
              <div
                key={index}
                className="my-2 rounded-xl bg-card p-6 shadow-md"
              >
                <p className="text-2xl font-bold !text-orange-500 text-primary">
                  {entry.key}
                </p>
                {entry.answerCategories.map((category, i) => (
                  <div key={i}>
                    <p className="my-2 italic text-muted-foreground">
                      {category.category}:
                    </p>
                    {category.answers.map((answer: string, j: number) => (
                      <p key={j} className="text-xl font-bold text-primary">
                        {answer}
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
          <div className="flex w-full justify-center px-3">
            <Link href="/learn">
              <Button size="lg" className="mb-4 mt-2 w-40 bg-orange-500">
                Return
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
