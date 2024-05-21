import VocabCard from "./components/VocabCard"
import { VocabCardContextProvider } from "./context/VocabCardContext"
import { VocabCardProps } from "@/types/vocab"

export default function VocabCards({ data }: VocabCardProps) {
  const vocabArray = Object.entries(data).map(([key, value], index) => ({
    id: key,
    ...value,
  }))

  return (
    <VocabCardContextProvider data={data}>
      <div className="m-6 space-y-6">
        {vocabArray.map((item, index) => (
          <VocabCard
            key={item.id} // To prevent React key error
            index={index} // To track the index
            light={(index + 1) % 2 === 0} // Alternating colors
            title={`${index + 1}. ${item.id} - ${item.english?.join(", ")}`} // 1. 食べる - Hello
          >
            {item.mnemonics?.map((mnemonic, idx) => (
              <p key={idx} className="space-y-6">
                {mnemonic}
              </p>
            ))}
          </VocabCard>
        ))}
      </div>
    </VocabCardContextProvider>
  )
}
