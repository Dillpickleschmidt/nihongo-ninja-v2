import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NumbersKanjiPractice() {
  const items = [
    "十五", // 15
    "四十二", // 42
    "七十五", // 75
    "百六", // 106
    "二百三十四", // 234
    "三百五十七", // 357
    "四百八十二", // 482
    "五百九十九", // 599
    "千三十四", // 1034
    "千八百五十", // 1850
    "二千四百二十", // 2420
    "三千六百七十五", // 3675
    "四千九百八十三", // 4983
    "六千五百七", // 6507
    "七千九百十二", // 7912
    "一万一千五百", // 11500
    "一万三千四百二十", // 13420
    "三万二千六百五十", // 32650
    "五万七千八百四十", // 57840
    "九万四千三百二十一", // 94321
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
