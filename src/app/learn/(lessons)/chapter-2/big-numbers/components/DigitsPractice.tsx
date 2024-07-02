import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DigitsPractice() {
  const items = [
    "15",
    "37",
    "58",
    "79",
    "123",
    "256",
    "389",
    "612",
    "785",
    "941",
    "1,243",
    "2,589",
    "3,752",
    "5,981",
    "6,374",
    "8,895",
    "9,221",
    "12,345",
    "68,734",
    "95,678",
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          <Label className="mb-1 !text-center text-base">{item}</Label>
          <Input />
        </div>
      ))}
    </div>
  )
}
