import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  typescript: {
    // Explicitly ignore TypeScript errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Explicitly ignore ESLint errors
    ignoreDuringBuilds: true,
  },
  // Disable SWC minification
  swcMinify: false,
  // Ensure we're not using experimental features
  experimental: {
    // Disable any experimental features
  },
}

export default nextConfig
