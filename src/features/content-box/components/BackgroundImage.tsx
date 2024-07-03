type BackgroundImageProps = {
  backgroundImage?: string
  backgroundImageSize: string
  backgroundImageOpacity: number
}

export default function BackgroundImage({
  backgroundImage,
  backgroundImageSize,
  backgroundImageOpacity,
}: BackgroundImageProps) {
  if (!backgroundImage) return null

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: backgroundImageSize,
        backgroundBlendMode: "multiply",
        opacity: backgroundImageOpacity / 100,
        zIndex: -1,
      }}
    />
  )
}
