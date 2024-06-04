const { createClient } = require("@supabase/supabase-js")
const fs = require("fs")
const path = require("path")
const dotenv = require("dotenv")

// Load environment variables from .env.local file
dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

// Supabase API URL and key
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SERVICE_ROLE

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  throw new Error("Supabase URL and Service Role Key are required.")
}

// Create a Supabase client
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

// Types for the data structure
type Video = {
  src: string
  title: string
  origin: string
}

type VocabularyEntry = {
  furigana?: string[]
  english?: string[]
  mnemonics?: string[]
  info?: string[]
  example_sentences?: string[]
  chapter?: number
  videos?: Video[]
}

// Read JSON file
function readJSONFile(filePath: string): Record<string, VocabularyEntry> {
  return JSON.parse(fs.readFileSync(filePath, "utf8"))
}

// Transform data structure
function transformData(
  data: Record<string, VocabularyEntry>,
): (VocabularyEntry & { word: string })[] {
  return Object.entries(data).map(([word, properties]) => {
    return { word, ...properties }
  })
}

// Filter data based on toggles
function filterData(
  data: (VocabularyEntry & { word: string })[],
  toggles: Record<string, boolean>,
): (VocabularyEntry & { word: string })[] {
  return data.map((entry) => {
    const filteredEntry: Partial<VocabularyEntry> & { word: string } = {
      word: entry.word,
    } // Ensure word is always included
    for (const key of Object.keys(toggles)) {
      if (toggles[key] && entry[key as keyof VocabularyEntry] !== undefined) {
        // Type assertion to avoid TypeScript type errors
        // Assign the value to the filtered entry
        ;(filteredEntry as any)[key as keyof VocabularyEntry] =
          entry[key as keyof VocabularyEntry]
      }
    }
    return filteredEntry as VocabularyEntry & { word: string }
  })
}

// Upsert new vocabulary data
async function upsertVocabulary(
  entries: (VocabularyEntry & { word: string })[],
) {
  const entriesWithoutVideos = entries.map(({ videos, ...entry }) => entry)
  const { data, error } = await supabase
    .from("vocabulary")
    .upsert(entriesWithoutVideos)
    .select()

  if (error) {
    throw error
  }

  console.log(`Vocabulary data upserted successfully:`, data)
}

// Upsert video data
async function upsertVideos(entries: (Video & { word: string })[]) {
  const { data, error } = await supabase.from("videos").upsert(entries).select()

  if (error) {
    throw error
  }

  console.log(`Video data upserted successfully:`, data)
}

// Insert or update data into Supabase
async function insertOrUpdateData(
  filePath: string,
  toggles: Record<string, boolean>,
) {
  try {
    const jsonData = readJSONFile(filePath)
    const transformedData = transformData(jsonData)
    const filteredData = filterData(transformedData, toggles)

    const videoEntries: { word: string; videos: Video[] }[] = []

    for (const entry of filteredData) {
      // Separate videos from vocabulary data
      const { word, videos } = entry
      if (videos && videos.length > 0) {
        videoEntries.push({ word, videos })
      }
    }

    if (filteredData.length > 0) {
      await upsertVocabulary(filteredData)
    }

    if (videoEntries.length > 0) {
      // Flatten the video entries
      const videoData = videoEntries.flatMap((entry) =>
        entry.videos.map((video) => ({
          word: entry.word,
          src: video.src,
          title: video.title,
          origin: video.origin,
        })),
      )

      await upsertVideos(videoData)
    }
  } catch (error) {
    console.error("Error inserting or updating data:", error)
  }
}

// Example usage
const filePath = path.join(__dirname, "../src/data/chapter-0/test-data.json")
const toggles = {
  furigana: true,
  english: true,
  mnemonics: true,
  info: true,
  example_sentences: true,
  chapter: true,
  videos: true,
}

insertOrUpdateData(filePath, toggles)
