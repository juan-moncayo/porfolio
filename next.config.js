/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  // Añadir alias para resolver las rutas incorrectas
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/app/components/Header": require("path").resolve("./components/Header"),
      "@/app/components/Footer": require("path").resolve("./components/Footer"),
    }
    return config
  },
}

module.exports = nextConfig
