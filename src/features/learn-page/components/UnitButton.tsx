import { Button } from "@/components/ui/button"
import { BookOpen, PencilLine, ScrollText, GraduationCap } from "lucide-react"

type UnitButtonProps = {
  children: React.ReactNode
  id: string
  type?: "lesson" | "quiz" | "vocab-list" | "learn-vocab"
}

export default function UnitButton({ children, id, type }: UnitButtonProps) {
  return (
    <Button
      variant="outline"
      className="font-normal overflow-x-scroll overflow-y-hidden scrollbar:hidden justify-between"
    >
      <div>
        <span className="">{id}</span>
        <span className="mx-[.35rem]"></span>
        <span className="text-sm text-muted-foreground">{children}</span>
      </div>
      <span className="h-[1.2rem] w-[1.2rem] text-muted-foreground">
        {type === "lesson" ? (
          <BookOpen />
        ) : type === "quiz" ? (
          <PencilLine />
        ) : type === "vocab-list" ? (
          <ScrollText />
        ) : type === "learn-vocab" ? (
          <GraduationCap />
        ) : undefined}
      </span>
    </Button>
  )
}
