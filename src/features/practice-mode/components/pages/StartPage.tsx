import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import ContentBox from "@/components/ContentBox"

type StartPageProps = {
  deckName: string
}

export default function StartPage({ deckName }: StartPageProps) {
  const { setCurrentPage, enabledAnswerCategories, data } =
    usePracticeModeContext()

  // Sort data based on the order property before setting it
  const sortedData = data.sort((a, b) => a.order - b.order)

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
            onClick={() => setCurrentPage("practice")}
            size="lg"
            className="w-[480px] bg-orange-500"
          >
            Start Learning!
          </Button>
        </div>
      }
    >
      <div className="w-full pb-10 pt-24">
        <h1 className="text-center text-5xl font-semibold">
          Practice {deckName}
        </h1>
      </div>
      <div className="lg:mx-48 2xl:mx-96">
        <div>
          {sortedData.map((entry, index) => (
            <div
              key={index}
              className="m-2 min-w-[450px] rounded-xl bg-card p-6 shadow-md"
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
    </ContentBox>
  )
}
