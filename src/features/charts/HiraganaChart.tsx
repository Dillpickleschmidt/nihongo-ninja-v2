import Romaji from "@/components/text/Romaji"

export default function HiraganaChart() {
  // const textShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"
  const textShadow = "" // Disabled for now

  const romajiClassName = "text-2xl pt-1"
  const tableRowClassName =
    "[&>*]:border-card-foreground/75 [&>*]:h-28 [&>*]:text-center"

  return (
    <>
      <div className="rounded-3xl border-[2.5px] border-dashed border-card-foreground bg-card/100 shadow-inner">
        <table className="w-full table-fixed border-collapse font-japanese text-5xl">
          <tbody>
            <tr
              className={`[&>*]:border-b-2 [&>*]:border-l-2 [&>*]:border-r-2 ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="a"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  あ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="i"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  い
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="u"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  う
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="e"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  え
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="o"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  お
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ka"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  か
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ki"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  き
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ku"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  く
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ke"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  け
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ko"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  こ
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="sa"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  さ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="shi*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  し
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="su"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  す
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="se"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  せ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="so"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  そ
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ta"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  た
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="chi*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ち
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="tsu*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  つ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="te"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  て
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="to"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  と
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="na"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  な
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ni"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  に
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="nu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぬ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ne"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ね
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="no"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  の
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ha"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  は
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="hi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ひ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="fu*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ふ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="he"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  へ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ho"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ほ
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ma"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ま
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="mi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  み
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="mu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  む
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="me"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  め
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="mo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  も
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ya"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  や
                </Romaji>
              </td>
              <td></td>
              <td>
                <Romaji
                  romaji="yu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ゆ
                </Romaji>
              </td>
              <td></td>
              <td className="!border-r-0">
                <Romaji
                  romaji="yo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  よ
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ra"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ら
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ri"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  り
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ru"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  る
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="re"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  れ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ro"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ろ
                </Romaji>
              </td>
            </tr>
            <tr
              className={`[&>*]:h-28 [&>*]:border-2 [&>*]:border-card-foreground [&>*]:text-center ${tableRowClassName}`}
            >
              <td className="!border-b-0 !border-l-0">
                <Romaji
                  romaji="wa"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  わ
                </Romaji>
              </td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0 !border-r-0">
                <Romaji
                  romaji="o**"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  を
                </Romaji>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="full mt-2 flex justify-center text-5xl">
        <div className="h-28 w-28 rounded-2xl border-2 border-dashed border-card-foreground bg-card/100 pt-3 text-center">
          <Romaji
            romaji="n"
            className={romajiClassName}
            textShadow={textShadow}
          >
            ん
          </Romaji>
        </div>
      </div>
    </>
  )
}
