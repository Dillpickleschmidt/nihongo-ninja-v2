"use client"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import PrintButton from "@/features/content-box/components/PrintButton"
import { useRef } from "react"

export default function Page() {
  const printRef = useRef<HTMLDivElement>(null)

  return (
    <div className="print:bg-white">
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <div className="min-h-screen px-12 pb-28 pt-24 sm:px-16 md:px-24">
        <AspectRatio
          ref={printRef}
          ratio={8.5 / 11}
          className="relative flex w-full flex-col items-center border-2 border-card bg-background p-20 font-japanese print:bg-white print:text-black"
        >
          <div className="absolute bottom-8 right-4 flex items-end font-inter">
            <h2 className="mb-1 mr-2 font-bold italic text-card-foreground print:hidden">
              CLICK TO PRINT {"->"}
            </h2>
            <PrintButton contentRef={printRef} scale={72} buttonSize={32} />
          </div>
          <div className="flex items-end">
            <Input
              type="text"
              className="w-48 pr-0 text-right text-3xl font-bold print:border-none print:bg-white print:text-black print:placeholder:text-white"
              placeholder="Class Name"
            />
            <h1 className="mb-2 text-3xl font-bold">漢字練習シート</h1>
          </div>
          <div className="mt-16 w-full">
            <div className="flex items-end space-x-4 text-[1.6rem] font-bold tracking-tight">
              <h2 className="mb-2">Lesson:</h2>
              <Input
                type="text"
                className="w-20 text-[1.6rem] print:border-none print:bg-white print:text-black"
              />
              <h2 className="mb-2">Section:</h2>
              <Input
                type="text"
                className="w-20 text-[1.6rem] print:border-none print:bg-white print:text-black"
              />
              <h2 className="mb-2">名前:</h2>
              <Input
                type="text"
                className="w-[600px] text-[1.6rem] print:border-none print:bg-white print:text-black"
              />
            </div>
          </div>
          <table className="mt-2 w-full border-collapse border border-neutral-500 p-16 print:border-none print:border-black">
            <thead
              className="font-normal text-white"
              style={{ backgroundColor: "rgb(14 165 233)" }}
            >
              <tr>
                <th className="border border-neutral-500 text-2xl print:border-black">
                  漢字
                </th>
                <th className="border border-neutral-500 text-2xl print:border-black">
                  意味
                </th>
                <th className="border border-neutral-500 text-2xl print:border-black">
                  <div className="flex justify-center">
                    <span className="flex w-1/2 items-center border-r border-dashed border-neutral-500 p-1 text-center print:border-black">
                      読み
                    </span>
                    <div className="flex w-1/2 flex-col">
                      <span className="border-b border-dashed border-neutral-500 p-1 print:border-black">
                        くん
                      </span>
                      <span className="p-1">オン</span>
                    </div>
                  </div>
                </th>
                <th className="border border-neutral-500 text-2xl print:border-black">
                  単語
                </th>
                <th className="border border-neutral-500 text-2xl print:border-black">
                  例文
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="relative h-12 w-40 border border-neutral-500 print:border-black">
                  <div className="pointer-events-none absolute inset-0 z-10 flex select-none">
                    <div className="h-1/2 w-1/2">
                      <div className="h-full w-full border-collapse border-b border-r border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                      <div className="h-full w-full border-collapse border-r border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                    </div>
                    <div className="h-1/2 w-1/2">
                      <div className="h-full w-full border-collapse border-b border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                      <div className="h-full w-full" />
                    </div>
                  </div>
                  <Input
                    className="rounded-none border-none bg-opacity-0 bg-none text-center text-8xl backdrop-opacity-0 placeholder:opacity-25 backdrop:opacity-0 print:bg-white print:text-black"
                    placeholder="字"
                  />
                </td>
                <td className="w-36 border border-neutral-500 print:border-black">
                  <textarea className="h-36 resize-none bg-background px-3 py-2 print:bg-white" />
                </td>
                <td className="w-32 border border-neutral-500 print:border-black">
                  <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                  </div>
                  <div className="w-full">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                  </div>
                </td>
                <td className="border border-neutral-500 print:border-black">
                  <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                  </div>
                  <div className="w-full">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                  </div>
                </td>
                <td className="w-1/2 border border-neutral-500 print:border-black">
                  <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 print:bg-white" />
                  </div>
                  <div className="w-full">
                    <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 print:bg-white" />
                  </div>
                </td>
              </tr>

              {/* Other rows */}
              {[...Array(9)].map((_, index) => (
                <tr key={index}>
                  <td className="relative h-12 w-40 border border-neutral-500 print:border-black">
                    <div className="pointer-events-none absolute inset-0 z-10 flex select-none">
                      <div className="h-1/2 w-1/2">
                        <div className="h-full w-full border-collapse border-b border-r border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                        <div className="h-full w-full border-collapse border-r border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                      </div>
                      <div className="h-1/2 w-1/2">
                        <div className="h-full w-full border-collapse border-b border-dashed border-neutral-500/35 print:border-neutral-500/25" />
                        <div className="h-full w-full" />
                      </div>
                    </div>
                    <Input className="rounded-none border-none bg-opacity-0 bg-none text-center text-8xl print:bg-white print:text-black" />
                  </td>
                  <td className="w-36 border border-neutral-500 print:border-black">
                    <textarea className="h-36 resize-none bg-background px-3 py-2 print:bg-white" />
                  </td>
                  <td className="w-32 border border-neutral-500 print:border-black">
                    <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                    </div>
                    <div className="w-full">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                    </div>
                  </td>
                  <td className="border border-neutral-500 print:border-black">
                    <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                    </div>
                    <div className="w-full">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 leading-6 print:bg-white" />
                    </div>
                  </td>
                  <td className="w-1/2 border border-neutral-500 print:border-black">
                    <div className="w-full border-b-2 border-dashed border-neutral-500 print:border-black">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 print:bg-white" />
                    </div>
                    <div className="w-full">
                      <textarea className="h-full min-h-[4.5rem] w-full resize-none overflow-hidden bg-background px-3 py-2 print:bg-white" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AspectRatio>
      </div>
    </div>
  )
}
