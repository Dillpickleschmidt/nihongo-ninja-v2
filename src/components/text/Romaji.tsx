import { twMerge } from "tailwind-merge"

type RomajiProps = {
  children: React.ReactNode
  romaji: string
  textShadow?: string
  className?: string
}

export default function Romaji({
  children,
  romaji,
  textShadow,
  className,
}: RomajiProps) {
  return (
    <span
      className="font-japanese block"
      style={{
        textShadow: textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
      }}
    >
      {children}
      <p
        className={twMerge("text-base pt-0 text-center", className)}
        style={{
          textShadow: textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}
      >
        {romaji}
      </p>
    </span>
  )
}
