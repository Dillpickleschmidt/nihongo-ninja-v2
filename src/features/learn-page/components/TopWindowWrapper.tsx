import { LazyMotion } from "framer-motion"
import TopWindowBackground from "./TopWindowBackground"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"

export default function TopWindowWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed top-0 h-full w-full">
      <TopWindowBackground>
        {/* Blur background */}
        <div className="absolute z-10 h-full w-full backdrop-blur-2xl dark:backdrop-brightness-[65%]">
          <LazyMotion features={loadMotionFeatures} strict>
            {children}
          </LazyMotion>
        </div>
      </TopWindowBackground>
    </div>
  )
}
