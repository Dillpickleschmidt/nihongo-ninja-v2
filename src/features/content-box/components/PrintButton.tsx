"use client"
import React from "react"
import { PiFilePdf } from "react-icons/pi"
import { useReactToPrint, UseReactToPrintFn } from "react-to-print"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils/cn"

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>
  className?: string
  zoom?: boolean
}

export default function PrintButton({
  contentRef,
  className,
  zoom,
}: PrintButtonProps) {
  let handlePrint: UseReactToPrintFn
  if (zoom) {
    handlePrint = useReactToPrint({
      contentRef: contentRef,
      pageStyle: `
      @page {
        margin: 0;
      }
      @media print {
        html, body {
          zoom: 110%;
        }
      }
      `,
    })
  } else {
    handlePrint = useReactToPrint({
      contentRef: contentRef,
    })
  }

  return (
    <Button
      title="Be sure to ENABLE BACKGROUND GRAPHICS in print dialog or it will look bad!! (usually under 'More settings')"
      onClick={() => handlePrint()}
      variant="ghost"
      className={cn("h-10 w-10 !p-0 print:hidden", className)}
    >
      <PiFilePdf size={26} className="opacity-25" />
    </Button>
  )
}
