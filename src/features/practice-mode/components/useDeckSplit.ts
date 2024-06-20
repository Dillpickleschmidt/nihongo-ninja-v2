import { Card, Entry } from "@/types"

export default function useDeckSplit(data: Entry[]) {
  // Add a new property 'cardStyle' and 'wrongAnswerCount' to each entry
  const updatedEntries: Card[] = data.map((entry, index) => ({
    ...entry,
    cardStyle: "multiple-choice",
    wrongAnswerCount: 0,
  }))

  // Slice the first 10 entries from the data
  const slicedEntries = updatedEntries.slice(0, 10)
  // Slice the remaining entries from the data
  const remainingEntries = updatedEntries.slice(10)

  return {
    slicedData: slicedEntries,
    remainingData: remainingEntries,
    unslicedData: updatedEntries,
  }
}
