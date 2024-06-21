import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Numbers() {
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
            ぜろ・れい
          </TableCell>
          <TableCell>zero/rei</TableCell>
          <TableCell className="text-right">Zero</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いち
          </TableCell>
          <TableCell>ichi</TableCell>
          <TableCell className="text-right">One</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            に
          </TableCell>
          <TableCell>ni</TableCell>
          <TableCell className="text-right">Two</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            さん
          </TableCell>
          <TableCell>san</TableCell>
          <TableCell className="text-right">Three</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            よん・し
          </TableCell>
          <TableCell>yon/shi</TableCell>
          <TableCell className="text-right">Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ご
          </TableCell>
          <TableCell>go</TableCell>
          <TableCell className="text-right">Five</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ろく
          </TableCell>
          <TableCell>roku</TableCell>
          <TableCell className="text-right">Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            なな・しち
          </TableCell>
          <TableCell>shichi/nana</TableCell>
          <TableCell className="text-right">Seven</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            はち
          </TableCell>
          <TableCell>hachi</TableCell>
          <TableCell className="text-right">Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            きゅう・く
          </TableCell>
          <TableCell>kyuu/ku</TableCell>
          <TableCell className="text-right">Nine</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            じゅう
          </TableCell>
          <TableCell>juu</TableCell>
          <TableCell className="text-right">Ten</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
