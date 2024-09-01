"use client"
import { useSettingsContext } from "../context/SettingsContext"
import ToggleOption from "./ToggleOption"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Settings } from "../types"

type HomePageProps = {
  onStartReview: () => void
}

export default function SettingsPage({ onStartReview }: HomePageProps) {
  const { settings, updateSettings } = useSettingsContext()

  // The keyof Settings type ensures that key must be a string that corresponds to one of the property names within the Settings type.
  const handleSettingChange =
    (key: keyof Settings) => (value: boolean | string | number) => {
      updateSettings({ [key]: value })
    }

  return (
    <>
      <div className="mt-12 flex w-full flex-col items-center">
        <h1 className="rounded-xl border border-border bg-white/5 px-8 py-6 text-[1.75rem] font-black backdrop-blur-sm lg:mt-9">
          Conjugation Practice
        </h1>
      </div>
      <div className="w-full max-w-[625px]">
        <div className="border-b border-card-foreground">
          <h2 className="mt-12 text-[1.75rem] font-black text-orange-400">
            Form Types
          </h2>
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
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
              <div key={key} className="mx-6 flex justify-center">
                <div className="w-56">
                  <ToggleOption
                    id={key as keyof Settings}
                    checked={settings[key as keyof Settings] as boolean}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key as keyof Settings)(checked)
                    }
                    label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-card-foreground">
          <h2 className="mt-6 text-[1.6rem] font-black">Parts of Speech</h2>
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["verb", "Verb"],
              ["iAdjective", "I-Adjective"],
              ["naAdjective", "Na-Adjective"],
            ].map(([key, label]) => (
              <div key={key} className="mx-6 flex justify-center">
                <div className="w-56">
                  <ToggleOption
                    id={key as keyof Settings}
                    checked={settings[key as keyof Settings] as boolean}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key as keyof Settings)(checked)
                    }
                    label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-card-foreground">
          <h2 className="mt-6 text-[1.6rem] font-black">Speech Level</h2>
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["polite", "Polite"],
              ["plain", "Plain"],
            ].map(([key, label]) => (
              <div key={key} className="mx-6 flex justify-center">
                <div className="w-56">
                  <ToggleOption
                    id={key as keyof Settings}
                    checked={settings[key as keyof Settings] as boolean}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key as keyof Settings)(checked)
                    }
                    label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-card-foreground">
          <h2 className="mt-6 text-[1.6rem] font-black">Tense</h2>
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["nonPast", "Non-Past"],
              ["past", "Past"],
            ].map(([key, label]) => (
              <div key={key} className="mx-6 flex justify-center">
                <div className="w-56">
                  <ToggleOption
                    id={key as keyof Settings}
                    checked={settings[key as keyof Settings] as boolean}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key as keyof Settings)(checked)
                    }
                    label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-card-foreground">
          <h2 className="mt-6 text-[1.6rem] font-black">Positive/Negative</h2>
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["positive", "Positive"],
              ["negative", "Negative"],
            ].map(([key, label]) => (
              <div key={key} className="mx-6 flex justify-center">
                <div className="w-56">
                  <ToggleOption
                    id={key as keyof Settings}
                    checked={settings[key as keyof Settings] as boolean}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key as keyof Settings)(checked)
                    }
                    label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-12 text-center text-[1.4rem] font-medium italic">
          Special Options
        </h2>
        <div className="mx-16 mt-4 space-y-2">
          <Label htmlFor="jlptLevel" className="text-base">
            JLPT Level:
          </Label>
          <Select
            value={settings.jlptLevel}
            onValueChange={(value) =>
              handleSettingChange("jlptLevel")(value as Settings["jlptLevel"])
            }
          >
            <SelectTrigger id="jlptLevel" className="shadow-md">
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

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-base">
              Number of questions:
            </Label>
            <Input
              id="amount"
              type="number"
              value={settings.amount}
              onChange={(e) =>
                handleSettingChange("amount")(parseInt(e.target.value, 10))
              }
              min="1"
              max="100"
              className="shadow-md"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="space-y-4">
            <ToggleOption
              id="leaveOutSuru"
              checked={settings.leaveOutSuru}
              onCheckedChange={(checked) =>
                handleSettingChange("leaveOutSuru")(checked)
              }
              label={
                <>
                  Leave out <span className="font-japanese">する</span> verbs
                </>
              }
            />

            <ToggleOption
              id="reverse"
              checked={settings.reverse}
              onCheckedChange={(checked) =>
                handleSettingChange("reverse")(checked)
              }
              label="Reverse mode"
            />

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

            <ToggleOption
              id="emoji"
              checked={settings.emoji}
              onCheckedChange={(checked) =>
                handleSettingChange("emoji")(checked)
              }
              label="Show emojis above conjugation types [WIP]"
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 mb-[4.5rem] flex w-full justify-center">
          <Button
            onClick={onStartReview}
            size="lg"
            className="rounded-lg py-3 text-lg font-bold"
          >
            Practice!{" "}
            <span className="ml-2 font-black text-orange-400">{"->"}</span>
          </Button>
        </div>
        <div className="fixed bottom-0 left-0 flex h-3 w-full justify-center backdrop-blur-sm"></div>
      </div>
    </>
  )
}
