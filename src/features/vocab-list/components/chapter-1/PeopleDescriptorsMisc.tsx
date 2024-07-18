import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function PeopleDescriptorsMisc() {
  return (
    <Table>
      {/* <TableCaption>People, Descriptors, & Misc.</TableCaption> */}
      <TableHeader>
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">わたし</TableCell>
          <TableCell className="text-muted-foreground">Watashi</TableCell>
          <TableCell className="text-right">I</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ともだち</TableCell>
          <TableCell className="text-muted-foreground">Tomodachi</TableCell>
          <TableCell className="text-right">Friend</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">～じん</TableCell>
          <TableCell className="text-muted-foreground">...jin</TableCell>
          <TableCell className="text-right">...people</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">にほんじん</TableCell>
          <TableCell className="text-muted-foreground">Nihonjin</TableCell>
          <TableCell className="text-right">Japanese people</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ばんごう</TableCell>
          <TableCell className="text-muted-foreground">Bangō</TableCell>
          <TableCell className="text-right">Number</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">なまえ</TableCell>
          <TableCell className="text-muted-foreground">Namae</TableCell>
          <TableCell className="text-right">Name</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">みんな</TableCell>
          <TableCell className="text-muted-foreground">Min'na</TableCell>
          <TableCell className="text-right">Everyone / All</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">なん/なに</TableCell>
          <TableCell className="text-muted-foreground">Nan/Nani</TableCell>
          <TableCell className="text-right">What</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">あのう</TableCell>
          <TableCell className="text-muted-foreground">Anō</TableCell>
          <TableCell className="text-right">Um...</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">はい</TableCell>
          <TableCell className="text-muted-foreground">Hai</TableCell>
          <TableCell className="text-right">Yes</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">そうです</TableCell>
          <TableCell className="text-muted-foreground">Sō desu</TableCell>
          <TableCell className="text-right">That's right.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">そうですか</TableCell>
          <TableCell className="text-muted-foreground">Sō desu ka</TableCell>
          <TableCell className="text-right">I see / Is that so?</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">～さん</TableCell>
          <TableCell className="text-muted-foreground">...san</TableCell>
          <TableCell className="text-right">Mr. / Mrs. / Ms.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
