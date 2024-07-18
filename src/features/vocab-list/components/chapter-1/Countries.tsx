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
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">にほん</TableCell>
          <TableCell className="text-muted-foreground">Nihon</TableCell>
          <TableCell className="text-right">Japan</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">アメリカ</TableCell>
          <TableCell className="text-muted-foreground">Amerika</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">America</span> /{" "}
            <span className="whitespace-nowrap">USA</span>
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">イギリス</TableCell>
          <TableCell className="text-muted-foreground">Igirisu</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">UK</span> /{" "}
            <span className="whitespace-nowrap">Britain</span>
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            オーストラリア
          </TableCell>
          <TableCell className="text-muted-foreground">Ōsutoraria</TableCell>
          <TableCell className="text-right">Australia</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">かんこく</TableCell>
          <TableCell className="text-muted-foreground">Kankoku</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Korea</span> /{" "}
            <span className="whitespace-nowrap">South Korea</span>
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">カナダ</TableCell>
          <TableCell className="text-muted-foreground">Kanada</TableCell>
          <TableCell className="text-right">Canada</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ちゅうごく</TableCell>
          <TableCell className="text-muted-foreground">Chuugoku</TableCell>
          <TableCell className="text-right">China</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">インド</TableCell>
          <TableCell className="text-muted-foreground">Indo</TableCell>
          <TableCell className="text-right">India</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">エジプト</TableCell>
          <TableCell className="text-muted-foreground">Ejiputo</TableCell>
          <TableCell className="text-right">Egypt</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">フィリピン</TableCell>
          <TableCell className="text-muted-foreground">Firipin</TableCell>
          <TableCell className="text-right">Philippines</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
