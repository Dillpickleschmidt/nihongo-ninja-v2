"use client"
import Link from "next/link"
import { useEffect } from "react"

export default function CloseDialog({
  showAlertOnClose,
}: {
  showAlertOnClose: boolean
}) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden") // prevent scrolling of the background

    return () => {
      document.body.classList.remove("overflow-hidden") // cleanup function on dismount
    }
  }, [])

  const handleClose = (event: React.MouseEvent) => {
    // if showAlertOnClose is true, show a confirmation dialog
    if (
      showAlertOnClose &&
      !window.confirm(
        "You'll lose your progress. Are you sure you want to leave?",
      )
    ) {
      event.preventDefault() // Prevent the link from being followed if the user cancels
      return
    }
  }
  return (
    <>
      <Link
        className="backdrop-saturate-75 fixed inset-0 cursor-default backdrop-blur-2xl backdrop-brightness-75"
        href="/learn"
        scroll={false}
        onClick={handleClose}
        tabIndex={-1}
      />
    </>
  )
}
