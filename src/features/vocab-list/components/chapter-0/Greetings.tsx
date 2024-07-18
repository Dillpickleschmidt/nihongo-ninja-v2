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
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おはよう。</TableCell>
          <TableCell className="text-muted-foreground">Ohayou.</TableCell>
          <TableCell className="text-right">Good morning.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            おはようございます。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Ohayou gozaimasu.
          </TableCell>
          <TableCell className="text-right">Good morning. (polite)</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">こんにちは。</TableCell>
          <TableCell className="text-muted-foreground">Konnichiwa.</TableCell>
          <TableCell className="text-right">Good afternoon., Hello.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">こんばんは。</TableCell>
          <TableCell className="text-muted-foreground">Konbanwa.</TableCell>
          <TableCell className="text-right">Good evening.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">またね。</TableCell>
          <TableCell className="text-muted-foreground">Mata ne.</TableCell>
          <TableCell className="text-right">See you., Bye.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">じゃあね。</TableCell>
          <TableCell className="text-muted-foreground">Jaa ne.</TableCell>
          <TableCell className="text-right">See you later.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">さようなら。</TableCell>
          <TableCell className="text-muted-foreground">Sayounara.</TableCell>
          <TableCell className="text-right">Goodbye.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ようこそ。</TableCell>
          <TableCell className="text-muted-foreground">Youkoso.</TableCell>
          <TableCell className="text-right">Welcome.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
