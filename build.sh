#!/bin/bash
# Build script for Cloudflare Pages
# This ensures npm is used instead of yarn

set -e

echo "=========================================="
echo "🔨 Building with npm (NOT yarn)..."
echo "=========================================="

# Explicitly use npm
which npm || (echo "npm not found!" && exit 1)

echo "Using npm version:"
npm --version

echo "Running npm build..."
npm run build

echo "=========================================="
echo "📦 Copying output to .next/out for Cloudflare..."
echo "=========================================="
mkdir -p .next
cp -r out .next/out

echo "=========================================="
echo "✅ Build complete! Output in both out/ and .next/out/"
echo "=========================================="

