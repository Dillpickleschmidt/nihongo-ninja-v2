import { Inter, Noto_Sans_JP, Honk } from "next/font/google"
import localFont from "next/font/local"

const inter_init = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansJP_init = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin-ext"],
})
const honk_init = Honk({ variable: "--font-honk", subsets: ["latin"] })

export const inter = inter_init.variable
export const japanese = notoSansJP_init.variable
export const honk = honk_init.variable
