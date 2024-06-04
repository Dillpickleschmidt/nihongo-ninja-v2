/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

export default nextConfig
