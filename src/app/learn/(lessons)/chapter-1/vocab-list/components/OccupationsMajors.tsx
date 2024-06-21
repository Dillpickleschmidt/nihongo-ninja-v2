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
        <TableRow>
          <TableHead>Hiragana</TableHead>
          <TableHead>Romaji</TableHead>
          <TableHead className="text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いしゃ
          </TableCell>
          <TableCell>Isha</TableCell>
          <TableCell className="text-right">Doctor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            かいしゃいん
          </TableCell>
          <TableCell>Kaishain</TableCell>
          <TableCell className="text-right">Office worker</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            かんごし
          </TableCell>
          <TableCell>Kangoshi</TableCell>
          <TableCell className="text-right">Nurse</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こうこうせい
          </TableCell>
          <TableCell>Kōkōsei</TableCell>
          <TableCell className="text-right">High school student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            しゅふ
          </TableCell>
          <TableCell>Shufu</TableCell>
          <TableCell className="text-right">Housewife</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            だいがくいんせい
          </TableCell>
          <TableCell>Daigakuinsei</TableCell>
          <TableCell className="text-right">Graduate student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            べんごし
          </TableCell>
          <TableCell>Bengoshi</TableCell>
          <TableCell className="text-right">Lawyer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            アジアけんきゅう
          </TableCell>
          <TableCell>Ajia kenkyuu</TableCell>
          <TableCell className="text-right">Asian studies</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            けいざい
          </TableCell>
          <TableCell>Keizai</TableCell>
          <TableCell className="text-right">Economics</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こうがく
          </TableCell>
          <TableCell>Kōgaku</TableCell>
          <TableCell className="text-right">Engineering</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こくさいかんけい
          </TableCell>
          <TableCell>Kokusai kankei</TableCell>
          <TableCell className="text-right">International relations</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            コンピューター
          </TableCell>
          <TableCell>Konpyuutaa</TableCell>
          <TableCell className="text-right">Computer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            せいじ
          </TableCell>
          <TableCell>Seiji</TableCell>
          <TableCell className="text-right">Politics</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            せいぶつがく
          </TableCell>
          <TableCell>Seibutsugaku</TableCell>
          <TableCell className="text-right">Biology</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ビジネス
          </TableCell>
          <TableCell>Bijinesu</TableCell>
          <TableCell className="text-right">Business</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ぶんがく
          </TableCell>
          <TableCell>Bungaku</TableCell>
          <TableCell className="text-right">Literature</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            れきし
          </TableCell>
          <TableCell>Rekishi</TableCell>
          <TableCell className="text-right">History</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
