import Image from "next/image"
import Link from "next/link"
import Dialog from "@/components/Dialog"
import { Button } from "@/components/ui/button"

export default function Learn({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* Image */}
      <div className="w-full h-screen saturate-75 opacity-75">
        <Link href="/learn/chapter-1/welcome">
          <div className="relative h-full bg-background">
            <Image
              src="/img/japanese-gate.png"
              fill={true}
              alt="cover image"
              className="h-full object-cover"
            />
            {/* Vignette */}
            <div className="absolute w-full h-full bg-[radial-gradient(50%_120%_at_50%_50%,rgba(0,0,0,0.0)_30%,rgba(0,0,0,0.3)_100%)]"></div>
          </div>
        </Link>
      </div>
      <Dialog variant="homepage" className="bg-transparent relative">
        {/* Top gray bar */}
        {/* <div className="fixed w-full mt-[-10px] z-10 h-8 bg-[#2d2d2d]/90 backdrop-blur-xl shadow-md"></div> */}
        {/* Top Image */}
        <div className="z-[-1] w-full h-[280px] bg-background hover:scale-[102%] ease-in-out duration-300">
          <Link href="/learn/chapter-1/welcome">
            <div className="relative h-full bg-background">
              <Image
                src="/img/japanese-gate.png"
                fill={true}
                alt="cover image"
                className="h-full object-cover"
              />
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
            </div>
          </Link>
        </div>
        {/* <div className="h-[280px]"></div> */}
        <div className="overflow-hidden z-40 bg-background/[100%]">
          {/* Tabs */}
          <div className="flex justify-center my-[-60px]">
            <ul
              className="mt-[-80px] w-[95%] lg:w-[86%] xl:w-[82%] 2xl:w-[80%] grid grid-cols-4 h-[200px] xl:gap-9 gap-4
            [&>*]:rounded-xl [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50"
            >
              <a href="https://jpdb.io" className="bg-red-700"></a>
              <Link href="/learn/" className="bg-cyan-500"></Link>
              <Link href="/learn/" className="bg-yellow-500"></Link>
              <Link href="/learn/" className="bg-purple-500"></Link>
            </ul>
          </div>
          {/* Button Bar */}
          <div className="z-10 flex justify-center h-10 bg-[#2d2d2d]/80 backdrop-blur-xl">
            <ul className="text-base w-full h-full max-w-[95%] lg:max-w-[86%] xl:max-w-[82%] 2xl:max-w-[80%] flex justify-around items-center opacity-30">
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                CARDS
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                RESOURCES
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                PROGRESS
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                READER
              </p>
            </ul>
          </div>
          {/* Rest of Content */}
          <div className="flex justify-center">
            <div className="w-[60%]">
              <div className="flex justify-between items-end mt-28 mb-12">
                <h3 className="text-4xl">Today's progress: 60%</h3>
                <Button className="text-md px-6 py-4">Continue</Button>
              </div>
              <div className="w-full h-28 bg-red-700 saturate-50 my-6 flex justify-center items-center text-4xl font-medium rounded-md">
                <div className="px-12 py-4 bg-background/90 shadow-inner rounded-md border">
                  Chapter 1
                </div>
              </div>
              <div
                className="w-full grid grid-cols-3 gap-y-6 gap-x-6
            [&>*]:text-base [&>*]:px-7 [&>*]:py-6 [&>*]:shadow-lg [&>*]:rounded-sm [&>*]:bg-card [&>*]:border [&>*]:text-muted-foreground [&>*]:justify-between"
              >
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
              </div>
              <div className="w-full h-28 bg-sky-600 saturate-50 my-6 flex justify-center items-center text-4xl font-medium rounded-md">
                <div className="px-12 py-4 bg-background/90 shadow-inner rounded-md border">
                  Chapter 2
                </div>
              </div>
              <div
                className="w-full grid grid-cols-3 gap-y-6 gap-x-6
            [&>*]:text-base [&>*]:px-7 [&>*]:py-6 [&>*]:shadow-lg [&>*]:rounded-sm [&>*]:bg-card [&>*]:border [&>*]:text-muted-foreground [&>*]:justify-between"
              >
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
              </div>
              <div className="w-full h-28 bg-green-600 saturate-50 my-6 flex justify-center items-center text-4xl font-medium rounded-md">
                <div className="px-12 py-4 bg-background/90 shadow-inner rounded-md border">
                  Chapter 3
                </div>
              </div>
              <div
                className="w-full grid grid-cols-3 gap-y-6 gap-x-6
                [&>*]:text-base [&>*]:px-7 [&>*]:py-6 [&>*]:shadow-lg [&>*]:rounded-sm [&>*]:bg-card [&>*]:border [&>*]:text-muted-foreground [&>*]:justify-between"
              >
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
              </div>
            </div>
          </div>
        </div>
        {children}
      </Dialog>
    </main>
  )
}
