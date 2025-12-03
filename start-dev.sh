#!/bin/bash
trap 'kill %1; kill %2' SIGINT

# Start Strapi Backend
echo "Starting Strapi Backend..."
cd strapi-backend
if [ ! -d "node_modules" ]; then
  echo "Installing Strapi dependencies..."
  npm install
fi
npm run develop &

# Start Next.js Frontend
echo "Starting Next.js Frontend..."
cd ..
PORT=5555 npm run dev &

wait
