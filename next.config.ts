import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // No trailing slash for better Cloudflare compatibility
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Experimental optimizations for better LCP
  experimental: {
    optimizePackageImports: ['@vercel/speed-insights'],
  },
}

export default nextConfig
