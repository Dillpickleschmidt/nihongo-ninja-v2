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
        <CustomImage image="/img/japanese-gate.png" priority={true}>
          {/* Vignette */}
          <div className="absolute w-full h-full bg-[radial-gradient(50%_120%_at_50%_50%,rgba(0,0,0,0.0)_30%,rgba(0,0,0,0.2)_100%)]"></div>
          <div
            className="absolute w-full h-full flex justify-center items-center lg:text-[5.75rem] text-6xl"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h1>NIHONGO NINJA</h1>
          </div>
        </CustomImage>
      </Link>
    </>
  )
}
