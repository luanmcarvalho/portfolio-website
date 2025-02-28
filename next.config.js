/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Use the proper format for server actions
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
}

module.exports = nextConfig