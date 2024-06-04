import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/middleware"
import { getAllowedPaths } from "@/features/auth/allowedPaths"

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Log request path for debugging
  // console.log("Request path:", request.nextUrl.pathname)
  // console.log("User:", user)

  // Check if the path is allowed
  const isAllowedPath = getAllowedPaths(request.nextUrl.pathname, user)

  // Redirect if the user is not authenticated, not on an allowed path, and not on the auth page
  if (!user && !isAllowedPath) {
    console.log("Redirecting to auth")
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  // console.log("Returning response")
  return response
}

export const config = {
  matcher: [
    // Apply the middleware to all routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
