import Romaji from "@/components/text/Romaji"

export default function Numbers100() {
  const boxClassName =
    "w-full h-full dark:bg-[#E3D7C5] bg-background text-black flex flex-col justify-center items-center text-3xl px-4 text-center font-semibold"

  return (
    <div className="grid w-full grid-cols-3 gap-4 rounded-xl p-4 [&>*]:h-[10.5rem] [&>*]:rounded-md [&>*]:shadow-lg">
      <div className={boxClassName}>
        <Romaji romaji="ichi" className="font-medium">
          いち
        </Romaji>
        <div className="mt-2 text-2xl">1</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="ni" className="font-medium">
          に
        </Romaji>
        <div className="mt-2 text-2xl">2</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="san" className="font-medium">
          さｎ
        </Romaji>
        <div className="mt-2 text-2xl">3</div>
      </div>
      <div className={boxClassName}>
        <div className="flex gap-2">
          <Romaji romaji="yon" className="font-medium">
            よん /
          </Romaji>
          <Romaji romaji="shi" className="font-medium">
            し
          </Romaji>
        </div>
        <div className="mt-2 text-2xl">4</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="go" className="font-medium">
          ご
        </Romaji>
        <div className="mt-2 text-2xl">5</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="roku" className="font-medium">
          ろく
        </Romaji>
        <div className="mt-2 text-2xl">6</div>
      </div>
      <div className={boxClassName}>
        <div className="flex gap-2">
          <Romaji romaji="nana" className="font-medium">
            なな /
          </Romaji>
          <Romaji romaji="shichi" className="font-medium">
            しち
          </Romaji>
        </div>
        <div className="mt-2 text-2xl">7</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="hachi" className="font-medium">
          はち
        </Romaji>
        <div className="mt-2 text-2xl">8</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="kyuu" className="font-medium">
          きゅう
        </Romaji>
        <div className="mt-2 text-2xl">9</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="jyuu" className="font-medium">
          じゅう
        </Romaji>
        <div className="mt-2 text-2xl">10</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="jyuuichi" className="font-medium">
          じゅう<span className="text-orange-400">いち</span>
        </Romaji>
        <div className="mt-2 text-2xl">11</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="nijyuu" className="font-medium">
          <span className="text-red-400">に</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">20</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="nijyuuichi" className="font-medium">
          <span className="text-red-400">に</span>じゅう
          <span className="text-orange-400">いち</span>
        </Romaji>
        <div className="mt-2 text-2xl">21</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="sanjyuu" className="font-medium">
          <span className="text-red-400">さん</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">30</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="yonjyuu" className="font-medium">
          <span className="text-red-400">よん</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">40</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="gojyuu" className="font-medium">
          <span className="text-red-400">ご</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">50</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="rokujyuu" className="font-medium">
          <span className="text-red-400">ろ</span>くじゅう
        </Romaji>
        <div className="mt-2 text-2xl">60</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="nanajyuu" className="font-medium">
          <span className="text-red-400">なな</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">70</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="hachijyuu" className="font-medium">
          <span className="text-red-400">はち</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">80</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="kyuujyuu" className="font-medium">
          <span className="text-red-400">きゅう</span>じゅう
        </Romaji>
        <div className="mt-2 text-2xl">90</div>
      </div>
      <div className={boxClassName}>
        <Romaji romaji="hyaku" className="font-medium">
          ひゃく
        </Romaji>
        <div className="mt-2 text-2xl">100</div>
      </div>
    </div>
  )
}
