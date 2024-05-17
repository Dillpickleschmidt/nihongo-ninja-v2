import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  CloudSun,
} from "lucide-react";

type UnitButtonContentsProps = {
  children: React.ReactNode;
  id: string;
  type?: "lesson" | "quiz" | "preview" | "vocab-list" | "learn-vocab";
};

export default function UnitButtonContents({
  children,
  id,
  type,
}: UnitButtonContentsProps) {
  const iconSize = "22px";

  return (
    <>
      <div className="h-full flex items-center">
        <span className="">{id}</span>
        <span className="mx-[0.3rem]"></span>
        <span className="text-muted-foreground">{children}</span>
      </div>
      <div className="text-muted-foreground">
        {type === "lesson" ? (
          <BookOpen size={iconSize} />
        ) : type === "quiz" ? (
          <PencilLine size={iconSize} />
        ) : type === "preview" ? (
          <CloudSun size={iconSize} />
        ) : type === "vocab-list" ? (
          <ScrollText size={iconSize} />
        ) : type === "learn-vocab" ? (
          <GraduationCap size={iconSize} />
        ) : undefined}
      </div>
    </>
  );
}
