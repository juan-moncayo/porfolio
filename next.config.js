/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable minification to help with debugging
  swcMinify: false,
  // Ensure all styles are included
  transpilePackages: ["@nextui-org/react", "framer-motion"],
  reactStrictMode: true,
  poweredByHeader: false,
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
  output: "standalone",
}

module.exports = nextConfig
