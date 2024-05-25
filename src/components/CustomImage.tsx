import Image, { ImageProps } from "next/image"
import { twMerge } from "tailwind-merge"

type CustomImageProps = ImageProps & {
  hoverZoom?: boolean
}

export default function CustomImage({
  children,
  src,
  sizes,
  priority = false,
  className,
  hoverZoom = false,
}: CustomImageProps) {
  return (
    <div className={twMerge(`absolute h-full w-full`, className)}>
      <Image
        src={src}
        fill={true}
        sizes={sizes}
        alt="cover image"
        className="h-full object-cover"
        priority={priority}
      />
      {children}
    </div>
  )
}
