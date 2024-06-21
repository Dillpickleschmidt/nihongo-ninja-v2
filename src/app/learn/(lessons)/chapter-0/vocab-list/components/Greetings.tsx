import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Greetings() {
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
            おはよう。
          </TableCell>
          <TableCell>Ohayou.</TableCell>
          <TableCell className="text-right">Good morning.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おはようございます。
          </TableCell>
          <TableCell>Ohayou gozaimasu.</TableCell>
          <TableCell className="text-right">Good morning. (polite)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こんにちは。
          </TableCell>
          <TableCell>Konnichiwa.</TableCell>
          <TableCell className="text-right">Good afternoon., Hello.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こんばんは。
          </TableCell>
          <TableCell>Konbanwa.</TableCell>
          <TableCell className="text-right">Good evening.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            またね。
          </TableCell>
          <TableCell>Mata ne.</TableCell>
          <TableCell className="text-right">See you., Bye.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            じゃあね。
          </TableCell>
          <TableCell>Jaa ne.</TableCell>
          <TableCell className="text-right">See you later.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            さようなら。
          </TableCell>
          <TableCell>Sayounara.</TableCell>
          <TableCell className="text-right">Goodbye.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ようこそ。
          </TableCell>
          <TableCell>Youkoso.</TableCell>
          <TableCell className="text-right">Welcome.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
