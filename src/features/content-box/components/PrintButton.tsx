"use client"
import React from "react"
import { PiFilePdf } from "react-icons/pi"
import { useReactToPrint } from "react-to-print"
import { Button } from "@/components/ui/button"

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>
}

export default function PrintButton({ contentRef }: PrintButtonProps) {
  const handlePrint = useReactToPrint({
    contentRef: contentRef,
  })

  return (
    <div className="fixed right-12 top-3">
      <Button
        title="Be sure to ENABLE BACKGROUND GRAPHICS in print dialog or it will look bad!! (usually under 'More settings')"
        onClick={() => handlePrint()}
        variant="ghost"
        className="h-10 w-10 !p-0"
      >
        <PiFilePdf size={26} className="opacity-25" />
      </Button>
    </div>
  )
}
