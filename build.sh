#!/bin/bash
# Build script for Cloudflare Pages
# This ensures npm is used instead of yarn

set -e

echo "🔨 Building with npm..."
npm run build

echo "✅ Build complete!"

