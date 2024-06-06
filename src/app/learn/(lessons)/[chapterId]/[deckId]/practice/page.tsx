import "server-only"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { PracticeModeContextProvider } from "@/features/practice-mode/context/PracticeModeContext"
import useDeckSplit from "@/features/practice-mode/components/useDeckSplit"
import { vocabDataToJSONWithAnswerCategories } from "@/features/vocab-data-parsers"
import {
  arrayToRecord,
  fetchVocabularyByPath,
} from "@/features/practice-mode/components/fetchVocabByPath"
// import data from "@/data/chapter-0/vocab.json"

type PageProps = {
  params: {
    chapterId: string
    deckId: string
  }
}

export default async function DeckPage({ params }: PageProps) {
  const { chapterId, deckId } = params
  const joinedPath = `${chapterId}/${deckId}`

  const vocabularyData = await fetchVocabularyByPath(joinedPath)
  const convertedData = vocabDataToJSONWithAnswerCategories(vocabularyData)

  const { slicedData, remainingData, unslicedData } =
    useDeckSplit(convertedData)

  const snakeToTitle = deckId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(", ")

  return (
    <PracticeModeContextProvider>
      <PracticeMode
        data={convertedData}
        deckId={deckId}
        slicedData={slicedData}
        remainingData={remainingData}
        unslicedData={unslicedData}
      >
        <h1 className="text-6xl">{`Practice ${snakeToTitle}`}</h1>
      </PracticeMode>
    </PracticeModeContextProvider>
  )
}
