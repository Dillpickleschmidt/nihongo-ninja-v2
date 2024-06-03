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
      <div className="font-semibold xl:text-5xl text-3xl text-center text-[#dfcdb3] pt-24 mb-10 mx-6">
        <h1>
          <em>You've finished this deck!</em>
        </h1>
        <h1 className="text-4xl mt-2">🎉</h1>
      </div>
      <div className="w-full flex justify-center">
        <div>
          {Object.entries(data).map(([key, card], index) => (
            <div
              key={index}
              className="relative bg-card dark:shadow-none shadow-lg rounded-lg my-2 flex min-w-[400px] overflow-hidden"
            >
              <li className="font-japanese flex items-center p-4">
                <span className="font-semibold text-3xl">{key} -</span>
                <div className="text-lg mt-2">
                  {card.answerCategories
                    .filter((category) =>
                      enabledAnswerCategories.includes(category.category)
                    )
                    .map((category, catIndex) => (
                      <div key={catIndex} className="ml-2">
                        {category.answers.join(" / ")}
                      </div>
                    ))}
                </div>
              </li>
              {card.wrongAnswerCount > 0 && (
                <p className="text-red-500 mt-2">
                  You missed this question {card.wrongAnswerCount} times
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center px-3">
        <Link href="/learn">
          <Button size="lg" className="w-40 mt-2 mb-4 bg-orange-500">
            Return
          </Button>
        </Link>
      </div>
    </div>
  )
}
