import Image from "next/image"

type CustomImageProps = {
  children?: React.ReactNode
  image: string
}

export default function CustomImage({ children, image }: CustomImageProps) {
  return (
    <div className="absolute h-full w-full bg-background hover:scale-[102%] ease-in-out duration-300">
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
