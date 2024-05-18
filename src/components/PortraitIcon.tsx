import CustomImage from "./CustomImage"
import { twMerge } from "tailwind-merge"

type PortraitIconProps = {
  image: string
  className?: string
}

export default function PortraitIcon({ image, className }: PortraitIconProps) {
  return (
    <div
      className={twMerge(
        `relative h-[3rem] w-[3rem] float-start mt-1 mr-3 bg-muted rounded-full border-2 border-black overflow-hidden flex justify-center items-center text-4xl`,
        className
      )}
    >
      <CustomImage image={image} />
    </div>
  )
}
