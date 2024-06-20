import "server-only"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { PracticeModeContextProvider } from "@/features/practice-mode/context/PracticeModeContext"
import useDeckSplit from "@/features/practice-mode/components/useDeckSplit"
import { vocabEntriesToEntries } from "@/features/vocab-data-parsers"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import data from "../hiragana.json"

export default async function page() {
  const convertedData = vocabEntriesToEntries(data)

  const { slicedData, remainingData, unslicedData } =
    useDeckSplit(convertedData)

  return (
    <PracticeModeContextProvider>
      <PracticeMode
        deckName="Hiragana"
        slicedData={slicedData}
        remainingData={remainingData}
        unslicedData={unslicedData}
      >
        <h1 className="text-6xl">Practice This Deck</h1>
      </PracticeMode>
    </PracticeModeContextProvider>
  )
}
