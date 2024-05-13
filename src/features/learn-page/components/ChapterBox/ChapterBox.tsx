import { twMerge } from "tailwind-merge"

type ChapterBoxProps = {
  children: React.ReactNode
  text: string
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
          "w-full h-28 my-6 flex justify-center items-center font-medium rounded-md text-white",
          className
        )}
      >
        {/* <div className="px-14 py-4 text-3xl bg-background/90 shadow-inner rounded-lg border"> */}
        <div className="px-14 py-4 text-4xl">{text}</div>
      </div>
      {/* Buttons */}
      <div
        className="w-full grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6
            [&>*]:text-base [&>*]:px-7 [&>*]:py-6 [&>*]:shadow-lg"
      >
        {children}
      </div>
    </>
  )
}
