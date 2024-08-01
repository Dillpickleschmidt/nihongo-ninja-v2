import { isAdmin } from "./adminAccess"

export function getAllowedPaths(pathname: string, user: any): boolean {
  const allowedPaths = ["/", "/learn"]

  if (isAdmin(user)) {
    // Admins are allowed to access any path
    return true
  }

  // Additional paths or conditions for signed-in users can be added here
  if (user) {
    allowedPaths.push("/profile") // Example paths for signed-in users
  }

  // Check if the path is allowed
  return (
    allowedPaths.includes(pathname) ||
    pathname.startsWith("/learn/") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/faq") ||
    pathname.startsWith("/about")
  )
}
