import Image from "next/image"
import { twMerge } from "tailwind-merge"

type CustomImageProps = {
  children?: React.ReactNode
  image: string
  priority?: boolean
  className?: string
  hoverZoom?: boolean
}

export default function CustomImage({
  children,
  image,
  priority = false,
  className,
  hoverZoom = false,
}: CustomImageProps) {
  return (
    <div className={twMerge(`absolute h-full w-full`, className)}>
      <Image
        src={image}
        fill={true}
        alt="cover image"
        className="h-full object-cover"
        priority={priority}
      />
      {children}
    </div>
  )
}
