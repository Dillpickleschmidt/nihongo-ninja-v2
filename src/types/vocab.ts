export type Video = {
  src?: string
  title?: string
  origin?: string
}
export type VocabEntry = {
  furigana?: string[]
  english?: string[]
  info?: string[]
  mnemonics?: string[]
  videos?: Video[]
}
export type VocabData = {
  data: Record<string, VocabEntry>
}
