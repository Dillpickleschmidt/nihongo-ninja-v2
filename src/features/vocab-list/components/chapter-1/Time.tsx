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
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            い
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">ichiji</TableCell>
          <TableCell className="text-right">1 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">niji</TableCell>
          <TableCell className="text-right">2 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              さ
            </Furigana>
            んじ
          </TableCell>
          <TableCell className="text-muted-foreground">sanji</TableCell>
          <TableCell className="text-right">3 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              よ
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">yoji</TableCell>
          <TableCell className="text-right">4 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ご
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">goji</TableCell>
          <TableCell className="text-right">5 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            ろ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">rokuji</TableCell>
          <TableCell className="text-right">6 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            し
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">shichi</TableCell>
          <TableCell className="text-right">7 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            は
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">hachiji</TableCell>
          <TableCell className="text-right">8 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">kuji</TableCell>
          <TableCell className="text-right">9 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じゅ
            </Furigana>
            うじ
          </TableCell>
          <TableCell className="text-muted-foreground">juuji</TableCell>
          <TableCell className="text-right">10 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            じゅうい
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">juuichiji</TableCell>
          <TableCell className="text-right">11 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            じゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell className="text-muted-foreground">juuniji</TableCell>
          <TableCell className="text-right">12 o'clock</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">はん</TableCell>
          <TableCell className="text-muted-foreground">han</TableCell>
          <TableCell className="text-right">half past</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">まえ</TableCell>
          <TableCell className="text-muted-foreground">mae</TableCell>
          <TableCell className="text-right">before</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">すぎ</TableCell>
          <TableCell className="text-muted-foreground">sugi</TableCell>
          <TableCell className="text-right">past</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ごぜん</TableCell>
          <TableCell className="text-muted-foreground">gozen</TableCell>
          <TableCell className="text-right">AM</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ごご</TableCell>
          <TableCell className="text-muted-foreground">gogo</TableCell>
          <TableCell className="text-right">PM</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">あさ</TableCell>
          <TableCell className="text-muted-foreground">asa</TableCell>
          <TableCell className="text-right">morning</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ひる</TableCell>
          <TableCell className="text-muted-foreground">hiru</TableCell>
          <TableCell className="text-right">afternoon</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ゆうがた</TableCell>
          <TableCell className="text-muted-foreground">yuugata</TableCell>
          <TableCell className="text-right">evening</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">よる</TableCell>
          <TableCell className="text-muted-foreground">yoru</TableCell>
          <TableCell className="text-right">night</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">いま</TableCell>
          <TableCell className="text-muted-foreground">ima</TableCell>
          <TableCell className="text-right">now</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
