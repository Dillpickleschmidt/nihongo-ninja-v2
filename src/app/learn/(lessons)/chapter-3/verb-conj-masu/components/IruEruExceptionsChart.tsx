import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"

export default function GodanRuVerbsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Dictionary Form</TableHead>
          <TableHead className="text-center">
            <span className="font-japanese text-base font-semibold">ます</span>{" "}
            Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center text-xl font-medium">
        <TableRow>
          <TableCell>
            <Romaji romaji="to return home">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">かえ</span>}>
                  帰
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will return home">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">かえ</span>}>
                  帰
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to enter">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">はい</span>}>
                  入
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will enter">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">はい</span>}>
                  入
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to run">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">はし</span>}>
                  走
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will run">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">はし</span>}>
                  走
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to need">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">い</span>}>
                  要
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will need">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">い</span>}>
                  要
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to limit">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">かぎ</span>}>
                  限
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will limit">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">かぎ</span>}>
                  限
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to know">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">し</span>}>
                  知
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will know">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">し</span>}>
                  知
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to cut">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">き</span>}>
                  切
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will cut">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">き</span>}>
                  切
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to chat">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">しゃべ</span>}>
                  喋
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will chat">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">しゃべ</span>}>
                  喋
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to kick">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">け</span>}>
                  蹴
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will kick">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">け</span>}>
                  蹴
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to slide">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">すべ</span>}>
                  滑
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will slide">
              <span className="font-japanese text-2xl">
                <Furigana furigana={<span className="text-sm">すべ</span>}>
                  滑
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
