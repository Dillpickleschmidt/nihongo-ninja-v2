import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BigNumbers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Number</TableHead>
          <TableHead className="w-1/3">Reading (Hiragana)</TableHead>
          <TableHead className="w-1/3 text-right">Japanese (Kanji)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="w-1/3">
            <span className="text-sky-400">100</span>
          </TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            <span className="text-sky-400">ひゃく</span>
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            <span className="text-sky-400">百</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">200</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            にひゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            二百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">300</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            さん
            <span className="text-orange-400">び</span>
            ゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            三百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">400</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            よんひゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            四百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">500</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            ごひゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            五百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">600</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            ろ<span className="text-orange-400">っぴ</span>ゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            六百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">700</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            ななひゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            七百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">800</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            は<span className="text-orange-400">っぴ</span>ゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            八百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">900</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            きゅうひゃく
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            九百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">
            <span className="text-sky-400">1,000</span>
          </TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            <span className="text-sky-400">せん</span>
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            <span className="text-sky-400">千</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">2,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">にせん</TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            二千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">3,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            さん<span className="text-orange-400">ぜ</span>ん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            三千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">4,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            よんせん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            四千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">5,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">ごせん</TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            五千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">6,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            ろくせん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            六千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">7,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            ななせん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            七千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">8,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            は<span className="text-orange-400">っせ</span>ん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            八千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">9,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            きゅうせん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            九千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">
            <span className="text-sky-400">10,000</span>
          </TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            <span className="text-sky-400">いちまん</span>
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            <span className="text-sky-400">一万</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">20,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">にまん</TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            二万
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3"></TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            <div className="text-center">...</div>
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">80,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            はちまん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            八万
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/3">90,000</TableCell>
          <TableCell className="w-1/3 font-japanese text-xl">
            きゅうまん
          </TableCell>
          <TableCell className="w-1/3 text-right font-japanese text-xl">
            九万
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
