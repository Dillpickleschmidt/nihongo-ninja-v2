import supabaseServer from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const supabase = supabaseServer()
    await supabase.auth.exchangeCodeForSession(code)
    console.log("Code exchanged for session")
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}/learn`)
}
