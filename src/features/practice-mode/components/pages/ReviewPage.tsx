import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { AnswerCategory } from "@/types"
import ContentBox from "@/features/content-box/ContentBox"

export default function ReviewPage() {
  const {
    recentlySeenCards,
    setRecentlySeenCards,
    setCurrentPage,
    enabledAnswerCategories,
  } = usePracticeModeContext()

  if (!recentlySeenCards) {
    return null
  }

  // Create a Map to filter out duplicate keys and keep only the last occurrence
  const uniqueCards = Array.from(
    new Map(recentlySeenCards.map((card) => [card.key, card])).values(),
  )

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
          <Button
            size="lg"
            onClick={() => {
              console.log("Clearing recently seen cards")
              setRecentlySeenCards(null)
              setCurrentPage("practice")
            }}
            className="w-[480px] bg-orange-500"
          >
            Continue
          </Button>
        </div>
      }
    >
      <div className="w-full pb-10 pt-24">
        <h1 className="text-center text-5xl font-semibold">
          See the terms you practiced!
        </h1>
      </div>
      <div className="pb-28 lg:mx-48 2xl:mx-96">
        <div>
          {uniqueCards.map((card) => (
            <div
              key={card.key}
              className="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8"
            >
              <div className="flex-1 py-4 pl-4 pr-6">
                <p
                  className={`${card.wrongAnswerCount > 0 ? "text-[#ff5757]" : ""} text-xl font-bold`}
                >
                  {card.key}
                </p>
                {card.answerCategories
                  .filter(
                    (category) =>
                      enabledAnswerCategories.includes(category.category) &&
                      category.answers.length > 0,
                  )
                  .map((categoryObj: AnswerCategory, index: number) => (
                    <div key={index} className="mt-2">
                      <p className="my-1 italic text-muted-foreground">
                        {categoryObj.category}:
                      </p>
                      {categoryObj.answers.map(
                        (answer: string, idx: number) => (
                          <p key={idx} className="ml-4 text-xl">
                            {categoryObj.category === "Kana" ? (
                              <span className="font-japanese text-2xl font-medium">
                                {answer}
                              </span>
                            ) : (
                              answer
                            )}
                          </p>
                        ),
                      )}
                    </div>
                  ))}
              </div>
              <div
                className={`absolute right-0 h-full ${card.wrongAnswerCount > 0 ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </ContentBox>
  )
}
