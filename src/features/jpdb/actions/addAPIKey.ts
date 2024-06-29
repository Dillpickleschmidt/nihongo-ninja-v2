"use server"
import supabaseServer from "@/lib/supabase/server"
import { redirect } from "next/navigation"

type ActionResponse = {
  data: any | null
  error: string | null
}

export default async function addAPIKey(
  formData: FormData,
): Promise<void | ActionResponse> {
  const supabase = supabaseServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth")
  }

  const apiKey = formData.get("apiKey")
  const url = "https://jpdb.io/api/v1/ping"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      const error = await response.text()
      return { data: null, error }
    }
    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
