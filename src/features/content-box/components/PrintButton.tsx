import React from "react"
import { Button } from "@/components/ui/button"
import { useReactToPrint } from "react-to-print"
import { PiFilePdf } from "react-icons/pi"

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>
}

export default function PrintButton({ contentRef }: PrintButtonProps) {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  })

  return (
    <div className="fixed right-12 top-3">
      <Button onClick={handlePrint} variant="ghost" className="h-10 w-10 !p-0">
        <PiFilePdf size={26} className="opacity-25" />
      </Button>
    </div>
  )
}
