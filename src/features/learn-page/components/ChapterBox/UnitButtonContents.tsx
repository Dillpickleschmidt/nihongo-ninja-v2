import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  CloudSun,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  NotebookPen,
  BookOpenText,
} from "lucide-react"

type UnitButtonContentsProps = {
  children: React.ReactNode
  id: string
  type?:
    | "lesson"
    | "quiz"
    | "culture-note"
    | "vocab-list"
    | "practice"
    | "game"
    | "video"
    | "audio"
    | "grammar-notes"
    | "reading"
}

export default function UnitButtonContents({
  children,
  id,
  type,
}: UnitButtonContentsProps) {
  const iconSize = "22px"

  return (
    <>
      <div className="h-full flex items-center">
        <span className="">{id}</span>
        <span className="mx-[0.3rem]"></span>
        <span className="text-muted-foreground">{children}</span>
      </div>
      <div className="sticky right-0 text-muted-foreground ml-2 bg-inherit rounded-full">
        {type === "lesson" ? (
          <BookOpen size={iconSize} className="text-green-500" />
        ) : type === "quiz" ? (
          <PencilLine
            size={iconSize}
            className="text-yellow-500 saturate-[75%]"
          />
        ) : type === "culture-note" ? (
          <Coffee size={iconSize} className="text-pink-400 saturate-[75%]" />
        ) : type === "vocab-list" ? (
          <ScrollText size={iconSize} className="text-sky-500 saturate-[50%]" />
        ) : type === "practice" ? (
          <GraduationCap size={iconSize} className="text-orange-500" />
        ) : type === "game" ? (
          <Gamepad size={iconSize} className="text-red-500" />
        ) : type === "video" ? (
          <Video size={iconSize} className="text-purple-400" />
        ) : type === "audio" ? (
          <Volume2 size={iconSize} className="text-purple-400" />
        ) : type === "grammar-notes" ? (
          <NotebookPen size={iconSize} className="text-red-500 opacity-80" />
        ) : type === "reading" ? (
          <BookOpenText size={iconSize} className="text-purple-400" />
        ) : undefined}
      </div>
    </>
  )
}
