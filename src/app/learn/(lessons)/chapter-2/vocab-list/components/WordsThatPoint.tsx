import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import { enhanceVocabWithKanaAndRuby } from "@/features/vocab-data-parsers"

export default async function WordsThatPoint() {
  const data = await fetchVocabularyByPath("chapter-2/words-that-point")
  const enhancedData = enhanceVocabWithKanaAndRuby(data, true)

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Kanji</TableHead>
            <TableHead className="w-1/2 text-right">English</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-base">
          {data.map((entry, index) => (
            <>
              {entry.word && entry.word != "誰" && (
                <TableRow key={index}>
                  <TableCell className="font-japanese text-xl">
                    {entry.word}
                  </TableCell>
                  <TableCell className="text-right">
                    {entry.english?.join(", ")}
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableBody className="text-base">
          {enhancedData.map((entry, index) => (
            <TableRow key={index}>
              {entry.hiragana && entry.hiragana[0] === "だれ" && (
                <>
                  <TableCell className="w-1/3 font-japanese text-xl">
                    {entry.word}
                  </TableCell>
                  <TableCell className="w-1/3 font-japanese text-xl">
                    {entry.hiragana}
                  </TableCell>
                  <TableCell className="w-1/3 text-right">
                    {entry.english?.join(", ")}
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
