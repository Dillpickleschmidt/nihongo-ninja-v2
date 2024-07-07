import { VocabEntry } from "@/types/vocab"
import { PracticeModeContextProvider } from "./context/PracticeModeContext"
import PracticeMode from "./PracticeMode"
import { vocabEntriesToCards } from "../vocab-data-parsers"

type PracticeModePageProps = {
  data: VocabEntry[]
  deckName: React.ReactNode
}

export default function PracticeModePage({
  data,
  deckName,
}: PracticeModePageProps) {
  // Convert vocab entries to cards
  const convertedData = vocabEntriesToCards(data)
  return (
    <PracticeModeContextProvider>
      <PracticeMode deckName={deckName} data={convertedData} />
    </PracticeModeContextProvider>
  )
}
