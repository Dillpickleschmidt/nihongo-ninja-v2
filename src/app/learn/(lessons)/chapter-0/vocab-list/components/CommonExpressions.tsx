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
        <TableRow>
          <TableHead>Hiragana</TableHead>
          <TableHead>Romaji</TableHead>
          <TableHead className="text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            すみません
          </TableCell>
          <TableCell>sumimasen</TableCell>
          <TableCell className="text-right">Excuse me., Sorry.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いいえ
          </TableCell>
          <TableCell>iie</TableCell>
          <TableCell className="text-right">No</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いってきます。
          </TableCell>
          <TableCell>Itte kimasu.</TableCell>
          <TableCell className="text-right">I'll go and come back.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いってらっしゃい。
          </TableCell>
          <TableCell>Itterasshai.</TableCell>
          <TableCell className="text-right">Go and come back.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ただいま。
          </TableCell>
          <TableCell>Tadaima.</TableCell>
          <TableCell className="text-right">I'm home.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おかえり (なさい)。
          </TableCell>
          <TableCell>Okaeri (nasai).</TableCell>
          <TableCell className="text-right">Welcome home.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おやすみ (なさい)。
          </TableCell>
          <TableCell>Oyasumi (nasai).</TableCell>
          <TableCell className="text-right">Good night. (sleeping)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            いただきます。
          </TableCell>
          <TableCell>Itadakimasu.</TableCell>
          <TableCell className="text-right">Thank you for the food.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ごちそうさま (でした)。
          </TableCell>
          <TableCell>Gochisoo-sama (deshita).</TableCell>
          <TableCell className="text-right">That was delicious.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            はじめまして。
          </TableCell>
          <TableCell>Hajimemashite.</TableCell>
          <TableCell className="text-right">Nice to meet you.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            よろしく おねがいします。
          </TableCell>
          <TableCell>Yoroshiku onegai shimasu.</TableCell>
          <TableCell className="text-right">Please be kind to me.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
