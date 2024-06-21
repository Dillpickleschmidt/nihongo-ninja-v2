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
        <TableRow>
          <TableHead>Hiragana</TableHead>
          <TableHead>Romaji</TableHead>
          <TableHead className="text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              いっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell>ippun</TableCell>
          <TableCell className="text-right">1 minute</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            ふん
          </TableCell>
          <TableCell>ni-fun</TableCell>
          <TableCell className="text-right">2 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              さ
            </Furigana>
            んぷん
          </TableCell>
          <TableCell>san-pun</TableCell>
          <TableCell className="text-right">3 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              よ
            </Furigana>
            んぷん
          </TableCell>
          <TableCell>yon-pun</TableCell>
          <TableCell className="text-right">4 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ご
            </Furigana>
            ふん
          </TableCell>
          <TableCell>go-fun</TableCell>
          <TableCell className="text-right">5 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ろっ
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ぷん
            </Furigana>
          </TableCell>
          <TableCell>roppun</TableCell>
          <TableCell className="text-right">6 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            な
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              な
            </Furigana>
            ふん
          </TableCell>
          <TableCell>nana-fun</TableCell>
          <TableCell className="text-right">7 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
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
          <TableCell>happun / hachi-fun</TableCell>
          <TableCell className="text-right">8 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            きゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              ふん
            </Furigana>
          </TableCell>
          <TableCell>kyū-fun</TableCell>
          <TableCell className="text-right">9 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
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
          <TableCell>juppun / jippun</TableCell>
          <TableCell className="text-right">10 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            じゅう
            <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
              いっ
            </Furigana>
            ぷん
          </TableCell>
          <TableCell>juu-ippun</TableCell>
          <TableCell className="text-right">11 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
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
          <TableCell>ni-juppun / ni-jippun</TableCell>
          <TableCell className="text-right">20 minutes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
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
          <TableCell>san-juppun / san-jippun</TableCell>
          <TableCell className="text-right">30 minutes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
