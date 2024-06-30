"use server"

import { redirect } from "next/navigation"
import supabaseServer from "./server"

export async function getUser() {
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
