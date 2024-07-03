"use client"
import React from "react"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { cva } from "class-variance-authority"
import ScrollableContent from "./components/ScrollableContent"
import FixedElements from "./components/FixedElements"
import BackgroundImage from "./components/BackgroundImage"
import ProgressBar from "./components/ProgressBar"
import NextButton from "./components/NextButton"
import { useContentBoxLogic } from "./hooks/useContentBoxLogic"

type ContentBoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dialogVariants> & {
    children: React.ReactNode
    nextPageLink: string
    nextButton?: React.ReactNode
    showProgressBar?: boolean
    backgroundImage?: string
    backgroundImageSize?: string
    backgroundImageOpacity?: number
    showAlertOnClose?: boolean
    fixedElements?: React.ReactNode
    jpdbDeckName?: string
    jpdbVocab?: number[][]
  }

export default function ContentBox({
  children,
  variant,
  color,
  className,
  nextPageLink,
  nextButton,
  showProgressBar = true,
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
  fixedElements,
  jpdbDeckName,
  jpdbVocab,
}: ContentBoxProps) {
  const {
    contentScrollRef,
    bottomReached,
    scaleX,
    isHiddenContentVisible,
    handleGlobalScroll,
  } = useContentBoxLogic(jpdbDeckName, jpdbVocab)

  return (
    <div>
      <div
        className={cn(dialogVariants({ variant, color, className }))}
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
      >
        <ScrollableContent
          ref={contentScrollRef}
          isHiddenContentVisible={isHiddenContentVisible}
        >
          <div className="relative min-h-full">
            <BackgroundImage
              backgroundImage={backgroundImage}
              backgroundImageSize={backgroundImageSize}
              backgroundImageOpacity={backgroundImageOpacity}
            />
            {showProgressBar && <ProgressBar scaleX={scaleX} />}
            {children}
            <NextButton nextButton={nextButton} nextPageLink={nextPageLink} />
          </div>
        </ScrollableContent>
        <FixedElements>{fixedElements}</FixedElements>
      </div>
    </div>
  )
}

const dialogVariants = cva(
  "relative w-full h-full border-black rounded-none shadow-xl overflow-hidden",
  {
    variants: {
      variant: {
        fullscreen: "w-full h-full rounded-none border-none",
        xl: "2xl:w-[1550px] 2xl:h-[95%] 2xl:rounded-[50px] 2xl:border-[4px]",
        lg: "xl:w-[1370px] w-full xl:h-[80%] xl:rounded-[50px] xl:border-[4px] xl:border-y-[4px]",
        reading:
          "lg:w-[815px] md:w-[98%] w-full md:h-[99%] 2xl:rounded-[50px] md:rounded-[30px] md:border-[4px]",
        md: "md:w-[685px] w-full md:h-[930px] h-full md:rounded-[50px] md:border-[3px]",
        sm: "sm:w-[600px] w-full sm:h-[820px] h-full sm:rounded-[50px] sm:border-[3px]",
      },
      color: {
        default: "bg-background",
        light: "bg-background-secondary text-foreground-secondary",
      },
    },
    defaultVariants: {
      variant: "reading",
      color: "default",
    },
  },
)
