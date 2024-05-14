"use client"
import { useGlobalContext } from "@/context/GlobalContext"
import { useEffect } from "react"

export function FromLearnSwitchOn() {
  const { setFromLearnPage } = useGlobalContext()
  useEffect(() => {
    setFromLearnPage(true)
    // setShowContentBox(false)
    console.log("FromLearnSwitch: true")
  }, [])
  return <div></div>
}

export function FromLearnSwitchOff() {
  const { setFromLearnPage } = useGlobalContext()
  useEffect(() => {
    setFromLearnPage(false)
    // setShowContentBox(false)
    console.log("FromLearnSwitch: false")
  }, [])
  return <div></div>
}
