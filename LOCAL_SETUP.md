# Local Development Setup

## Yes, Strapi Runs Locally! 🎉

Strapi is designed to run locally for development. This is actually the **recommended** setup for development.

## Quick Start

### 1. Install Strapi Dependencies

```bash
cd strapi-backend
npm install
```

### 2. Create Environment File

Create `strapi-backend/.env` with the following:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=toBeModified
ADMIN_JWT_SECRET=toBeModified
TRANSFER_TOKEN_SALT=toBeModified
JWT_SECRET=toBeModified
NODE_ENV=development
```

**Important**: Replace the `toBeModified` values with random strings. You can generate them with:

```bash
# Generate random keys (run 4 times for APP_KEYS)
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Start Everything

From the project root:

```bash
./start-dev.sh
```

This will:
- Start Strapi on **http://localhost:1337**
- Start Next.js on **http://localhost:5555**
- Strapi Admin Panel: **http://localhost:1337/admin**

### 4. First Time Setup

When you first access `http://localhost:1337/admin`, you'll be prompted to:
1. Create an admin account
2. Set up your first admin user

After that, you can:
- Create blog posts
- Configure site settings
- Manage content

## Manual Start (Alternative)

If you prefer to start services separately:

### Terminal 1 - Strapi
```bash
cd strapi-backend
npm run develop
```

### Terminal 2 - Next.js
```bash
PORT=5555 npm run dev
```

## Local Development Architecture

```
┌─────────────────────┐
│  Next.js Frontend   │
│  localhost:5555     │
└──────────┬──────────┘
           │
           │ API Calls
           │
┌──────────▼──────────┐
│  Strapi Backend     │
│  localhost:1337     │
│  (Local SQLite DB)  │
└─────────────────────┘
```

## Database

Strapi uses **SQLite** by default for local development:
- Location: `strapi-backend/.tmp/data.db`
- No additional setup needed!
- Data persists between restarts

## Environment Variables

### Frontend (.env.local in project root)
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Backend (strapi-backend/.env)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
TRANSFER_TOKEN_SALT=your-salt
JWT_SECRET=your-secret
```

## Troubleshooting

### Port Already in Use
If port 1337 is taken:
```bash
# Change PORT in strapi-backend/.env
PORT=1338
```

Then update `.env.local`:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1338
```

### Node Version Issues
Strapi requires Node 18-20. If you have Node 25:
- Use `nvm` to switch versions
- Or use Docker (see below)

### Database Issues
If database is corrupted:
```bash
cd strapi-backend
rm -rf .tmp/data.db
# Restart Strapi - it will create a new database
```

## Docker Option (Alternative)

If you prefer Docker for local development:

```bash
cd strapi-backend
docker-compose up
```

(You'll need to create a `docker-compose.yml` file)

## Production vs Development

- **Development**: Run Strapi locally (what we're doing)
- **Production**: Deploy Strapi to Railway/Render/etc. (for Cloudflare Pages)

You can develop locally and deploy to production when ready!

