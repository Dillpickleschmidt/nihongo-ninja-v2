import CustomImage from "@/components/CustomImage"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { twMerge } from "tailwind-merge"

export default function Learn({ children }: { children: React.ReactNode }) {
  return (
    <main>
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
        <ExpaningTabs />
        <ButtonBar />
        {/* Rest of Content */}
        <div className="flex justify-center">
          <div className="w-[60%]">
            {/* Tips box */}
            <div className="w-full h-28 mt-16 bg-card saturate-50 my-6 flex justify-center items-center rounded-md border">
              Visit the resources page to find helpful tools and resources to
              aid in your learning journey.
            </div>
            {/* Stats */}
            <div className="flex justify-between items-end mt-28 mb-12">
              <h3 className="text-4xl">Today's progress: 60%</h3>
              <Button className="text-base px-6 py-4">Continue</Button>
            </div>
            {/* Lessons */}
            <ChapterBox text="Chapter 1" className="bg-red-700 saturate-50">
              <Button>Unit 1 - Welcome!</Button>
              <Button>Unit 2 - Writing Systems</Button>
              <Button>Unit 3</Button>
              <Button>Unit 4</Button>
              <Button>Unit 5</Button>
              <Button>Unit 6</Button>
              <Button>Unit 7</Button>
              <Button>Unit 8</Button>
              <Button>Unit 9</Button>
              <Button>Unit 10</Button>
            </ChapterBox>
            <ChapterBox text="Chapter 2" className="bg-sky-600 saturate-50">
              <Button>Unit 1</Button>
              <Button>Unit 2</Button>
              <Button>Unit 3</Button>
              <Button>Unit 4</Button>
              <Button>Unit 5</Button>
              <Button>Unit 6</Button>
              <Button>Unit 7</Button>
              <Button>Unit 8</Button>
              <Button>Unit 9</Button>
              <Button>Unit 10</Button>
            </ChapterBox>
            <ChapterBox text="Chapter 3" className="bg-green-600 saturate-50">
              <Button>Unit 1</Button>
              <Button>Unit 2</Button>
              <Button>Unit 3</Button>
              <Button>Unit 4</Button>
              <Button>Unit 5</Button>
              <Button>Unit 6</Button>
              <Button>Unit 7</Button>
              <Button>Unit 8</Button>
              <Button>Unit 9</Button>
              <Button>Unit 10</Button>
            </ChapterBox>
          </div>
        </div>
      </div>
      {children}
    </main>
  )
}

function ExpaningTabs() {
  return (
    <div className="flex justify-center my-[-60px]">
      <ul
        className="mt-[-80px] w-[95%] lg:w-[86%] xl:w-[82%] 2xl:w-[80%] grid grid-cols-4 h-[200px] xl:gap-9 gap-4
            [&>*]:rounded-xl [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50 [&>*]:ease-in-out [&>*]:duration-200"
      >
        <a
          href="https://jpdb.io"
          className="bg-red-700 hover:scale-y-[140%]"
        ></a>
        <Link
          href="/learn/"
          className="bg-cyan-500 hover:scale-y-[140%]"
        ></Link>
        <Link
          href="/learn/"
          className="bg-yellow-500 hover:scale-y-[140%]"
        ></Link>
        <Link
          href="/learn/"
          className="bg-purple-500 hover:scale-y-[140%]"
        ></Link>
      </ul>
    </div>
  )
}

function ButtonBar() {
  return (
    <div className="z-10 flex justify-center h-10 bg-[#2d2d2d]/80 backdrop-blur-xl">
      <ul className="text-base w-full h-full max-w-[95%] lg:max-w-[86%] xl:max-w-[82%] 2xl:max-w-[80%] flex justify-around items-center opacity-30">
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>CARDS</p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
          RESOURCES
        </p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>PROGRESS</p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>TOOLS</p>
      </ul>
    </div>
  )
}

type ChapterBoxProps = {
  children: React.ReactNode
  text: string
  className?: string
}

function ChapterBox({ children, text, className }: ChapterBoxProps) {
  return (
    <>
      <div
        className={twMerge(
          "w-full h-28 my-6 flex justify-center items-center text-3xl font-medium rounded-md",
          className
        )}
      >
        <div className="px-14 py-4 bg-background/90 shadow-inner rounded-lg border">
          {text}
        </div>
      </div>
      <div
        className="w-full grid grid-cols-3 gap-y-6 gap-x-6
            [&>*]:text-base [&>*]:px-7 [&>*]:py-6 [&>*]:shadow-lg [&>*]:rounded-sm [&>*]:bg-card [&>*]:border [&>*]:text-muted-foreground [&>*]:justify-between"
      >
        {children}
      </div>
    </>
  )
}
