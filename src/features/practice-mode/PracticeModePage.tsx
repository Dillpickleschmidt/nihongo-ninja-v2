import type { EnhancedVocabEntry, VocabEntry } from "@/types/vocab"
import type { Card } from "@/types"
import { PracticeModeContextProvider } from "./context/PracticeModeContext"
import PracticeMode from "./PracticeMode"
import { convertToFlashcards } from "../vocab-data-parsers"

type PracticeModePageProps = {
  data: VocabEntry[] | EnhancedVocabEntry[]
  deckName: React.ReactNode
}

export default function PracticeModePage({
  data,
  deckName,
}: PracticeModePageProps) {
  // Convert vocab entries to cards
  const convertedData = convertToFlashcards(data) as Card[]

  return (
    <PracticeModeContextProvider>
      <PracticeMode deckName={deckName} data={convertedData} />
    </PracticeModeContextProvider>
  )
}
