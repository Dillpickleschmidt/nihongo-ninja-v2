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

export default async function C13Nouns() {
  const data = await fetchVocabularyByPath("chapter-13/nouns")
  const enhancedData = enhanceVocabWithKanaAndRuby(data, true)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Kanji</TableHead>
          <TableHead className="w-1/3">Hiragana</TableHead>
          <TableHead className="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        {enhancedData.map((entry, index) => (
          <TableRow key={index}>
            <TableCell className="p-2 font-japanese text-xl">
              {entry.word}
            </TableCell>
            <TableCell className="p-2 font-japanese text-xl">
              {entry.hiragana}
            </TableCell>
            <TableCell className="p-2 text-right">
              {entry.english?.join(", ")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
