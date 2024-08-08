import "server-only"

import HiddenContent from "@/features/learn-page/HiddenContent"
import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import CustomImage from "@/components/CustomImage"

export default function page() {
  return (
    <>
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={4}
      />
      <BackgroundImage
        backgroundImage="/img/dots.svg"
        backgroundImageSize="400px"
        backgroundImageOpacity={3}
      />
      {/* Background Image */}
      <div className="absolute z-[-1] w-full min-w-[800px]">
        <AspectRatio ratio={16 / 9}>
          <CustomImage
            src="/img/japanese-gate.png"
            alt="Japanese gate homescreen image"
            priority={true}
            className="gradient-mask-b-[transparent,rgba(0,0,0,1)_0%,rgba(0,0,0,0.0)_73%] opacity-5"
          />
        </AspectRatio>
      </div>
      <div className="px-10 pt-40 text-center text-7xl font-medium italic text-muted-foreground">
        Nihongo Ninja
      </div>
      <HiddenContent />
    </>
  )
}
