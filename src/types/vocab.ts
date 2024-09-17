export type Video = Partial<Database["public"]["Tables"]["videos"]["Row"]> & {
  // Require src property (not optional)
  src: string
  title?: string | null
  origin?: string | null
}

// Partial makes all properties optional
export type VocabEntry = Partial<
  Database["public"]["Tables"]["vocabulary"]["Row"]
> & {
  // Require word property (not optional)
  word: string
  videos?: Video[]
}

export type EnhancedVocabEntry = VocabEntry & {
  hiragana?: string[]
  rubyText?: string[]
}
