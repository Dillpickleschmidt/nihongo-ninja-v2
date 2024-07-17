import "server-only"

import TopWindowBackground from "@/features/learn-page/components/TopWindowBackground"
import HiddenContent from "@/features/learn-page/HiddenContent"

export default function page() {
  return (
    <>
      {/* Push other elements below */}
      <div className="h-[65px] w-full bg-background"></div>
      <div className="relative h-[180px] w-full bg-background md:h-[240px] lg:h-[380px]">
        <TopWindowBackground>
          <div></div>
        </TopWindowBackground>
      </div>
      <div>
        <HiddenContent />
      </div>
    </>
  )
}
