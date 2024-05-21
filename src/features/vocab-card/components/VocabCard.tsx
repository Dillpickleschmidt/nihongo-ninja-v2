import VideoWrapper from "@/features/vocab-card/components/VideoWrapper"

type VocabCardProps = {
  children: React.ReactNode
  index: number
  title?: React.ReactNode
  kana?: string
  pronunciation?: string
  light?: boolean
}

export default function VocabCard({
  children,
  index,
  title,
  kana,
  pronunciation,
  light = false,
}: VocabCardProps) {
  return (
    <div
      className={`relative py-12 px-16 rounded-[30px] shadow-lg shadow-black overflow-x-hidden ${
        light ? "bg-[#f7f0dd]" : "bg-[#f7e2c4]"
      }`}
    >
      <h3 className="font-japanese text-2xl font-bold">{title}</h3>
      <div className="pt-4">
        {/* <strong>Kana:</strong> <span className="font-japanese">{kana}</span> */}
        <br />
        {pronunciation && (
          <>
            <strong>Pronunciation:</strong> {pronunciation} <br />
          </>
        )}
        {children}
      </div>
      <VideoWrapper index={index} />
    </div>
  )
}
