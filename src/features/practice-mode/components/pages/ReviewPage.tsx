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
      <h1 className="font-semibold xl:text-5xl text-3xl text-center text-[#dfcdb3] pt-24 mb-10 mx-6">
        <em>See the terms you practiced!</em>
      </h1>
      <div className="w-full flex justify-center">
        <div>
          {Object.entries(recentlySeenCards).map(([key, card], index) => (
            <div
              key={index}
              className="relative bg-card dark:shadow-none shadow-lg rounded-lg my-2 flex min-w-[400px] overflow-hidden"
            >
              <li
                className={`font-japanese flex items-center p-4 ${
                  card.wrongAnswerCount > 0
                    ? "text-red-500"
                    : index % 2 === 0
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
              <div
                className={`absolute right-0 h-full ${
                  card.wrongAnswerCount > 0
                    ? "bg-red-500/75 w-2"
                    : "bg-green-500/50 w-[0.375rem]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center px-3">
        <Button
          size="lg"
          onClick={() => {
            console.log("Clearing recently seen cards")
            setRecentlySeenCards(null)
            setCurrentPage("practice")
          }}
          className="w-40 mt-2 mb-4 bg-orange-500"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
