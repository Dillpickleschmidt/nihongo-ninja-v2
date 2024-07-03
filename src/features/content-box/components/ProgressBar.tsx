"use client"
import { m } from "framer-motion"

type ProgressBarProps = {
  scaleX: any // Replace 'any' with the correct type from framer-motion
}

export default function ProgressBar({ scaleX }: ProgressBarProps) {
  return (
    <m.div
      style={{ scaleX: scaleX }}
      className="sticky top-[-1px] z-50 -mb-[0.1625rem] h-[0.1625rem] w-full origin-left bg-indigo-600 dark:bg-green-500"
    />
  )
}
