import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  CloudSun,
} from "lucide-react"

type UnitButtonContentsProps = {
  children: React.ReactNode
  id: string
  type?: "lesson" | "quiz" | "preview" | "vocab-list" | "learn-vocab"
}

export default function UnitButtonContents({
  children,
  id,
  type,
}: UnitButtonContentsProps) {
  return (
    <>
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
        ) : type === "preview" ? (
          <CloudSun />
        ) : type === "vocab-list" ? (
          <ScrollText />
        ) : type === "learn-vocab" ? (
          <GraduationCap />
        ) : undefined}
      </span>
    </>
  )
}
