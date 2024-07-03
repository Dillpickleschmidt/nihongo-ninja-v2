import { Button } from "@/components/ui/button"
import React from "react"
import { X } from "lucide-react"
import Link from "next/link"

type CloseButtonProps = {
  showAlertOnClose: boolean
}

export default function CloseButton({ showAlertOnClose }: CloseButtonProps) {
  return (
    <Link href={"/learn"}>
      <div className="fixed right-3 top-3">
        <Button variant="ghost" className="h-10 w-10 p-0">
          <X size={16} />
        </Button>
      </div>
    </Link>
  )
}
