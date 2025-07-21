/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['swiper']
  }
}

module.exports = nextConfig