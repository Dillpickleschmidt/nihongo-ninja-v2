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
      <div className="pt-24 text-3xl text-center font-semibold mb-10">
        {children}
      </div>
      <div className="w-full flex justify-center">
        <div>
          <div>
            {Object.entries(data).map(([key, card], index) => (
              <div
                key={index}
                className="p-4 bg-card dark:shadow-none shadow-lg rounded-lg my-2 flex min-w-[400px]"
              >
                <li
                  className={`font-japanese flex items-center ${
                    index % 2 === 0
                      ? "dark:text-[#b49b7d]"
                      : "dark:text-[#dfcdb3]"
                  }`}
                >
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <Button
          onClick={() => setCurrentPage("practice")}
          className="min-w-full bg-orange-500"
        >
          Start Learning!
        </Button>
      </div> */}
    </div>
  )
}
