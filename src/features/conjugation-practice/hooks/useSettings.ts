"use client"
import { useState, useEffect } from "react"
import { Settings } from "../types"

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

/**
 * Custom hook for managing application settings.
 * @returns An object containing the current settings and a function to update them.
 *
 * @example
 * function SettingsComponent() {
 *   const { settings, updateSettings } = useSettings();
 *
 *   return (
 *     <div>
 *       <label>
 *         <input
 *           type="checkbox"
 *           checked={settings.teForm}
 *           onChange={(e) => updateSettings({ teForm: e.target.checked })}
 *         />
 *         Te-form
 *       </label>
 *       // ... other settings controls
 *     </div>
 *   );
 * }
 */
export function useSettings() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)

  useEffect(() => {
    const storedSettings = localStorage.getItem("japaneseConjugationSettings")
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings))
    }
  }, [])

  /**
   * Updates the settings with new values.
   * @param newSettings - Partial settings object with the values to be updated.
   */
  function updateSettings(newSettings: Partial<Settings>) {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    localStorage.setItem(
      "japaneseConjugationSettings",
      JSON.stringify(updatedSettings),
    )
  }

  return { settings, updateSettings }
}
