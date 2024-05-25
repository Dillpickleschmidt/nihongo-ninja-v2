import VocabCard from "./components/VocabCard"
import { VocabCardContextProvider } from "./context/VocabCardContext"
import { VocabData } from "@/types/vocab"
import { furiganaToRubyText } from "@/utils/vocab-data-parsers"

export default function VocabCards({ data }: VocabData) {
  const vocabArray = Object.entries(data).map(([key, value], index) => ({
    id: key,
    ...value,
  }))

  const rubyText = furiganaToRubyText(data)
  console.log(rubyText)

  return (
    <VocabCardContextProvider data={data}>
      <div className="m-6 space-y-6">
        {vocabArray.map((item, index) => (
          <VocabCard
            key={item.id} // To prevent React key error
            index={index} // To track the index
            light={(index + 1) % 2 === 0} // Alternating colors
            english={item.english?.join(", ")}
            kana={rubyText[index][0]}
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
