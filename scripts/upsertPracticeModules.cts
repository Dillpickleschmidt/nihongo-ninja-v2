// scripts/upsertPracticeModules.mts
import { createClient, SupabaseClient } from "@supabase/supabase-js"
import dotenv from "dotenv"
import path from "path"

// Load environment variables from .env.local file
dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

// Supabase API URL and key
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SERVICE_ROLE

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  throw new Error("Supabase URL and Service Role Key are required.")
}

// Create a Supabase client
const supabase: SupabaseClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

type PracticeModule = {
  path: string
  word: string
}

async function upsertPracticeModules(
  path: string,
  words: string[],
): Promise<void> {
  const entries: PracticeModule[] = words.map((word) => ({
    path: path,
    word: word,
  }))

  const { data, error } = await supabase
    .from("practice_modules")
    .upsert(entries, { onConflict: "word, path" }) // Handle conflicts on both columns
    .select()

  if (error) {
    console.error(
      "Error upserting practice modules. Make sure the words already exist in vocabulary array of the database:",
      error,
    )
    return
  }
  // Success
  console.log("Upserted practice modules:", data)
}

// Example usage
const url_path = "chapter-0/practice-greetings-common-expressions"
const practice_words = [
  "おはようございます",
  "こんにちは",
  "こんばんは",
  "じゃあね",
  "またね",
  "ありがとうございます",
  "さようなら",
  "すみません",
  "いいえ",
  "おやすみ",
  "おやすみなさい",
  "いってきます",
  "いってらっしゃい",
  "ただいま",
  "おかえり",
  "おかえりなさい",
  "いただきます",
  "ごちそうさまでした",
  "はじめまして",
  "よろしく おねがいします",
]

upsertPracticeModules(url_path, practice_words).then(() => {
  console.log("Upsert operation completed.")
})
