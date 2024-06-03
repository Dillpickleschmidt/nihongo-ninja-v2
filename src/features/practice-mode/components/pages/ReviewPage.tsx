import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"

export default function ReviewPage() {
  const {
    recentlySeenCards,
    setRecentlySeenCards,
    setCurrentPage,
    enabledAnswerCategories,
  } = usePracticeModeContext()

  if (!recentlySeenCards) {
    return
  }
  return (
    <div>
      <h1 className="mx-6 mb-10 pt-24 text-center text-3xl font-semibold text-[#dfcdb3] xl:text-5xl">
        <em>See the terms you practiced!</em>
      </h1>
      <div className="flex w-full justify-center">
        <div>
          {Object.entries(recentlySeenCards).map(([key, card], index) => (
            <div
              key={index}
              className="relative my-2 flex min-w-[400px] overflow-hidden rounded-lg bg-card shadow-lg dark:shadow-none"
            >
              <li
                className={`flex items-center p-4 font-japanese ${
                  card.wrongAnswerCount > 0
                    ? "text-red-500"
                    : index % 2 === 0
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
              <div
                className={`absolute right-0 h-full ${
                  card.wrongAnswerCount > 0
                    ? "w-2 bg-red-500/75"
                    : "w-[0.375rem] bg-green-500/50"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center px-3">
        <Button
          size="lg"
          onClick={() => {
            console.log("Clearing recently seen cards")
            setRecentlySeenCards(null)
            setCurrentPage("practice")
          }}
          className="mb-4 mt-2 w-40 bg-orange-500"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
