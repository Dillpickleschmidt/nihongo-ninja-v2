"use client"
import ExpandingTabs from "./ExpandingTabs"
import ButtonBar from "./ButtonBar"
import { useState } from "react"

export default function ButtonBarGroup() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)

  return (
    <div className="sticky">
      <ExpandingTabs
        isHovered1={isHovered1}
        setIsHovered1={setIsHovered1}
        isHovered2={isHovered2}
        setIsHovered2={setIsHovered2}
        isHovered3={isHovered3}
        setIsHovered3={setIsHovered3}
        isHovered4={isHovered4}
        setIsHovered4={setIsHovered4}
      />
      <ButtonBar
        isHovered1={isHovered1}
        setIsHovered1={setIsHovered1}
        isHovered2={isHovered2}
        setIsHovered2={setIsHovered2}
        isHovered3={isHovered3}
        setIsHovered3={setIsHovered3}
        isHovered4={isHovered4}
        setIsHovered4={setIsHovered4}
      />
    </div>
  )
}
