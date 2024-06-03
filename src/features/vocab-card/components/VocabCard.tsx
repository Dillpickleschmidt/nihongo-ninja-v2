import VocabVideo from "./video/VocabVideo"

type VocabCardProps = {
  children: React.ReactNode
  index: number
  kana?: string
  english?: string
  light?: boolean
}

export default function VocabCard({
  children,
  index,
  kana,
  english,
  light = false,
}: VocabCardProps) {
  return (
    <div
      className={`relative rounded-[30px] text-black shadow-md dark:shadow-lg dark:shadow-black ${
        light ? "bg-[#f7f0dd]" : "bg-[#f7e2c4]"
      }`}
    >
      <VocabVideo index={index} />
      <div className="min-h-48 px-16 py-12">
        <h3 className="mb-4 font-japanese text-2xl font-bold">
          {/* Number */}
          <span className="font-japanese text-[1.375rem]">
            {`${index + 1}.`}{" "}
          </span>
          {/* Furigana */}
          <span
            dangerouslySetInnerHTML={{ __html: kana ?? "" }}
            className="text-2xl"
          ></span>{" "}
          - <span className="font-japanese text-[1.375rem]">{english}</span>
        </h3>
        {children}
      </div>
    </div>
  )
}
