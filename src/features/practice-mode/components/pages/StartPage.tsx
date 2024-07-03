import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import ContentBox from "@/features/content-box/ContentBox"
import DeckSettingsDialog from "../DeckSettingsDialog"
import { Settings } from "lucide-react"

type StartPageProps = {
  deckName: string
  shuffleInput: boolean
  setShuffleInput: (value: boolean) => void
}

export default function StartPage({
  deckName,
  shuffleInput,
  setShuffleInput,
}: StartPageProps) {
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
        <div className="relative lg:mx-48 2xl:mx-96">
          <h1 className="text-center text-5xl font-semibold">
            Practice {deckName}
          </h1>
          <div className="absolute bottom-0 right-4">
            <DeckSettingsDialog
              shuffleInput={shuffleInput}
              setShuffleInput={setShuffleInput}
            >
              <Button variant="ghost">
                <Settings className="h-7 w-7" />
              </Button>
            </DeckSettingsDialog>
          </div>
        </div>
      </div>
      <div className="pb-28 lg:mx-48 2xl:mx-96">
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
                .map((categoryObj, i) => (
                  <div key={i}>
                    <p className="my-2 italic text-muted-foreground">
                      {categoryObj.category}:
                    </p>
                    {categoryObj.answers.map((answer: string, j: number) => (
                      <p key={j} className="text-xl font-bold text-primary">
                        {categoryObj.category === "Kana" ? (
                          <span className="font-japanese text-2xl">
                            {answer}
                          </span>
                        ) : (
                          answer
                        )}
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
