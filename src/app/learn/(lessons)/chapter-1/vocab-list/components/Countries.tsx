import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Countries() {
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
            にほん
          </TableCell>
          <TableCell>Nihon</TableCell>
          <TableCell className="text-right">Japan</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            アメリカ
          </TableCell>
          <TableCell>Amerika</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">America</span> /{" "}
            <span className="whitespace-nowrap">USA</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            イギリス
          </TableCell>
          <TableCell>Igirisu</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">UK</span> /{" "}
            <span className="whitespace-nowrap">Britain</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            オーストラリア
          </TableCell>
          <TableCell>Ōsutoraria</TableCell>
          <TableCell className="text-right">Australia</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            かんこく
          </TableCell>
          <TableCell>Kankoku</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Korea</span> /{" "}
            <span className="whitespace-nowrap">South Korea</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            カナダ
          </TableCell>
          <TableCell>Kanada</TableCell>
          <TableCell className="text-right">Canada</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ちゅうごく
          </TableCell>
          <TableCell>Chuugoku</TableCell>
          <TableCell className="text-right">China</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            インド
          </TableCell>
          <TableCell>Indo</TableCell>
          <TableCell className="text-right">India</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            エジプト
          </TableCell>
          <TableCell>Ejiputo</TableCell>
          <TableCell className="text-right">Egypt</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            フィリピン
          </TableCell>
          <TableCell>Firipin</TableCell>
          <TableCell className="text-right">Philippines</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
