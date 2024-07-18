import Script from "next/script"

type KikusasaizuProps = {
  src: string
}

export default function Kikusasaizu({ src }: KikusasaizuProps) {
  return (
    <div>
      <iframe
        src={src}
        allowFullScreen
        title="L3-1 Summary"
        className="aspect-video w-full"
      />
      <Script src="https://h5p.cee.sfu.ca/sites/all/modules/h5p/library/js/h5p-resizer.js" />
    </div>
  )
}
