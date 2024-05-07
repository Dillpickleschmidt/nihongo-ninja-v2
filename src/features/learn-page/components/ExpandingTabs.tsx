import Link from "next/link"

export default function ExpandingTabs() {
  return (
    <div className="flex justify-center my-[-60px]">
      <ul
        className="mt-[-80px] w-[95%] lg:w-[86%] xl:w-[82%] 2xl:w-[80%] grid grid-cols-4 h-[200px] xl:gap-9 gap-4
            [&>*]:rounded-xl [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50 [&>*]:ease-in-out [&>*]:duration-200"
      >
        <a
          href="https://jpdb.io"
          className="bg-red-700 hover:scale-y-[140%]"
        ></a>
        <Link
          href="/learn/"
          className="bg-cyan-500 hover:scale-y-[140%]"
        ></Link>
        <Link
          href="/learn/"
          className="bg-yellow-500 hover:scale-y-[140%]"
        ></Link>
        <Link
          href="/learn/"
          className="bg-purple-500 hover:scale-y-[140%]"
        ></Link>
      </ul>
    </div>
  )
}
