import { Button } from "@/components/ui/button"
import ButtonBarGroup, { ChapterBoxes } from "@/features/learn-page"
import { TopWindowContextProvider } from "@/features/learn-page/context/TopWindowContextProvider"
import TopWindowSizer from "@/features/learn-page/components/TopWindowSizer"
import TopWindow from "@/features/learn-page/components/TopWindow"

export default function Learn({ children }: { children: React.ReactNode }) {
  return (
    <TopWindowContextProvider>
      <main className="pb-12">
        {/* Top Window */}
        <TopWindowSizer>
          <TopWindow>{children}</TopWindow>
        </TopWindowSizer>
        <div className="overflow-hidden z-40 bg-background/[100%]">
          <ButtonBarGroup />
          {/* Rest of Content */}
          <div className="flex justify-center">
            <div className="w-[60%]">
              {/* Tips box */}
              <div className="w-full h-28 mt-24 px-8 bg-card saturate-50 my-6 flex justify-center items-center rounded-md border">
                Visit the resources page to find helpful tools and resources to
                aid in your learning journey.
              </div>
              {/* Stats */}
              <div className="flex justify-between items-end mt-20 mb-12">
                <h3 className="text-4xl">Today's progress: 60%</h3>
                <Button className="text-base px-6 py-4">Continue</Button>
              </div>
              {/* Lessons */}
              <ChapterBoxes />
            </div>
          </div>
        </div>
      </main>
    </TopWindowContextProvider>
  )
}
