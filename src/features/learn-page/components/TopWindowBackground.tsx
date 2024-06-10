import Link from "next/link"
import CustomImage from "@/components/CustomImage"

export default function TopWindowBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Link href="/learn/chapter-1/welcome">
        <CustomImage
          src="/img/japanese-gate.png"
          alt="Japanese gate homescreen image"
          priority={true}
          className="bg-background duration-300 ease-in-out hover:scale-[101%]"
        >
          {/* Vignette */}
          <div className="absolute h-full w-full bg-[radial-gradient(50%_120%_at_50%_50%,rgba(0,0,0,0.0)_30%,rgba(0,0,0,0.2)_100%)]"></div>
          <div
            className="absolute flex h-full w-full items-center justify-center"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h1 className="text-6xl text-white lg:text-[5rem]">
              NIHONGO NINJA
            </h1>
          </div>
        </CustomImage>
      </Link>
    </>
  )
}
