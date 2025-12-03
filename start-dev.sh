#!/bin/bash
trap 'kill %1' SIGINT

# Start Next.js Frontend (fully static, no backend needed)
echo "Starting Next.js Frontend..."
PORT=5555 npm run dev
