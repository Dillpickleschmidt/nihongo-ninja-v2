import CustomImage from "@/components/CustomImage"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ButtonBarGroup, { ChapterBoxes } from "@/features/learn-page"

export default function Learn({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-12">
      {/* Top Image */}
      <div className="z-[-1] w-full h-[280px] mt-16 bg-background hover:scale-[102%] ease-in-out duration-300">
        <Link href="/learn/chapter-1/welcome">
          <CustomImage image="/img/japanese-gate.png">
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
      </div>
      <div className="overflow-hidden z-40 bg-background/[100%]">
        <ButtonBarGroup />
        {/* Rest of Content */}
        <div className="flex justify-center">
          <div className="w-[60%]">
            {/* Tips box */}
            <div className="w-full h-28 mt-16 px-8 bg-card saturate-50 my-6 flex justify-center items-center rounded-md border">
              Visit the resources page to find helpful tools and resources to
              aid in your learning journey.
            </div>
            {/* Stats */}
            <div className="flex justify-between items-end mt-28 mb-12">
              <h3 className="text-4xl">Today's progress: 60%</h3>
              <Button className="text-base px-6 py-4">Continue</Button>
            </div>
            {/* Lessons */}
            <ChapterBoxes />
          </div>
        </div>
      </div>
      {children}
    </main>
  )
}
