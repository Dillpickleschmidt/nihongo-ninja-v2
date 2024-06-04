import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Log request path for debugging
  // console.log("Request path:", request.nextUrl.pathname)
  // console.log("User:", user)

  // Specify the paths you want to allow
  const allowedPaths = ["/", "/learn"]

  // Check if the path starts with /learn or is the root path
  const isAllowedPath =
    allowedPaths.includes(request.nextUrl.pathname) ||
    request.nextUrl.pathname.startsWith("/learn/") ||
    request.nextUrl.pathname.startsWith("/auth")

  // Check if the user is on the auth page
  const isAuthPage = request.nextUrl.pathname === "/auth"

  // Redirect if the user is not authenticated, not on an allowed path, and not on the auth page
  if (!user && !isAllowedPath && !isAuthPage) {
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
