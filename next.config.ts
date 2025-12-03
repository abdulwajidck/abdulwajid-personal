import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  },
  // Cloudflare Pages compatibility
  // Uncomment if using static export:
  // output: 'export',
  // Uncomment if using Cloudflare adapter:
  // experimental: {
  //   runtime: 'edge',
  // },
}

export default nextConfig
