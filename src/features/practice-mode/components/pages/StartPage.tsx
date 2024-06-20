import { Button } from "@/components/ui/button"
import { Card } from "@/types"
import { usePracticeModeContext } from "../../context/PracticeModeContext"

type StartPageProps = {
  deckName: string
}

export default function StartPage({ deckName }: StartPageProps) {
  const { setCurrentPage, enabledAnswerCategories, data } =
    usePracticeModeContext()

  // Sort data based on the order property before setting it
  const sortedData = data.sort((a, b) => a.order - b.order)

  return (
    <div>
      <div className="mb-10 pt-24 text-center text-5xl font-semibold">
        Practice {deckName}
      </div>
      <div className="flex w-full justify-center">
        <div>
          <div>
            {sortedData.map((entry, index) => (
              <div
                key={index}
                className="my-2 min-w-[500px] rounded-xl bg-card p-6 shadow-md"
              >
                <p className="text-2xl font-bold text-orange-500 text-primary">
                  {entry.key}
                </p>
                {entry.answerCategories
                  .filter((category) =>
                    enabledAnswerCategories.includes(category.category),
                  )
                  .map((category, i) => (
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
