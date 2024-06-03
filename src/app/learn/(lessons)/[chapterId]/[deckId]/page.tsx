import "server-only"
import { use } from "react"
import path from "path"
import fs from "fs/promises"
import { notFound } from "next/navigation"
import { JSONWithAnswerCategories } from "@/types"
import { VocabData } from "@/types/vocab"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { PracticeModeContextProvider } from "@/features/practice-mode/context/PracticeModeContext"
// import data from "./test-data.json"
import useDeckSplit from "@/features/practice-mode/components/useDeckSplit"
import { vocabDataToJSONWithAnswerCategories } from "@/features/vocab-data-parsers"

type PageProps = {
  params: {
    chapterId: string
    deckId: string
  }
}

const getData = async (
  chapterId: string,
  deckId: string,
): Promise<VocabData> => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    chapterId,
    `${deckId}.json`,
  )
  try {
    const fileContents = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContents) as VocabData
  } catch (error) {
    console.error("Error reading file:", error)
    notFound()
  }
}

const DeckPage = ({ params }: PageProps) => {
  const { chapterId, deckId } = params
  const data = use(getData(chapterId, deckId))
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

export default DeckPage
