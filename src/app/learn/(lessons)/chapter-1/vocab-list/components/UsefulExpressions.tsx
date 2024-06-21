import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UsefulExpressions() {
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
            はじめまして。
          </TableCell>
          <TableCell>Hajimemashite.</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">How do you do.</span> /{" "}
            <span className="whitespace-nowrap">Nice to meet you.</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            <span className="text-lg">[your name]</span>です。
          </TableCell>
          <TableCell>[your name] desu.</TableCell>
          <TableCell className="text-right">I am [your name].</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            しゅっしんは<span className="text-lg">[your hometown]</span>です。
          </TableCell>
          <TableCell>Shusshin wa [your hometown] desu.</TableCell>
          <TableCell className="text-right">
            I came from [your hometown].
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            どうぞよろしくおねがいします。
          </TableCell>
          <TableCell>Dōzo yoroshiku onegaishimasu.</TableCell>
          <TableCell className="text-right">
            Very pleased to meet you.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            おなまえは？
          </TableCell>
          <TableCell>Onamae wa?</TableCell>
          <TableCell className="text-right">What is your name?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            せんせい
          </TableCell>
          <TableCell>Sensei</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Teacher</span> /{" "}
            <span className="whitespace-nowrap">Professor</span> /{" "}
            <span className="whitespace-nowrap">Dr.</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            あのう、すみません。
          </TableCell>
          <TableCell>Anō, sumimasen.</TableCell>
          <TableCell className="text-right">Ummm, excuse me</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            しつもんがあります。
          </TableCell>
          <TableCell>Shitsumon ga arimasu.</TableCell>
          <TableCell className="text-right">I have a question.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            もういちどおねがいします。
          </TableCell>
          <TableCell>Mōichido onegaishimasu.</TableCell>
          <TableCell className="text-right">One more time, please.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            もうちょっとゆっくりおねがいします。
          </TableCell>
          <TableCell>Mōchotto yukkuri onegaishimasu.</TableCell>
          <TableCell className="text-right">A little slower, please.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            どうもありがとうございます。
          </TableCell>
          <TableCell>Dōmo arigatō gozaimasu.</TableCell>
          <TableCell className="text-right">Thank you very much.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            しつれいします。
          </TableCell>
          <TableCell>Shitsurei shimasu.</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Excuse me</span> / Please excuse
            my interrupting you
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            かいてください。
          </TableCell>
          <TableCell>Kaite kudasai.</TableCell>
          <TableCell className="text-right">Please write.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            すみませんが、えいごでいいですか。
          </TableCell>
          <TableCell>Sumimasen ga, eigo de ii desu ka?</TableCell>
          <TableCell className="text-right">
            Excuse me but is English okay?
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
