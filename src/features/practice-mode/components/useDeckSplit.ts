import { Card } from "@/types"

export default function useDeckSplit(data: Card[]) {
  // Slice the first 10 entries from the data
  const slicedEntries = data.slice(0, 10)
  // Slice the remaining entries from the data
  const remainingEntries = data.slice(10)

  return {
    slicedData: slicedEntries,
    remainingData: remainingEntries,
    unslicedData: data,
  }
}
