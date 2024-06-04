import Image from "next/image"
import supabaseServer from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default function LoginForm() {
  const signIn = async () => {
    "use server"

    // 1. Create a Supabase client
    const supabase = supabaseServer()
    const origin = headers().get("origin")
    // 2. Sign in with GitHub
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.log(error)
    } else {
      return redirect(data.url)
    }
    // 3. Redirect to landing page
  }

  return (
    <form
      action={signIn}
      className="flex min-h-screen flex-1 items-center justify-center"
    >
      <button className="rounded-xl p-8 hover:bg-gray-800">
        <Image
          className="mx-auto mb-3"
          src="/img/github-logo.png"
          width={100}
          height={100}
          alt="GitHub logo"
        />
        Sign in with GitHub
      </button>
    </form>
  )
}
