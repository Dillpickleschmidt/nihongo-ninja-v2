import Link from "next/link"
import { twMerge } from "tailwind-merge"

type ExpandingTabsProps = {
  isHovered1: boolean
  setIsHovered1: React.Dispatch<React.SetStateAction<boolean>>
  isHovered2: boolean
  setIsHovered2: React.Dispatch<React.SetStateAction<boolean>>
  isHovered3: boolean
  setIsHovered3: React.Dispatch<React.SetStateAction<boolean>>
  isHovered4: boolean
  setIsHovered4: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExpandingTabs({
  isHovered1,
  setIsHovered1,
  isHovered2,
  setIsHovered2,
  isHovered3,
  setIsHovered3,
  isHovered4,
  setIsHovered4,
}: ExpandingTabsProps) {
  return (
    <div className="flex justify-center my-[-65px]">
      <ul
        className="mt-[-70px] w-[95%] lg:w-[86%] xl:w-[82%] 2xl:w-[80%] grid grid-cols-4 h-[200px] xl:gap-9 gap-4
            [&>*]:rounded-xl [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50 [&>*]:ease-in-out [&>*]:duration-200"
      >
        <a
          href="https://jpdb.io"
          className={twMerge("bg-red-700", isHovered1 ? "scale-y-[140%]" : "")}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        ></a>
        <Link
          href="/learn/"
          className={twMerge("bg-cyan-500", isHovered2 ? "scale-y-[140%]" : "")}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        ></Link>
        <Link
          href="/learn/"
          className={twMerge(
            "bg-yellow-500",
            isHovered3 ? "scale-y-[140%]" : ""
          )}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        ></Link>
        <Link
          href="/learn/"
          className={twMerge(
            "bg-purple-500",
            isHovered4 ? "scale-y-[140%]" : ""
          )}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        ></Link>
      </ul>
    </div>
  )
}
