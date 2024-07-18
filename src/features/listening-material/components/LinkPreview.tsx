import CustomImage from "@/components/CustomImage"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from "next/link"

type LinkComponentProps = {
  title: string
  href: string
  src: string
  alt: string
  external?: boolean
}

export default function LinkPreview({
  title,
  href,
  src,
  alt,
  external = false,
}: LinkComponentProps) {
  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-semibold">{title}</h2>
      {external ? (
        <a
          target="_blank"
          href={href}
          className="overflow-hidden rounded-md duration-200 hover:scale-[0.99] hover:opacity-85"
        >
          <AspectRatio ratio={3 / 2}>
            <CustomImage src={src} alt={alt} />
          </AspectRatio>
        </a>
      ) : (
        <Link
          href={href}
          className="overflow-hidden rounded-md duration-200 hover:scale-[0.99] hover:opacity-85"
        >
          <AspectRatio ratio={3 / 2}>
            <CustomImage src={src} alt={alt} />
          </AspectRatio>
        </Link>
      )}
    </div>
  )
}
