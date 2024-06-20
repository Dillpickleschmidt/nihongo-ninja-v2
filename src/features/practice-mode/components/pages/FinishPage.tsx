import { Button } from "@/components/ui/button"
import { Card, AnswerCategory } from "@/types"
import Link from "next/link"
import { usePracticeModeContext } from "../../context/PracticeModeContext"

export default function FinishPage() {
  const { data } = usePracticeModeContext()

  return (
    <>
      <p className="font-interbolditalic mx-6 mt-16 text-center text-3xl xl:text-5xl">
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
                <p className="font-interbold text-2xl !text-orange-500 text-primary">
                  {entry.key}
                </p>
                {entry.answerCategories.map((category, i) => (
                  <div key={i}>
                    <p className="font-interitalic my-2 text-muted-foreground">
                      {category.category}:
                    </p>
                    {category.answers.map((answer: string, j: number) => (
                      <p
                        key={j}
                        className="font-interbold text-xl text-primary"
                      >
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
    </>
  )
}
