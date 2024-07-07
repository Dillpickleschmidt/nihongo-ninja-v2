import { twMerge } from "tailwind-merge"

type ChapterBoxProps = {
  children: React.ReactNode
  text: React.ReactNode
  className?: string
}

export default function ChapterBox({
  children,
  text,
  className,
}: ChapterBoxProps) {
  return (
    <>
      <div
        className={twMerge(
          "my-6 flex h-28 w-full items-center justify-center rounded-md font-medium text-white",
          className,
        )}
      >
        {/* <div className="px-14 py-4 text-3xl bg-background/90 shadow-inner rounded-lg border"> */}
        <div className="px-14 py-4 text-4xl">{text}</div>
      </div>
      {/* Buttons */}
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 2xl:grid-cols-3 [&>*]:px-7 [&>*]:py-6 [&>*]:text-base [&>*]:shadow-lg">
        {children}
      </div>
    </>
  )
}
