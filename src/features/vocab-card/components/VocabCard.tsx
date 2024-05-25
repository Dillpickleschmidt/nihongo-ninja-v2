import VocabVideo from "./video/VocabVideo"

type VocabCardProps = {
  children: React.ReactNode
  index: number
  title?: React.ReactNode
  kana?: string
  english?: string
  pronunciation?: string
  light?: boolean
}

export default function VocabCard({
  children,
  index,
  title,
  kana,
  english,
  pronunciation,
  light = false,
}: VocabCardProps) {
  return (
    <div
      className={`relative rounded-[30px] text-black shadow-lg shadow-black ${
        light ? "bg-[#f7f0dd]" : "bg-[#f7e2c4]"
      }`}
    >
      <VocabVideo index={index} />
      <div className="min-h-48 py-12 px-16">
        <h3 className="font-bold font-japanese text-2xl">
          {/* Number */}
          <span className="text-[1.375rem] font-japanese">
            {`${index + 1}.`}{" "}
          </span>
          {/* Furigana */}
          <span
            dangerouslySetInnerHTML={{ __html: kana ?? "" }}
            className="text-2xl"
          ></span>{" "}
          - <span className="text-[1.375rem] font-japanese">{english}</span>
        </h3>
        {children}
      </div>
    </div>
  )
}
