"use client"

import { useRef } from "react"
import HiddenContent from "@/features/learn-page/HiddenContent"
import { useGlobalContext } from "@/context/GlobalContext"
import { Button } from "@/components/ui/button"
import CustomImage from "@/components/CustomImage"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const mainContentRef = useRef<HTMLDivElement>(null)
  const hiddenContentRef = useRef<HTMLDivElement>(null)
  const { isHiddenContentVisible, setHiddenContentVisible } = useGlobalContext()

  return (
    <div>
      <div
        ref={mainContentRef}
        className={`${isHiddenContentVisible ? "locked" : ""}`}
      >
        <div className="relative z-[-1] h-screen w-screen">
          <CustomImage
            src="/img/japanese-gate.png"
            alt="Japanese gate homescreen image"
            priority={true}
            className="bg-background blur-2xl brightness-[60%]"
          />
        </div>
        {children}
      </div>
      <div
        ref={hiddenContentRef}
        className={`fixed left-0 z-40 h-[100vh] w-full overflow-y-scroll bg-white duration-300 ease-in-out ${isHiddenContentVisible ? "visible bottom-[-50%]" : "bottom-[-100%]"}`}
      >
        <HiddenContent />
      </div>
      <Button
        onClick={() => setHiddenContentVisible(!isHiddenContentVisible)}
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
      >
        Toggle Hidden Content
      </Button>
    </div>
  )
}
