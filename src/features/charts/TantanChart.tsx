import Romaji from "@/components/text/Romaji"
import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function DakutenChart() {
  const textShadow = "" // Disabled for now
  const romajiClassName = "text-2xl pt-1"
  const tableRowClassName = "[&>*]:border-black [&>*]:h-28 [&>*]:text-center"

  return (
    <>
      <div className="overflow-x-hidden rounded-3xl border-[3px] border-black">
        <table className="w-full table-fixed border-collapse bg-[#F8F5E9] bg-opacity-40 font-japanese text-5xl">
          <tbody>
            <tr
              className={`[&>*]:border-b [&>*]:border-l [&>*]:border-r ${tableRowClassName}`}
            >
              <td className="!border-l-0">
                <Romaji
                  romaji="ga"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  が
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="gi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぎ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="gu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぐ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ge"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  げ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="go"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ご
                </Romaji>
              </td>
            </tr>
            <tr className={`[&>*]:border ${tableRowClassName}`}>
              <td className="!border-l-0">
                <Romaji
                  romaji="za"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ざ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ji*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  じ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="zu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ず
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ze"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぜ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="zo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぞ
                </Romaji>
              </td>
            </tr>
            <tr className={`[&>*]:border ${tableRowClassName}`}>
              <td className="!border-l-0">
                <Romaji
                  romaji="da"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  だ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="ji*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぢ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="zu*"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  づ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="de"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  で
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="do"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ど
                </Romaji>
              </td>
            </tr>
            <tr className={`[&>*]:border ${tableRowClassName}`}>
              <td className="!border-l-0">
                <Romaji
                  romaji="ba"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ば
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="bi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  び
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="bu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぶ
                </Romaji>
              </td>
              <td>
                <Romaji
                  romaji="be"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  べ
                </Romaji>
              </td>
              <td className="!border-r-0">
                <Romaji
                  romaji="bo"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぼ
                </Romaji>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-2 overflow-x-hidden rounded-3xl border-[3px] border-black">
        <table className="w-full table-fixed border-collapse bg-[#F8F5E9] bg-opacity-40 font-japanese text-5xl">
          <tbody>
            <tr className={`[&>*]:border ${tableRowClassName}`}>
              <td className="!border-b-0 !border-l-0">
                <Romaji
                  romaji="pa"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぱ
                </Romaji>
              </td>
              <td className="!border-b-0">
                <Romaji
                  romaji="pi"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぴ
                </Romaji>
              </td>
              <td className="!border-b-0">
                <Romaji
                  romaji="pu"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぷ
                </Romaji>
              </td>
              <td className="!border-b-0">
                <Romaji
                  romaji="pe"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぺ
                </Romaji>
              </td>
              <td className="!border-b-0 !border-r-0">
                <Romaji
                  romaji="po"
                  className={romajiClassName}
                  textShadow={textShadow}
                >
                  ぽ
                </Romaji>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
