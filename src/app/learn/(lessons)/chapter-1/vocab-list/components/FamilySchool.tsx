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
        <TableRow>
          <TableHead>Hiragana</TableHead>
          <TableHead>Romaji</TableHead>
          <TableHead className="text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おかあさん
          </TableCell>
          <TableCell>Okaasan</TableCell>
          <TableCell className="text-right">Mother</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おとうさん
          </TableCell>
          <TableCell>Otōsan</TableCell>
          <TableCell className="text-right">Father</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おねえさん
          </TableCell>
          <TableCell>Oneesan</TableCell>
          <TableCell className="text-right">Older sister</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おにいさん
          </TableCell>
          <TableCell>Oniisan</TableCell>
          <TableCell className="text-right">Older brother</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いもうと
          </TableCell>
          <TableCell>Imōto</TableCell>
          <TableCell className="text-right">Younger sister</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おとうと
          </TableCell>
          <TableCell>Otōto</TableCell>
          <TableCell className="text-right">Younger brother</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おじいさん
          </TableCell>
          <TableCell>Ojiisan</TableCell>
          <TableCell className="text-right">Grandfather</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おばあさん
          </TableCell>
          <TableCell>Obaasan</TableCell>
          <TableCell className="text-right">Grandmother</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おばさん
          </TableCell>
          <TableCell>Obasan</TableCell>
          <TableCell className="text-right">Aunt</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おじさん
          </TableCell>
          <TableCell>Ojisan</TableCell>
          <TableCell className="text-right">Uncle</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            だいがく
          </TableCell>
          <TableCell>Daigaku</TableCell>
          <TableCell className="text-right">College / University</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            こうこう
          </TableCell>
          <TableCell>Kōkō</TableCell>
          <TableCell className="text-right">High school</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            がくせい
          </TableCell>
          <TableCell>Gakusei</TableCell>
          <TableCell className="text-right">Student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            だいがくせい
          </TableCell>
          <TableCell>Daigakusei</TableCell>
          <TableCell className="text-right">College student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            りゅうがくせい
          </TableCell>
          <TableCell>Ryuugakusei</TableCell>
          <TableCell className="text-right">International student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ～ねんせい
          </TableCell>
          <TableCell>...nensei</TableCell>
          <TableCell className="text-right">...year student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いちねんせい
          </TableCell>
          <TableCell>Ichinensei</TableCell>
          <TableCell className="text-right">First-year student</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            せんこう
          </TableCell>
          <TableCell>Senkō</TableCell>
          <TableCell className="text-right">Major</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
