import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function PeopleDescriptorsMisc() {
  const data = await fetchVocabularyByPath("chapter-1/people-descriptors-misc")

  return (
    <Table>
      {/* <TableCaption>People, Descriptors, & Misc.</TableCaption> */}
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
            わたし
          </TableCell>
          <TableCell>Watashi</TableCell>
          <TableCell className="text-right">I</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ともだち
          </TableCell>
          <TableCell>Tomodachi</TableCell>
          <TableCell className="text-right">Friend</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ～じん
          </TableCell>
          <TableCell>...jin</TableCell>
          <TableCell className="text-right">...people</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            にほんじん
          </TableCell>
          <TableCell>Nihonjin</TableCell>
          <TableCell className="text-right">Japanese people</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ばんごう
          </TableCell>
          <TableCell>Bangō</TableCell>
          <TableCell className="text-right">Number</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            なまえ
          </TableCell>
          <TableCell>Namae</TableCell>
          <TableCell className="text-right">Name</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            みんな
          </TableCell>
          <TableCell>Min'na</TableCell>
          <TableCell className="text-right">Everyone / All</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            なん/なに
          </TableCell>
          <TableCell>Nan/Nani</TableCell>
          <TableCell className="text-right">What</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            あのう
          </TableCell>
          <TableCell>Anō</TableCell>
          <TableCell className="text-right">Um...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            はい
          </TableCell>
          <TableCell>Hai</TableCell>
          <TableCell className="text-right">Yes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            そうです
          </TableCell>
          <TableCell>Sō desu</TableCell>
          <TableCell className="text-right">That's right.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            そうですか
          </TableCell>
          <TableCell>Sō desu ka</TableCell>
          <TableCell className="text-right">I see / Is that so?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-japanese text-xl font-medium">
            ～さん
          </TableCell>
          <TableCell>...san</TableCell>
          <TableCell className="text-right">Mr. / Mrs. / Ms.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
