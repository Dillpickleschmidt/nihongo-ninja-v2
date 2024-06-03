import { CardObject } from "@/types"
import MultipleChoice from "./multiple-choice/MultipleChoice"
import WriteComponent from "./write/WriteComponent"
import { useMemo } from "react"
import { usePracticeModeContext } from "../context/PracticeModeContext"

type CardTypeSwitchProps = {
  data: CardObject
}

export default function CardTypeSwitch({ data }: CardTypeSwitchProps) {
  const { currentCardIndex, correctEntry } = usePracticeModeContext()

  const currentKey = useMemo(
    () => Object.keys(data)[currentCardIndex],
    [data, currentCardIndex]
  )

  const currentCardStyle = data[currentKey]?.cardStyle

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
      <h2 className="font-japanese text-6xl text-center mx-6">
        {correctEntry?.key}
      </h2>
      {renderComponent()}
    </div>
  )
}
