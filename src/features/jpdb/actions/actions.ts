"use server"
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

export async function createEmptyDeck() {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()

  if (supabaseError || !user) {
    redirect("/auth")
  }
  const url = "https://jpdb.io/api/v1/deck/create-empty"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 123",
    },
    body: '{"name":"NihongoNinja Test","position":0}',
  }

  const { data, error } = await myFetch(url, options)
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
}

export async function getDeck(deckName: string, apiKey: string) {
  const supabase = supabaseServer()

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
