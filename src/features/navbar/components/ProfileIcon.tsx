"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import supabaseBrowser from "@/lib/supabase/browser"
import CustomImage from "@/components/CustomImage"

export default function ProfileIcon() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const supabase = supabaseBrowser()
      const user = (await supabase.auth.getSession()).data.session?.user
      // console.log("user", user)
      if (user) {
        let { data: profiles, error } = await supabase
          .from("profiles")
          .select("image_url")
          .eq("id", user.id)
          .single()
        if (error) {
          console.error("Error fetching profile:", error)
        } else {
          setImageUrl(profiles?.image_url || null)
          // console.log("image_url", profiles?.image_url)
        }
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Link href="/profile">
        <Button
          variant="outline"
          className="relative h-10 w-10 overflow-clip rounded-full"
        >
          {imageUrl && (
            <CustomImage src={imageUrl} alt="profile icon" sizes="60px" />
          )}
        </Button>
      </Link>
    </div>
  )
}
