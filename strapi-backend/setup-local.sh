#!/bin/bash

# Quick setup script for local Strapi development

echo "🚀 Setting up Strapi for local development..."

# Check if .env exists
if [ ! -f ".env" ]; then
  echo "📝 Creating .env file..."
  cat > .env << 'ENVEOF'
HOST=0.0.0.0
PORT=1337
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=toBeModified
ADMIN_JWT_SECRET=toBeModified
TRANSFER_TOKEN_SALT=toBeModified
JWT_SECRET=toBeModified
NODE_ENV=development
ENVEOF
  
  echo "⚠️  Please update .env with secure random keys!"
  echo "   You can generate keys with: openssl rand -base64 32"
else
  echo "✅ .env file already exists"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env and replace 'toBeModified' values with random strings"
echo "2. Run: npm run develop"
echo "3. Access admin at: http://localhost:1337/admin"
echo ""

