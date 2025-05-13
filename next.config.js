/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable CSS optimization to prevent style issues
  optimizeCss: false,
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
  // Add custom webpack configuration
  webpack: (config) => {
    // Ensure CSS is properly processed
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    })

    return config
  },
  output: "standalone",
}

module.exports = nextConfig
