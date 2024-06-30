"use server"

import { redirect } from "next/navigation"
import supabaseServer from "./server"

export async function getUserRedirect() {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()
  if (supabaseError) {
    throw supabaseError
  } else if (!user) {
    redirect("/auth")
  } else {
    return user
  }
}

export async function getUser() {
  const supabase = supabaseServer()
  const {
    data: { user },
    error: supabaseError,
  } = await supabase.auth.getUser()
  if (supabaseError) {
    throw supabaseError
  } else {
    return user
  }
}
