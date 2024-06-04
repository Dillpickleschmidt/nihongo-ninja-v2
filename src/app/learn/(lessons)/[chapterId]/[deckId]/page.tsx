import "server-only"
import { JSONWithAnswerCategories } from "@/types"
import { VocabData } from "@/types/vocab"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { PracticeModeContextProvider } from "@/features/practice-mode/context/PracticeModeContext"
import data from "@/data/chapter-0/vocab.json"
import useDeckSplit from "@/features/practice-mode/components/useDeckSplit"
import { vocabDataToJSONWithAnswerCategories } from "@/features/vocab-data-parsers"

type PageProps = {
  params: {
    chapterId: string
    deckId: string
  }
}

export default async function DeckPage({ params }: PageProps) {
  const { chapterId, deckId } = params
  const joinedPath = `${chapterId}/${deckId}`

  const convertedData = vocabDataToJSONWithAnswerCategories(data)

  const { slicedData, remainingData, unslicedData } =
    useDeckSplit(convertedData)

  return (
    <PracticeModeContextProvider>
      <PracticeMode
        data={convertedData}
        deckId={deckId}
        slicedData={slicedData}
        remainingData={remainingData}
        unslicedData={unslicedData}
      >
        <h1 className="text-6xl">Practice Deck {deckId}</h1>
      </PracticeMode>
    </PracticeModeContextProvider>
  )
}
