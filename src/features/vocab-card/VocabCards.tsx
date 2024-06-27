import VocabCard from "./components/VocabCard"
import { VocabCardContextProvider } from "./context/VocabCardContext"
import type { VocabEntry } from "@/types/vocab"
import { furiganaToRubyText } from "@/features/vocab-data-parsers"

type VocabCardsProps = {
  data: VocabEntry[]
  countOffset?: number
  noFurigana?: boolean
  furiganaSize?: string
}

export default function VocabCards({
  data,
  countOffset = 0,
  noFurigana = false,
  furiganaSize,
}: VocabCardsProps) {
  const rubyText = furiganaToRubyText(data, furiganaSize)

  return (
    <VocabCardContextProvider data={data}>
      <div className="m-6 space-y-6">
        {data.map((item, index) => (
          <VocabCard
            key={item.word} // Use word as the key to prevent React key error
            index={index + countOffset} // Track the index
            light={(index + 1) % 2 === 0} // Alternating colors
            english={item.english?.join(", ")}
            kana={rubyText[index][0]}
            noFurigana={noFurigana}
            japanese={item.word}
            vocabVideo={true}
          >
            <>
              {item.mnemonics && item.mnemonics.length > 0 && (
                <div>
                  {item.mnemonics.map((mnemonic, idx) => (
                    <p key={idx} className="space-y-6">
                      <span className="font-bold">Mnemonic: </span>
                      {mnemonic}
                    </p>
                  ))}
                </div>
              )}
              {item.info && item.info.length > 0 && (
                <>
                  {/* <span className="font-bold italic">Info</span> */}
                  <ul
                    className={`ml-6 list-disc ${item.mnemonics && item.mnemonics.length > 0 && "pt-3"}`}
                  >
                    {item.info.map((info, idx) => (
                      <li key={idx} className="space-y-6">
                        {info}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          </VocabCard>
        ))}
      </div>
    </VocabCardContextProvider>
  )
}
