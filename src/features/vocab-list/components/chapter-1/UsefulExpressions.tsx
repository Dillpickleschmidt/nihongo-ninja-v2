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
        <TableRow className="[&>*]:p-2">
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3">Romaji</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            はじめまして。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Hajimemashite.
          </TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">How do you do.</span> /{" "}
            <span className="whitespace-nowrap">Nice to meet you.</span>
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            <span className="text-lg">[your name]</span>です。
          </TableCell>
          <TableCell className="text-muted-foreground">
            [your name] desu.
          </TableCell>
          <TableCell className="text-right">I am [your name].</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            しゅっしんは<span className="text-lg">[your hometown]</span>です。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Shusshin wa [your hometown] desu.
          </TableCell>
          <TableCell className="text-right">
            I came from [your hometown].
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            どうぞよろしくおねがいします。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Dōzo yoroshiku onegaishimasu.
          </TableCell>
          <TableCell className="text-right">
            Very pleased to meet you.
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">おなまえは？</TableCell>
          <TableCell className="text-muted-foreground">Onamae wa?</TableCell>
          <TableCell className="text-right">What is your name?</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">せんせい</TableCell>
          <TableCell className="text-muted-foreground">Sensei</TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Teacher</span> /{" "}
            <span className="whitespace-nowrap">Professor</span> /{" "}
            <span className="whitespace-nowrap">Dr.</span>
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            あのう、すみません。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Anō, sumimasen.
          </TableCell>
          <TableCell className="text-right">Ummm, excuse me</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            しつもんがあります。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Shitsumon ga arimasu.
          </TableCell>
          <TableCell className="text-right">I have a question.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            もういちどおねがいします。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Mōichido onegaishimasu.
          </TableCell>
          <TableCell className="text-right">One more time, please.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            もうちょっとゆっくりおねがいします。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Mōchotto yukkuri onegaishimasu.
          </TableCell>
          <TableCell className="text-right">A little slower, please.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            どうもありがとうございます。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Dōmo arigatō gozaimasu.
          </TableCell>
          <TableCell className="text-right">Thank you very much.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            しつれいします。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Shitsurei shimasu.
          </TableCell>
          <TableCell className="text-right">
            <span className="whitespace-nowrap">Excuse me</span> / Please excuse
            my interrupting you
          </TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            かいてください。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Kaite kudasai.
          </TableCell>
          <TableCell className="text-right">Please write.</TableCell>
        </TableRow>
        <TableRow className="[&>*]:p-2">
          <TableCell className="font-japanese text-xl">
            すみませんが、えいごでいいですか。
          </TableCell>
          <TableCell className="text-muted-foreground">
            Sumimasen ga, eigo de ii desu ka?
          </TableCell>
          <TableCell className="text-right">
            Excuse me but is English okay?
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
