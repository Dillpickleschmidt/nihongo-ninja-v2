import Furigana from "@/components/text/Furigana"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Time() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Hiragana</TableHead>
          <TableHead>Romaji</TableHead>
          <TableHead className="text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            い
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell>ichiji</TableCell>
          <TableCell className="text-right">1 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell>niji</TableCell>
          <TableCell className="text-right">2 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              さ
            </Furigana>
            んじ
          </TableCell>
          <TableCell>sanji</TableCell>
          <TableCell className="text-right">3 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              よ
            </Furigana>
            じ
          </TableCell>
          <TableCell>yoji</TableCell>
          <TableCell className="text-right">4 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ご
            </Furigana>
            じ
          </TableCell>
          <TableCell>goji</TableCell>
          <TableCell className="text-right">5 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ろ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell>rokuji</TableCell>
          <TableCell className="text-right">6 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            し
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell>shichi</TableCell>
          <TableCell className="text-right">7 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            は
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell>hachiji</TableCell>
          <TableCell className="text-right">8 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell>kuji</TableCell>
          <TableCell className="text-right">9 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じゅ
            </Furigana>
            うじ
          </TableCell>
          <TableCell>juuji</TableCell>
          <TableCell className="text-right">10 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            じゅうい
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell>juuichiji</TableCell>
          <TableCell className="text-right">11 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            じゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell>juuniji</TableCell>
          <TableCell className="text-right">12 o'clock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            はん
          </TableCell>
          <TableCell>han</TableCell>
          <TableCell className="text-right">half past</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            まえ
          </TableCell>
          <TableCell>mae</TableCell>
          <TableCell className="text-right">before</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            すぎ
          </TableCell>
          <TableCell>sugi</TableCell>
          <TableCell className="text-right">past</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ごぜん
          </TableCell>
          <TableCell>gozen</TableCell>
          <TableCell className="text-right">AM</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ごご
          </TableCell>
          <TableCell>gogo</TableCell>
          <TableCell className="text-right">PM</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            あさ
          </TableCell>
          <TableCell>asa</TableCell>
          <TableCell className="text-right">morning</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ひる
          </TableCell>
          <TableCell>hiru</TableCell>
          <TableCell className="text-right">afternoon</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ゆうがた
          </TableCell>
          <TableCell>yuugata</TableCell>
          <TableCell className="text-right">evening</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            よる
          </TableCell>
          <TableCell>yoru</TableCell>
          <TableCell className="text-right">night</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いま
          </TableCell>
          <TableCell>ima</TableCell>
          <TableCell className="text-right">now</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
