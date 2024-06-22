import Romaji from "@/components/text/Romaji"

export default function KatakanaChart() {
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
                  ア
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="i"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  イ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="u"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ウ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="e"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  エ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="o"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  オ
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
                  カ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ki"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  キ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ku"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ク
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ke"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ケ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ko"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  コ
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
                  サ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="shi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  シ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="su"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ス
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="se"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  セ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="so"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ソ
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
                  タ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="chi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  チ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="tsu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ツ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="te"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  テ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="to"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ト
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
                  ナ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ni"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ニ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="nu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ヌ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ne"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ネ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="no"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ノ
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
                  ハ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="hi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ヒ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="fu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  フ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="he"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ヘ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ho"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ホ
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
                  マ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="mi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ミ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="mu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ム
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="me"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  メ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="mo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  モ
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
                  ヤ
                </Romaji>
              </td>
              <td></td>
              <td>
                <Romaji
                  romaji="yu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ユ
                </Romaji>
              </td>
              <td></td>
              <td className="!border-r-0">
                <Romaji
                  romaji="yo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ヨ
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
                  ラ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ri"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  リ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ru"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ル
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="re"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  レ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="ro"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ロ
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
                  ワ
                </Romaji>
              </td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0"></td>
              <td className="!border-b-0 !border-r-0">
                <Romaji
                  romaji="wo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ヲ
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
            ン
          </Romaji>
        </div>
      </div>
    </>
  )
}
