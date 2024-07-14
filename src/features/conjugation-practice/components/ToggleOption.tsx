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
    <div className="flex items-center space-x-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="h-[18px] w-[18px] rounded-full data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
      />
      <Label
        htmlFor={id}
        className={`hover:cursor-pointer ${className || "text-lg lg:text-[1.2rem]"}`}
      >
        {label}
      </Label>
    </div>
  )
}
