import { Button } from "@/components/ui/button"
import { ButtonBar, ChapterBoxes, TopWindow } from "@/features/learn-page"
import ScrollProgressWrapper from "@/features/learn-page/components/ScrollProgressWrapper"

export default function Learn({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* Top Window */}
      {children}
      {/* Rest of Content */}
      <ScrollProgressWrapper>
        <div className="relative z-40 overflow-hidden bg-background/[100%] pb-12">
          <ButtonBar />
          <div className="flex justify-center">
            <div className="w-[60%]">
              {/* Tips box */}
              <div className="my-6 mt-24 flex h-28 w-full items-center justify-center rounded-md border bg-card px-8 saturate-50">
                Visit the resources page to find helpful tools and materials to
                aid in your learning journey.
              </div>
              {/* Stats */}
              <div className="mb-12 mt-20 flex items-end justify-between">
                <h3 className="text-4xl">Today's progress: 60%</h3>
                <Button className="px-6 py-4 text-base">Continue</Button>
              </div>
              {/* Lessons */}
              <ChapterBoxes />
            </div>
          </div>
        </div>
      </ScrollProgressWrapper>
    </main>
  )
}
