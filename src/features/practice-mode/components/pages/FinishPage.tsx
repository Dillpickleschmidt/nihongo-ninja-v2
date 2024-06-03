import { Button } from "@/components/ui/button"
import { CardObject, AnswerCategory } from "@/types"
import Link from "next/link"
import { usePracticeModeContext } from "../../context/PracticeModeContext"

type FinishPageProps = {
  data: CardObject
}

export default function FinishPage({ data }: FinishPageProps) {
  const { enabledAnswerCategories } = usePracticeModeContext()

  return (
    <div>
      <div className="mx-6 mb-10 pt-24 text-center text-3xl font-semibold text-[#dfcdb3] xl:text-5xl">
        <h1>
          <em>You've finished this deck!</em>
        </h1>
        <h1 className="mt-2 text-4xl">🎉</h1>
      </div>
      <div className="flex w-full justify-center">
        <div>
          {Object.entries(data).map(([key, card], index) => (
            <div
              key={index}
              className="relative my-2 flex min-w-[400px] overflow-hidden rounded-lg bg-card shadow-lg dark:shadow-none"
            >
              <li className="flex items-center p-4 font-japanese">
                <span className="text-3xl font-semibold">{key} -</span>
                <div className="mt-2 text-lg">
                  {card.answerCategories
                    .filter((category) =>
                      enabledAnswerCategories.includes(category.category),
                    )
                    .map((category, catIndex) => (
                      <div key={catIndex} className="ml-2">
                        {category.answers.join(" / ")}
                      </div>
                    ))}
                </div>
              </li>
              {card.wrongAnswerCount > 0 && (
                <p className="mt-2 text-red-500">
                  You missed this question {card.wrongAnswerCount} times
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center px-3">
        <Link href="/learn">
          <Button size="lg" className="mb-4 mt-2 w-40 bg-orange-500">
            Return
          </Button>
        </Link>
      </div>
    </div>
  )
}
