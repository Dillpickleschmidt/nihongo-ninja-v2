import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  NotebookText,
  BookOpenText,
  BookPlus,
} from "lucide-react"

type UnitButtonContentsProps = {
  children: React.ReactNode
  id: string
  type?:
    | "lesson"
    | "writing"
    | "culture-note"
    | "vocab"
    | "practice"
    | "conjugation-practice"
    | "game"
    | "video"
    | "audio"
    | "grammar-notes"
    | "reading"
    | "vocab-list"
}

export default function UnitButtonContents({
  children,
  id,
  type,
}: UnitButtonContentsProps) {
  const iconSize = "22px"

  return (
    <>
      <div className="flex h-full items-center">
        <span className="">{id}</span>
        <span className="mx-[0.3rem]"></span>
        <span className="text-muted-foreground">{children}</span>
      </div>
      <div className="sticky right-0 ml-2 rounded-full bg-inherit text-muted-foreground">
        {type === "lesson" ? (
          <BookOpen size={iconSize} className="text-green-500" />
        ) : type === "writing" ? (
          <PencilLine
            size={iconSize}
            className="text-yellow-500 saturate-[75%]"
          />
        ) : type === "culture-note" ? (
          <Coffee size={iconSize} className="text-pink-400 saturate-[75%]" />
        ) : type === "vocab" ? (
          <BookPlus size={iconSize} className="text-sky-400 saturate-[75%]" />
        ) : type === "practice" ? (
          <GraduationCap size={iconSize} className="text-orange-500" />
        ) : type === "game" ? (
          <Gamepad size={iconSize} className="text-red-500" />
        ) : type === "video" ? (
          <Video size={iconSize} className="text-purple-400" />
        ) : type === "audio" ? (
          <Volume2 size={iconSize} className="text-purple-400" />
        ) : type === "grammar-notes" ? (
          <ScrollText size={iconSize} className="text-red-500 opacity-80" />
        ) : type === "reading" ? (
          <BookOpenText size={iconSize} className="text-teal-400" />
        ) : type === "conjugation-practice" ? (
          <GraduationCap size={iconSize} className="text-teal-400" />
        ) : type === "vocab-list" ? (
          <Library size={iconSize} className="text-red-500 opacity-80" />
        ) : undefined}
      </div>
    </>
  )
}
