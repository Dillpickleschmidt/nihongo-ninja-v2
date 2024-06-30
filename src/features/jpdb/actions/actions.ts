"use server"
import { getUser } from "@/lib/supabase/databaseFunctions"
import supabaseServer from "@/lib/supabase/server"
import { redirect } from "next/navigation"

type ActionResponse = {
  data: any | null
  error: string | null
}

async function myFetch(
  url: string,
  options: RequestInit,
): Promise<ActionResponse> {
  const response = await fetch(url, options)
  if (!response.ok) {
    const error = await response.text()
    return { data: null, error }
  }
  const data = await response.json()
  return { data, error: null }
}

export async function addAPIKey(formData: FormData) {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()

  if (supabaseError || !user) {
    redirect("/auth")
  }

  const apiKey = formData.get("apiKey")
  const response = await supabase
    .from("profiles")
    .update({ jpdb_api_key: `${apiKey}` })
    .eq("id", `${user.id}`)
    .select()
  return response
}

export async function getJpdbApiKey() {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()

  if (supabaseError || !user) {
    return { data: null, error: "User must be logged in to add API key." }
  }
  const { data, error } = await supabase
    .from("profiles")
    .select("jpdb_api_key")
    .eq("id", user?.id)
    .single()
  if (error) {
    return { data: null, error }
  }
  return { data: data.jpdb_api_key, error: null }
}

export async function getDeck(deckName: string, apiKey: string) {
  const url = "https://jpdb.io/api/v1/list-user-decks"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: '{"fields":["name"]}',
  }

  const response = await myFetch(url, options)
  if (response.error) {
    return response // error
  }
  if (response.data.decks) {
    for (const deckGroup of response.data.decks) {
      if (deckGroup[0] === deckName) {
        return { data: `found deck: ${deckGroup[0]}`, error: null }
      }
    }
  }
  return { data: null, error: "Deck not found" }
}

async function createEmptyDeck(deckName: string, apiKey: string) {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()

  if (supabaseError || !user) {
    return { data: null, error: "User must be logged in to add API key." }
  }
  const url = "https://jpdb.io/api/v1/deck/create-empty"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: `{"name": "${deckName}","position":0}`,
  }

  const response = await myFetch(url, options)
  return response
}

export async function addDeck(deckName: string) {
  const { data: apiKey, error: apiKeyError } = await getJpdbApiKey()
  if (apiKeyError) {
    return { data: null, error: apiKeyError }
  }
  const fetchedDeck = await getDeck(deckName, apiKey)
  if (fetchedDeck.data) {
    return { data: "Deck already exists", error: null }
  } else {
    const response = await createEmptyDeck(deckName, apiKey)
    return response
  }
}
