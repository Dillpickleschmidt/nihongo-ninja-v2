import "server-only"

import TopWindowBackground from "@/features/learn-page/components/TopWindowBackground"

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[380px] w-full bg-background">
      <TopWindowBackground>{children}</TopWindowBackground>
    </div>
  )
}
