import { Button } from "@/components/ui/button"
import { JSONWithAnswerCategories } from "@/types"
import { usePracticeModeContext } from "../../context/PracticeModeContext"

type StartPageProps = {
  children: React.ReactNode
  deckId: string
  data: JSONWithAnswerCategories
}

export default function StartPage({ children, deckId, data }: StartPageProps) {
  const { setCurrentPage, enabledAnswerCategories } = usePracticeModeContext()

  return (
    <div>
      <div className="mb-10 pt-24 text-center text-3xl font-semibold">
        {children}
      </div>
      <div className="flex w-full justify-center">
        <div>
          <div>
            {Object.entries(data).map(([key, card], index) => (
              <div
                key={index}
                className="my-2 flex min-w-[400px] rounded-lg bg-card p-4 shadow-lg dark:shadow-none"
              >
                <li
                  className={`flex items-center font-japanese ${
                    index % 2 === 0
                      ? "dark:text-[#b49b7d]"
                      : "dark:text-[#dfcdb3]"
                  }`}
                >
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex justify-center">
        <Button
          onClick={() => setCurrentPage("practice")}
          size="lg"
          className="bg-orange-500"
        >
          Start Learning!
        </Button>
      </div>
    </div>
  )
}
