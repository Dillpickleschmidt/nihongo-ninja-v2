import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function FamilySchool() {
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
          <TableCell className="font-japanese text-xl">おかあさん</TableCell>
          <TableCell className="text-muted-foreground">Okaasan</TableCell>
          <TableCell className="text-right">Mother</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おとうさん</TableCell>
          <TableCell className="text-muted-foreground">Otōsan</TableCell>
          <TableCell className="text-right">Father</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おねえさん</TableCell>
          <TableCell className="text-muted-foreground">Oneesan</TableCell>
          <TableCell className="text-right">Older sister</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おにいさん</TableCell>
          <TableCell className="text-muted-foreground">Oniisan</TableCell>
          <TableCell className="text-right">Older brother</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">いもうと</TableCell>
          <TableCell className="text-muted-foreground">Imōto</TableCell>
          <TableCell className="text-right">Younger sister</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おとうと</TableCell>
          <TableCell className="text-muted-foreground">Otōto</TableCell>
          <TableCell className="text-right">Younger brother</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おじいさん</TableCell>
          <TableCell className="text-muted-foreground">Ojiisan</TableCell>
          <TableCell className="text-right">Grandfather</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おばあさん</TableCell>
          <TableCell className="text-muted-foreground">Obaasan</TableCell>
          <TableCell className="text-right">Grandmother</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おばさん</TableCell>
          <TableCell className="text-muted-foreground">Obasan</TableCell>
          <TableCell className="text-right">Aunt</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おじさん</TableCell>
          <TableCell className="text-muted-foreground">Ojisan</TableCell>
          <TableCell className="text-right">Uncle</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">だいがく</TableCell>
          <TableCell className="text-muted-foreground">Daigaku</TableCell>
          <TableCell className="text-right">College / University</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">こうこう</TableCell>
          <TableCell className="text-muted-foreground">Kōkō</TableCell>
          <TableCell className="text-right">High school</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">がくせい</TableCell>
          <TableCell className="text-muted-foreground">Gakusei</TableCell>
          <TableCell className="text-right">Student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">だいがくせい</TableCell>
          <TableCell className="text-muted-foreground">Daigakusei</TableCell>
          <TableCell className="text-right">College student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            りゅうがくせい
          </TableCell>
          <TableCell className="text-muted-foreground">Ryuugakusei</TableCell>
          <TableCell className="text-right">International student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">～ねんせい</TableCell>
          <TableCell className="text-muted-foreground">...nensei</TableCell>
          <TableCell className="text-right">...year student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">いちねんせい</TableCell>
          <TableCell className="text-muted-foreground">Ichinensei</TableCell>
          <TableCell className="text-right">First-year student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">せんこう</TableCell>
          <TableCell className="text-muted-foreground">Senkō</TableCell>
          <TableCell className="text-right">Major</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
