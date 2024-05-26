import VocabCard from "./components/VocabCard"
import { VocabCardContextProvider } from "./context/VocabCardContext"
import { VocabData } from "@/types/vocab"
import { furiganaToRubyText } from "@/features/vocab-data-parsers"

type VocabCardsProps = VocabData & {
  countOffset?: number
}

export default function VocabCards({ data, countOffset = 0 }: VocabCardsProps) {
  const vocabArray = Object.entries(data).map(([key, value], index) => ({
    id: key,
    ...value,
  }))

  const rubyText = furiganaToRubyText(data)

  return (
    <VocabCardContextProvider data={data}>
      <div className="m-6 space-y-6">
        {vocabArray.map((item, index) => (
          <VocabCard
            key={item.id} // To prevent React key error
            index={index + countOffset} // To track the index
            light={(index + 1) % 2 === 0} // Alternating colors
            english={item.english?.join(", ")}
            kana={rubyText[index][0]}
          >
            <>
              {item.info && (
                <ul className="list-disc ml-6">
                  {item.info.map((info, idx) => (
                    <li key={idx} className="space-y-6">
                      {info}
                    </li>
                  ))}
                </ul>
              )}
              {item.mnemonics?.map((mnemonic, idx) => (
                <p key={idx} className="space-y-6">
                  <span className="font-bold">Mnemonic: </span>
                  {mnemonic}
                </p>
              ))}
            </>
          </VocabCard>
        ))}
      </div>
    </VocabCardContextProvider>
  )
}
