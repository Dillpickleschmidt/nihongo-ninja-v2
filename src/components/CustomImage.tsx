import Image from "next/image"

type CustomImageProps = {
  children?: React.ReactNode
  image: string
}

export default function CustomImage({ children, image }: CustomImageProps) {
  return (
    <div className="relative h-full bg-background">
      <Image
        src={image}
        fill={true}
        alt="cover image"
        className="h-full object-cover"
      />
      {children}
    </div>
  )
}
