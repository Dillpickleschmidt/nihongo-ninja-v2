import { Button } from "@/components/ui/button"
import { ChapterBoxes } from "./ChapterBoxes"
import ButtonBarGroup from "./components/ButtonBar/ButtonBarGroup"

export default function HiddenContent() {
  return (
    <div className="relative z-40 w-full overflow-hidden bg-background/[100%]">
      <div className="pb-24">
        <ButtonBarGroup />
        <div className="flex justify-center">
          <div className="w-[75%] sm:w-[67%] xl:w-[60%]">
            <div className="my-6 mt-24 flex h-28 w-full items-center justify-center rounded-md border bg-card px-8 saturate-50">
              Visit the resources page to find helpful tools and materials to
              aid in your learning journey.
            </div>
            <div className="mb-12 mt-20 flex items-end justify-between">
              <h3 className="text-4xl">Today's progress: %</h3>
              <Button className="px-6 py-4 text-base">Continue</Button>
            </div>
            <ChapterBoxes />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex h-48 w-[78%] flex-col justify-center rounded-t-lg bg-card text-base font-extralight text-muted-foreground sm:w-[70%] xl:w-[63%]">
          <p className="px-24">
            Disclaimer: Content on this site is supplementary and not approved
            by GENKI or other textbook publishers/authors. Nihongo Ninja is not
            affiliated with linked YouTube channels or websites.
          </p>
          <p className="mt-3 text-center">© 2024 Nihongo Ninja</p>
        </div>
      </div>
    </div>
  )
}
