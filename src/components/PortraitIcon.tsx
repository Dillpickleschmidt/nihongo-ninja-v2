import CustomImage from "./CustomImage"
import { twMerge } from "tailwind-merge"

type PortraitIconProps = {
  src: string
  className?: string
}

export default function PortraitIcon({ src, className }: PortraitIconProps) {
  return (
    <div
      className={twMerge(
        `relative float-start mr-3 mt-1 flex h-[3rem] w-[3rem] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-muted text-4xl`,
        className,
      )}
    >
      <CustomImage src={src} alt="portrait icon" />
    </div>
  )
}
