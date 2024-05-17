import { Inter, Noto_Sans_JP } from "next/font/google"

const inter_init = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansJP_init = Noto_Sans_JP({ variable: "--font-noto-sans-jp" })

export const inter = inter_init.variable
export const japanese = notoSansJP_init.variable
