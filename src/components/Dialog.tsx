// Basic template for all lessons with variations for different sizes

import { ReactNode } from "react"
import { Button } from "./ui/button"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { Card } from "./ui/card"
import { CloseDialog } from "@/features/dialog"

type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement> &
  VariantProps<typeof dialogVariants> & {
    children: ReactNode
    backgroundImage?: string
    backgroundImageSize?: string
    backgroundImageOpacity?: number
    showAlertOnClose?: boolean
    scrollRef?: React.MutableRefObject<HTMLDivElement | null> // used to scroll to the top of the dialog
  }

// Dialog is a modal that appears on top of the page
export default function Dialog({
  children,
  variant,
  className,
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
  scrollRef,
}: DialogProps) {
  return (
    <>
      <Card className="fixed inset-0 bg-transparent flex items-center justify-center z-40">
        {/* <CloseDialog showAlertOnClose={showAlertOnClose} /> */}
        {/* Dialog Variants */}
        <div className={cn(dialogVariants({ variant, className }))}>
          {/* Persistent elements in all dialogs */}
          <div
            className="h-full overflow-y-auto overscroll-y-contain scrollbar:hidden"
            ref={scrollRef}
          >
            {/* If a background is provided, render this html */}
            {backgroundImage ? (
              <div className="relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: backgroundImageSize, // Change this value to scale your background image
                    backgroundBlendMode: "multiply",
                    opacity: backgroundImageOpacity / 100, // Change this value to set the opacity of the background image
                    zIndex: -1,
                  }}
                />
                {children}
              </div>
            ) : (
              // Otherwise, just render this html
              children
            )}
          </div>
        </div>
      </Card>
    </>
  )
}

const dialogVariants = cva(
  "fixed rounded-[60px] border-4 border-black bg-background text-xl text-[#F8F5E9] overflow-hidden mt-[127px] pb-[63.5px]",
  {
    variants: {
      variant: {
        homepage: "w-[100%] h-full rounded-none border-none",
        reading: "w-[45%] h-[98%] border-4 leading-8",
      },
    },
    defaultVariants: {
      variant: "reading",
    },
  }
)
