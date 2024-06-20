import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { AnswerCategory } from "@/types"

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

  // Create a Map to filter out duplicate keys and keep only the last occurrence
  const uniqueCards = Array.from(
    new Map(recentlySeenCards.map((card) => [card.key, card])).values(),
  )

  return (
    <>
      <p className="mx-6 mt-16 text-center text-3xl font-semibold italic text-orange-500 xl:text-5xl">
        See the terms you practiced!
      </p>
      <div className="flex w-full justify-center">
        <div>
          <div className="mt-6 w-full">
            {uniqueCards.map((card) => (
              <div
                key={card.key}
                className="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8"
              >
                <div className="flex-1 py-4 pl-4 pr-6">
                  <p
                    className={`${card.wrongAnswerCount > 0 ? "text-[#ff5757]" : ""} font-interbold text-xl`}
                  >
                    {card.key}
                  </p>
                  {card.answerCategories.map(
                    (categoryObj: AnswerCategory, index: number) => (
                      <div key={index} className="mt-2">
                        <p className="font-interbold">
                          {categoryObj.category}:
                        </p>
                        {categoryObj.answers.map(
                          (answer: string, idx: number) => (
                            <p key={idx} className="ml-4">
                              {answer}
                            </p>
                          ),
                        )}
                      </div>
                    ),
                  )}
                </div>
                <div
                  className={`absolute right-0 h-full ${card.wrongAnswerCount > 0 ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
                ></div>
              </div>
            ))}
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
      </div>
    </>
  )
}
