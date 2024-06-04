import { CardObject, JSONWithAnswerCategories } from "@/types"

export default function useDeckSplit(data: JSONWithAnswerCategories) {
  // Convert the data object into an array of key-value pairs
  const dataEntries = Object.entries(data)

  // Add a new property 'cardStyle' to each entry's value
  const updatedEntries = dataEntries.map(([key, value]) => [
    key,
    {
      ...value,
      cardStyle: "multiple-choice",
      wrongAnswerCount: 0,
    },
  ])

  // Slice the first 10 entries from the data
  const slicedEntries = updatedEntries.slice(0, 10)
  // Slice the remaining entries from the data
  const remainingEntries = updatedEntries.slice(10)

  // Convert the updated entries back to an object
  const slicedData: CardObject = Object.fromEntries(slicedEntries)
  const remainingData: CardObject = Object.fromEntries(remainingEntries)

  const unslicedData: CardObject = Object.fromEntries(updatedEntries)

  // console.log("resplit data")

  return { slicedData, remainingData, unslicedData }
}
