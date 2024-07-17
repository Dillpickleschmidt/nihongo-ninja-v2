"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { m, AnimatePresence } from "framer-motion"

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  text: string
}

export default function Dropdown({ children, text }: DropdownProps) {
  const [showSpoiler, setShowSpoiler] = useState(true)
  return (
    <div className="w-[45%]">
      <div className="flex items-center justify-between border-b border-white border-opacity-15 py-3 pr-3">
        <Button
          onClick={() => setShowSpoiler(!showSpoiler)}
          variant="outline"
          className="rounded-md bg-neutral-800 px-4 py-2 text-lg text-sky-400"
        >
          {text}
        </Button>
        <div className="ease flex space-x-6">
          <div className="text-base">Cards</div>
          <div className="text-base">Actions</div>
        </div>
      </div>
      <AnimatePresence>
        {showSpoiler && (
          <m.div
            // key={`${showSpoiler}`} // key is used to force a rerender when the index changes
            // initial={{ y: -5, opacity: 0 }}
            // animate={{
            //   y: 0,
            //   opacity: 1,
            //   transition: { duration: 0.4 },
            // }}
            // exit={{ y: 5, opacity: 0 }}
            className="flex w-full flex-col [&>*]:ml-4 [&>*]:border-b [&>*]:border-white [&>*]:border-opacity-15 [&>*]:px-2 [&>*]:py-3"
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
