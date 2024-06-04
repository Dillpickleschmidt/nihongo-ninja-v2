import "server-only"

import TopWindowBackground from "@/features/learn-page/components/TopWindowBackground"

export default function page() {
  return (
    <div className="relative h-[380px] w-full bg-background">
      <TopWindowBackground>
        <div></div>
      </TopWindowBackground>
    </div>
  )
}
