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

export default function Minutes() {
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
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              いっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell className="text-muted-foreground">ippun</TableCell>
          <TableCell className="text-right">1 minute</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            ふん
          </TableCell>
          <TableCell className="text-muted-foreground">ni-fun</TableCell>
          <TableCell className="text-right">2 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              さ
            </Furigana>
            んぷん
          </TableCell>
          <TableCell className="text-muted-foreground">san-pun</TableCell>
          <TableCell className="text-right">3 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              よ
            </Furigana>
            んぷん
          </TableCell>
          <TableCell className="text-muted-foreground">yon-pun</TableCell>
          <TableCell className="text-right">4 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ご
            </Furigana>
            ふん
          </TableCell>
          <TableCell className="text-muted-foreground">go-fun</TableCell>
          <TableCell className="text-right">5 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            ろっ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ぷん
            </Furigana>
          </TableCell>
          <TableCell className="text-muted-foreground">roppun</TableCell>
          <TableCell className="text-right">6 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            な
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              な
            </Furigana>
            ふん
          </TableCell>
          <TableCell className="text-muted-foreground">nana-fun</TableCell>
          <TableCell className="text-right">7 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            はっ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ぷん
            </Furigana>
            <span className="text-xl">・</span>は
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            ふん
          </TableCell>
          <TableCell className="text-muted-foreground">
            happun / hachi-fun
          </TableCell>
          <TableCell className="text-right">8 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            きゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ふん
            </Furigana>
          </TableCell>
          <TableCell className="text-muted-foreground">kyū-fun</TableCell>
          <TableCell className="text-right">9 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            じゅっ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ぷん
            </Furigana>
            <span className="text-xl">・</span>
            じっ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ぷん
            </Furigana>
          </TableCell>
          <TableCell className="text-muted-foreground">
            juppun / jippun
          </TableCell>
          <TableCell className="text-right">10 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            じゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              いっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell className="text-muted-foreground">juu-ippun</TableCell>
          <TableCell className="text-right">11 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            に
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じゅっ
            </Furigana>
            ぷん
            <span className="text-xl">・</span>に
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell className="text-muted-foreground">
            ni-juppun / ni-jippun
          </TableCell>
          <TableCell className="text-right">20 minutes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            さん
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じゅっ
            </Furigana>
            ぷん
            <span className="text-xl">・</span>
            さん
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              じっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell className="text-muted-foreground">
            san-juppun / san-jippun
          </TableCell>
          <TableCell className="text-right">30 minutes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
