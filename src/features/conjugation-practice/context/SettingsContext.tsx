"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Settings } from "../types"

type SettingsContextProps = {
  children: React.ReactNode
}

type SettingsContext = {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}

const DEFAULT_SETTINGS: Settings = {
  normal: true,
  teForm: false,
  volitional: false,
  taiForm: false,
  tariForm: false,
  potential: false,
  imperative: false,
  conditional: false,
  passive: false,
  causative: false,
  causativePassive: false,
  verb: true,
  iAdjective: false,
  naAdjective: false,
  polite: true,
  plain: true,
  nonPast: true,
  past: false,
  positive: true,
  negative: false,
  jlptLevel: "n5",
  leaveOutSuru: false,
  reverse: false,
  amount: 20,
  showMeaning: true,
  noFurigana: false,
  emoji: true,
}

const SettingsContext = createContext<SettingsContext | null>(null)

export function SettingsContextProvider({ children }: SettingsContextProps) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)

  useEffect(() => {
    const storedSettings = localStorage.getItem("japaneseConjugationSettings")
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings))
    }
  }, [])

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    localStorage.setItem(
      "japaneseConjugationSettings",
      JSON.stringify(updatedSettings),
    )
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettingsContext() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider",
    )
  }
  return context
}
