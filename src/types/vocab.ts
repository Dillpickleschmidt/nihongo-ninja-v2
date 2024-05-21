type Video = {
  src?: string
  title?: string
  origin?: string
}
type VocabEntry = {
  furigana?: string[]
  english?: string[]
  mnemonics?: string[]
  videos?: Video[]
}
export type VocabCardProps = {
  data: Record<string, VocabEntry>
}
