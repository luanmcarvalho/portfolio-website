/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you might be using
  },
  // This helps with hydration errors in development
  experimental: {
    // This is experimental but helps with the hydration error
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
