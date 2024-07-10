import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type ToggleOptionProps = {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  className?: string
}

export default function ToggleOption({
  id,
  checked,
  onCheckedChange,
  label,
  className,
}: ToggleOptionProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label
        htmlFor={id}
        className={`hover:cursor-pointer ${className || "text-base font-normal"}`}
      >
        {label}
      </Label>
    </div>
  )
}
