import React from "react"

type ScrollableContentProps = {
  children: React.ReactNode
  isHiddenContentVisible: boolean
}

const ScrollableContent = React.forwardRef<
  HTMLDivElement,
  ScrollableContentProps
>(({ children, isHiddenContentVisible }, ref) => (
  <div
    ref={ref}
    className={`h-full w-full ${
      !isHiddenContentVisible ? "overflow-y-scroll" : "overflow-hidden"
    } scrollbar:hidden`}
  >
    {children}
  </div>
))

ScrollableContent.displayName = "ScrollableContent"

export default ScrollableContent
