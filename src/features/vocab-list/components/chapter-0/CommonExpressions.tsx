import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CommonExpressions() {
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
          <TableCell className="font-japanese text-xl">すみません</TableCell>
          <TableCell className="text-muted-foreground">sumimasen</TableCell>
          <TableCell className="text-right">Excuse me., Sorry.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">いいえ</TableCell>
          <TableCell className="text-muted-foreground">iie</TableCell>
          <TableCell className="text-right">No</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            いってきます。
          </TableCell>
          <TableCell className="text-muted-foreground">Itte kimasu.</TableCell>
          <TableCell className="text-right">I'll go and come back.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            いってらっしゃい。
          </TableCell>
          <TableCell className="text-muted-foreground">Itterasshai.</TableCell>
          <TableCell className="text-right">Go and come back.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">ただいま。</TableCell>
          <TableCell className="text-muted-foreground">Tadaima.</TableCell>
          <TableCell className="text-right">I'm home.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            おかえり (なさい)。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Okaeri (nasai).
          </TableCell>
          <TableCell className="text-right">Welcome home.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            おやすみ (なさい)。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Oyasumi (nasai).
          </TableCell>
          <TableCell className="text-right">Good night. (sleeping)</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            いただきます。
          </TableCell>
          <TableCell className="text-muted-foreground">Itadakimasu.</TableCell>
          <TableCell className="text-right">Thank you for the food.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            ごちそうさま (でした)。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Gochisoo-sama (deshita).
          </TableCell>
          <TableCell className="text-right">That was delicious.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            はじめまして。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Hajimemashite.
          </TableCell>
          <TableCell className="text-right">Nice to meet you.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            よろしく おねがいします。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Yoroshiku onegai shimasu.
          </TableCell>
          <TableCell className="text-right">Please be kind to me.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
