/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'example.com'],
  },
  // Remove deprecated options and fix serverActions format
  experimental: {
    // Updated format for serverActions
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Remove appDir option as it's no longer needed
  },
  // Remove swcMinify as it's now the default
}

module.exports = nextConfig