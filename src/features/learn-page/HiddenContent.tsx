import { Button } from "@/components/ui/button"
import { ChapterBoxes } from "./ChapterBoxes"
import ButtonBarGroup from "./components/ButtonBar/ButtonBarGroup"

export default function HiddenContent() {
  return (
    <div className="relative z-40 w-full overflow-hidden bg-background/[100%] pb-12">
      <ButtonBarGroup />
      <div className="flex justify-center">
        <div className="w-[75%] sm:w-[67%] xl:w-[60%]">
          <div className="my-6 mt-24 flex h-28 w-full items-center justify-center rounded-md border bg-card px-8 saturate-50">
            Visit the resources page to find helpful tools and materials to aid
            in your learning journey.
          </div>
          <div className="mb-12 mt-20 flex items-end justify-between">
            <h3 className="text-4xl">Today's progress: %</h3>
            <Button className="px-6 py-4 text-base">Continue</Button>
          </div>
          <ChapterBoxes />
        </div>
      </div>
    </div>
  )
}
