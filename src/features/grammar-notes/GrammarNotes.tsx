"use client"
import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import CustomImage from "@/components/CustomImage"
import PrintButton from "../content-box/components/PrintButton"
import { inter, japanese, honk } from "@/utils/fonts"

type GridItem = {
  title: React.ReactNode
  content: React.ReactNode
  imgSrc?: string
}

type GrammarNotesProps = {
  gridCols?: number
  items: GridItem[]
}

export default function GrammarNotes({
  gridCols = 4,
  items,
}: GrammarNotesProps) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="w-full justify-center">
      <div>
        <div
          className={`grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4`}
        >
          {items.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-[500px]">
                <h2 className="mb-4 text-center text-3xl font-semibold">
                  {item.title}
                </h2>
                <AspectRatio ratio={1 / 1.414}>
                  <Dialog>
                    <DialogTrigger className="h-full w-full">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-background-secondary text-primary-foreground shadow-md duration-200 ease-in-out hover:scale-[0.995] hover:opacity-95 dark:shadow-none">
                        {item.imgSrc && (
                          <CustomImage
                            src={item.imgSrc}
                            alt=""
                            sizes="700px"
                            priority
                          />
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-h-screen max-w-[700px]">
                      <ScrollArea className="rounded-lg">
                        <AspectRatio
                          ref={contentRef}
                          ratio={1 / 1.414}
                          className={`${inter} ${japanese} ${honk} overflow-hidden print:p-6`}
                        >
                          <div className="fixed right-7 top-6 z-50 print:relative">
                            <PrintButton
                              contentRef={contentRef}
                              className="text-black hover:bg-background/25 hover:text-black/50"
                              zoom
                            />
                          </div>
                          {item.content}
                        </AspectRatio>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </AspectRatio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
