import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type CustomAvatarProps = {
  src: string
  alt: string
  className?: string
}

export default function CustomAvatar({
  src,
  alt,
  className,
}: CustomAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  )
}
