import { Input } from "@/components/ui/input"

const verbs = ["行く", "飲む", "話す", "読む", "食べる", "見る"]

export default function IruEruPractice() {
  const randomizedVerbs = [...verbs].sort(() => Math.random() - 0.5)

  return (
    <div className="flex flex-col items-center text-2xl">
      {randomizedVerbs.map((verb, index) => (
        <div key={index} className="mb-4 flex items-center">
          <div className="w-20 font-japanese">{verb}</div>
          <div className="mr-4">{"->"}</div>
          <div className="w-40">
            <Input className="font-japanese text-xl" />
          </div>
        </div>
      ))}
    </div>
  )
}
