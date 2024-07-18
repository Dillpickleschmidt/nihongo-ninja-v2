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
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ぜろ・れい</TableCell>
          <TableCell className="text-muted-foreground">zero/rei</TableCell>
          <TableCell className="text-right">Zero</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">いち</TableCell>
          <TableCell className="text-muted-foreground">ichi</TableCell>
          <TableCell className="text-right">One</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">に</TableCell>
          <TableCell className="text-muted-foreground">ni</TableCell>
          <TableCell className="text-right">Two</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">さん</TableCell>
          <TableCell className="text-muted-foreground">san</TableCell>
          <TableCell className="text-right">Three</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">よん・し</TableCell>
          <TableCell className="text-muted-foreground">yon/shi</TableCell>
          <TableCell className="text-right">Four</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ご</TableCell>
          <TableCell className="text-muted-foreground">go</TableCell>
          <TableCell className="text-right">Five</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ろく</TableCell>
          <TableCell className="text-muted-foreground">roku</TableCell>
          <TableCell className="text-right">Six</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">なな・しち</TableCell>
          <TableCell className="text-muted-foreground">shichi/nana</TableCell>
          <TableCell className="text-right">Seven</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">はち</TableCell>
          <TableCell className="text-muted-foreground">hachi</TableCell>
          <TableCell className="text-right">Eight</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">きゅう・く</TableCell>
          <TableCell className="text-muted-foreground">kyuu/ku</TableCell>
          <TableCell className="text-right">Nine</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">じゅう</TableCell>
          <TableCell className="text-muted-foreground">juu</TableCell>
          <TableCell className="text-right">Ten</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
