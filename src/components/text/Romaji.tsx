import { twMerge } from "tailwind-merge"

type RomajiProps = {
  children: React.ReactNode
  romaji: string
  className?: string
  textShadow?: string
}

export default function Romaji({
  children,
  romaji,
  className,
  textShadow,
}: RomajiProps) {
  return (
    <div className="inline-flex">
      <span
        className="block font-japanese"
        style={{
          textShadow: textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}
      >
        {children}
        <p
          className={twMerge("pt-0 text-center text-base", className)}
          style={{
            textShadow: textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        >
          {romaji}
        </p>
      </span>
    </div>
  )
}
