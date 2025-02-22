"use client"
import React from "react"
import { PiFilePdf } from "react-icons/pi"
import { useReactToPrint } from "react-to-print"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils/cn"

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>
  className?: string
  zoom?: boolean
  scale?: number
  buttonSize?: number
}

export default function PrintButton({
  contentRef,
  className,
  zoom,
  scale,
  buttonSize,
}: PrintButtonProps) {
  const pageStyle = zoom
    ? `
      @page {
        margin: 0;
      }
      @media print {
        html, body {
          zoom: 105%;
        }
      }
      `
    : scale
      ? `
      @page {
        margin: 0;
      }
      @media print {
        html, body {
          zoom: ${scale}%;
        }
      }
      body {
        -webkit-print-color-adjust: exact;
      }
      `
      : undefined

  const handlePrint = useReactToPrint({
    contentRef: contentRef,
    pageStyle: pageStyle,
    preserveAfterPrint: true,
  })

  return (
    <Button
      title="Be sure to ENABLE BACKGROUND GRAPHICS in print dialog or it will look bad!! (usually under 'More settings')"
      onClick={() => handlePrint()}
      variant="ghost"
      className={cn("h-10 w-10 !p-0 print:hidden", className)}
    >
      <PiFilePdf size={buttonSize ? buttonSize : 26} className="opacity-25" />
    </Button>
  )
}
