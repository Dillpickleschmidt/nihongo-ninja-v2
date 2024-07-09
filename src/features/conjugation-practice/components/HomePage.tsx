"use client"
import React from "react"
import Link from "next/link"
import { useSettings } from "../hooks/useSettings"
import type { Settings } from "../types"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { settings, updateSettings } = useSettings()

  const handleSettingChange =
    (key: keyof Settings) => (value: boolean | string | number) => {
      updateSettings({ [key]: value })
    }

  const ToggleOption = ({
    id,
    checked,
    onCheckedChange,
    label,
  }: {
    id: keyof Settings
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    label: string
  }) => (
    <div className="mb-2 flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label
        htmlFor={id}
        className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )

  return (
    <div className="container mx-auto space-y-6 p-4">
      <h1 className="mb-6 text-3xl font-bold">Japanese Conjugation Practice</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Form Types</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["normal", "Normal"],
            ["teForm", "Te-form"],
            ["volitional", "Volitional"],
            ["taiForm", "Tai-form"],
            ["tariForm", "Tari-form"],
            ["potential", "Potential"],
            ["imperative", "Imperative"],
            ["conditional", "Conditional"],
            ["passive", "Passive"],
            ["causative", "Causative"],
            ["causativePassive", "Causative-Passive"],
          ].map(([key, label]) => (
            <ToggleOption
              key={key}
              id={key as keyof Settings}
              checked={settings[key as keyof Settings] as boolean}
              onCheckedChange={(checked) =>
                handleSettingChange(key as keyof Settings)(checked)
              }
              label={label}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Part of Speech</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["verb", "Verb"],
            ["iAdjective", "I-Adjective"],
            ["naAdjective", "Na-Adjective"],
          ].map(([key, label]) => (
            <ToggleOption
              key={key}
              id={key as keyof Settings}
              checked={settings[key as keyof Settings] as boolean}
              onCheckedChange={(checked) =>
                handleSettingChange(key as keyof Settings)(checked)
              }
              label={label}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Speech Level</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["polite", "Polite"],
            ["plain", "Plain"],
          ].map(([key, label]) => (
            <ToggleOption
              key={key}
              id={key as keyof Settings}
              checked={settings[key as keyof Settings] as boolean}
              onCheckedChange={(checked) =>
                handleSettingChange(key as keyof Settings)(checked)
              }
              label={label}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Tense</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["nonPast", "Non-Past"],
            ["past", "Past"],
          ].map(([key, label]) => (
            <ToggleOption
              key={key}
              id={key as keyof Settings}
              checked={settings[key as keyof Settings] as boolean}
              onCheckedChange={(checked) =>
                handleSettingChange(key as keyof Settings)(checked)
              }
              label={label}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Polarity</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["positive", "Positive"],
            ["negative", "Negative"],
          ].map(([key, label]) => (
            <ToggleOption
              key={key}
              id={key as keyof Settings}
              checked={settings[key as keyof Settings] as boolean}
              onCheckedChange={(checked) =>
                handleSettingChange(key as keyof Settings)(checked)
              }
              label={label}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Special Options</h2>
        <div className="space-y-2">
          <Label htmlFor="jlptLevel">JLPT Level:</Label>
          <Select
            value={settings.jlptLevel}
            onValueChange={(value) =>
              handleSettingChange("jlptLevel")(value as Settings["jlptLevel"])
            }
          >
            <SelectTrigger id="jlptLevel">
              <SelectValue placeholder="Select JLPT level" />
            </SelectTrigger>
            <SelectContent>
              {(["n5", "n4", "n3", "n2", "n1"] as const).map((level) => (
                <SelectItem key={level} value={level}>
                  {level.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <ToggleOption
            id="leaveOutSuru"
            checked={settings.leaveOutSuru}
            onCheckedChange={(checked) =>
              handleSettingChange("leaveOutSuru")(checked)
            }
            label="Leave out する verbs"
          />

          <ToggleOption
            id="reverse"
            checked={settings.reverse}
            onCheckedChange={(checked) =>
              handleSettingChange("reverse")(checked)
            }
            label="Reverse mode"
          />

          <div className="space-y-2">
            <Label htmlFor="amount">Number of questions:</Label>
            <Input
              id="amount"
              type="number"
              value={settings.amount}
              onChange={(e) =>
                handleSettingChange("amount")(parseInt(e.target.value, 10))
              }
              min="1"
              max="100"
            />
          </div>

          <ToggleOption
            id="showMeaning"
            checked={settings.showMeaning}
            onCheckedChange={(checked) =>
              handleSettingChange("showMeaning")(checked)
            }
            label="Show meaning"
          />

          <ToggleOption
            id="noFurigana"
            checked={settings.noFurigana}
            onCheckedChange={(checked) =>
              handleSettingChange("noFurigana")(checked)
            }
            label="No furigana"
          />
        </div>
      </div>

      <div>
        <Link href="review">
          <Button type="button" size="lg" className="text-base">
            Start Review
          </Button>
        </Link>
      </div>
    </div>
  )
}
