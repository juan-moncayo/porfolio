/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  transpilePackages: ["@nextui-org/react", "framer-motion"],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
