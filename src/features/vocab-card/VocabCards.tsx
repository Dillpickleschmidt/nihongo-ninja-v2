import VocabCard from "./components/VocabCard"
import { VocabCardContextProvider } from "./context/VocabCardContext"
import type { VocabEntry, EnhancedVocabEntry } from "@/types/vocab"
import { enhanceVocabWithKanaAndRuby } from "@/features/vocab-data-parsers"

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
  furiganaSize = "0.75rem",
}: VocabCardsProps) {
  // Enhance the data with ruby text
  const enhancedData = enhanceVocabWithKanaAndRuby(
    data,
    false,
  ) as EnhancedVocabEntry[]

  return (
    <VocabCardContextProvider data={data}>
      <div className="m-6 space-y-6">
        {enhancedData.map((item, index) => (
          <VocabCard
            key={item.word}
            index={index}
            countOffset={countOffset}
            light={(index + 1) % 2 === 0}
            english={item.english?.join(", ")}
            kana={item.rubyText?.[0] || item.word}
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
              {item.example_sentences && item.example_sentences.length > 0 && (
                <>
                  <h3 className="mt-6 font-bold">Example Sentences</h3>
                  <ul className="ml-6 list-disc">
                    {item.example_sentences.map((sentence, idx) => (
                      <li key={idx} className="space-y-6">
                        <span className="font-japanese text-xl">
                          {sentence}
                        </span>
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
