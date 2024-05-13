import Link from "next/link"

type ButtonBarProps = {
  isHovered1: boolean
  setIsHovered1: React.Dispatch<React.SetStateAction<boolean>>
  isHovered2: boolean
  setIsHovered2: React.Dispatch<React.SetStateAction<boolean>>
  isHovered3: boolean
  setIsHovered3: React.Dispatch<React.SetStateAction<boolean>>
  isHovered4: boolean
  setIsHovered4: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ButtonBar({
  isHovered1,
  setIsHovered1,
  isHovered2,
  setIsHovered2,
  isHovered3,
  setIsHovered3,
  isHovered4,
  setIsHovered4,
}: ButtonBarProps) {
  return (
    <div className="z-10 flex justify-center h-10 bg-[#2d2d2d]/80 backdrop-blur-xl">
      <ul
        className="text-[1.0625rem] w-[95%] lg:w-[86%] xl:w-[82%] 2xl:w-[80%] grid grid-cols-4 xl:gap-9 gap-4 items-center opacity-30
        [&>*]:h-full [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:ease-in-out [&>*]:duration-200"
      >
        <a
          href="https://jpdb.io"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
          className={isHovered1 ? "scale-[105%]" : ""}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          CARDS
        </a>
        <Link
          href=""
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
          className={isHovered2 ? "scale-[105%]" : ""}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          RESOURCES
        </Link>
        <Link
          href=""
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
          className={isHovered3 ? "scale-[105%]" : ""}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          PROGRESS
        </Link>
        <Link
          href=""
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
          className={isHovered4 ? "scale-[105%]" : ""}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          TOOLS
        </Link>
      </ul>
    </div>
  )
}
