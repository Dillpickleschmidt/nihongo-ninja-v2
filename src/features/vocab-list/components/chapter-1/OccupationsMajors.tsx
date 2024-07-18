import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function OccupationsMajors() {
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
          <TableCell className="font-japanese text-xl">いしゃ</TableCell>
          <TableCell className="text-muted-foreground">Isha</TableCell>
          <TableCell className="text-right">Doctor</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">かいしゃいん</TableCell>
          <TableCell className="text-muted-foreground">Kaishain</TableCell>
          <TableCell className="text-right">Office worker</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">かんごし</TableCell>
          <TableCell className="text-muted-foreground">Kangoshi</TableCell>
          <TableCell className="text-right">Nurse</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">こうこうせい</TableCell>
          <TableCell className="text-muted-foreground">Kōkōsei</TableCell>
          <TableCell className="text-right">High school student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">しゅふ</TableCell>
          <TableCell className="text-muted-foreground">Shufu</TableCell>
          <TableCell className="text-right">Housewife</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            だいがくいんせい
          </TableCell>
          <TableCell className="text-muted-foreground">Daigakuinsei</TableCell>
          <TableCell className="text-right">Graduate student</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">べんごし</TableCell>
          <TableCell className="text-muted-foreground">Bengoshi</TableCell>
          <TableCell className="text-right">Lawyer</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            アジアけんきゅう
          </TableCell>
          <TableCell className="text-muted-foreground">Ajia kenkyuu</TableCell>
          <TableCell className="text-right">Asian studies</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">けいざい</TableCell>
          <TableCell className="text-muted-foreground">Keizai</TableCell>
          <TableCell className="text-right">Economics</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">こうがく</TableCell>
          <TableCell className="text-muted-foreground">Kōgaku</TableCell>
          <TableCell className="text-right">Engineering</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            こくさいかんけい
          </TableCell>
          <TableCell className="text-muted-foreground">
            Kokusai kankei
          </TableCell>
          <TableCell className="text-right">International relations</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            コンピューター
          </TableCell>
          <TableCell className="text-muted-foreground">Konpyuutaa</TableCell>
          <TableCell className="text-right">Computer</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">せいじ</TableCell>
          <TableCell className="text-muted-foreground">Seiji</TableCell>
          <TableCell className="text-right">Politics</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">せいぶつがく</TableCell>
          <TableCell className="text-muted-foreground">Seibutsugaku</TableCell>
          <TableCell className="text-right">Biology</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ビジネス</TableCell>
          <TableCell className="text-muted-foreground">Bijinesu</TableCell>
          <TableCell className="text-right">Business</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ぶんがく</TableCell>
          <TableCell className="text-muted-foreground">Bungaku</TableCell>
          <TableCell className="text-right">Literature</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">れきし</TableCell>
          <TableCell className="text-muted-foreground">Rekishi</TableCell>
          <TableCell className="text-right">History</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
