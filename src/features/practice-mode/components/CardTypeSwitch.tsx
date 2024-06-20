import MultipleChoice from "./multiple-choice/MultipleChoice"
import WriteComponent from "./write/WriteComponent"
import { useMemo } from "react"
import { usePracticeModeContext } from "../context/PracticeModeContext"
import type { Card } from "@/types"

type CardTypeSwitchProps = {
  data: Card[]
}

export default function CardTypeSwitch({ data }: CardTypeSwitchProps) {
  const { currentCardIndex, correctEntry } = usePracticeModeContext()

  const currentCard = useMemo(
    () => data[currentCardIndex],
    [data, currentCardIndex],
  )

  const currentCardStyle = currentCard?.cardStyle

  function renderComponent() {
    switch (currentCardStyle) {
      case "multiple-choice":
        return <MultipleChoice data={data} shuffleInput={false} />
      case "write":
        return <WriteComponent data={data} shuffleInput={false} />
      default:
        return (
          <div>
            <h2>No questions</h2>
          </div>
        )
    }
  }

  return (
    <div className="w-full">
      <h2 className="mx-12 text-center font-japanese text-6xl">
        {correctEntry?.key}
      </h2>
      {renderComponent()}
    </div>
  )
}
