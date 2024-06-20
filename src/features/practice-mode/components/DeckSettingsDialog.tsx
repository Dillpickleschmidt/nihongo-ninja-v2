"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type DeckSettingsDialogProps = {
  children: React.ReactNode
  shuffleInput: boolean
  setShuffleInput: (value: boolean) => void
}

export default function DeckSettingsDialog({
  children,
  shuffleInput,
  setShuffleInput,
}: DeckSettingsDialogProps) {
  const [checked, setChecked] = useState(true)

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deck Settings</DialogTitle>
          <DialogDescription>
            Configure your deck settings here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-[120px] w-[360px] flex-row">
          <Checkbox
            checked={checked}
            onCheckedChange={() => {
              setShuffleInput(!shuffleInput), setChecked(!shuffleInput)
            }}
          />
          <Label htmlFor="shuffle" className="ml-2">
            Shuffle
          </Label>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
