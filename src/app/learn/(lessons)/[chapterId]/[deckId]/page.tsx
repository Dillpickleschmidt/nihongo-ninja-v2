import "server-only"
import { use } from "react"
import path from "path"
import fs from "fs/promises"
import { notFound } from "next/navigation"
import { JSONWithAnswerCategories } from "@/types"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { PracticeModeContextProvider } from "@/features/practice-mode/context/PracticeModeContext"
// import data from "./test-data.json"
import useDeckSplit from "@/features/practice-mode/components/useDeckSplit"

type PageProps = {
  params: {
    chapterId: string
    deckId: string
  }
}

const getData = async (
  chapterId: string,
  deckId: string
): Promise<JSONWithAnswerCategories> => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    chapterId,
    `${deckId}.json`
  )
  try {
    const fileContents = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContents) as JSONWithAnswerCategories
  } catch (error) {
    console.error("Error reading file:", error)
    notFound()
  }
}

const DeckPage = ({ params }: PageProps) => {
  const { chapterId, deckId } = params
  const data = use(getData(chapterId, deckId))

  const { slicedData, remainingData, unslicedData } = useDeckSplit(data)

  return (
    <PracticeModeContextProvider>
      <PracticeMode
        data={data}
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
