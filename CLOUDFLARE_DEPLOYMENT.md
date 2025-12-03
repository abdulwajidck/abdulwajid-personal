# Cloudflare Pages Deployment Guide

## Compatibility Status

✅ **Next.js Frontend**: Fully compatible with Cloudflare Pages  
❌ **Strapi Backend**: Cannot run on Cloudflare Pages (needs separate hosting)

## Architecture

```
┌─────────────────────┐
│  Cloudflare Pages   │
│   (Next.js App)     │
│   Port: 5555        │
└──────────┬──────────┘
           │
           │ API Calls
           │
┌──────────▼──────────┐
│  Strapi Backend     │
│  (Separate Host)    │
│  Port: 1337         │
└─────────────────────┘
```

## Prerequisites

1. **Strapi Backend Hosting** (choose one):
   - Railway (recommended): https://railway.app
   - Render: https://render.com
   - Heroku: https://heroku.com
   - DigitalOcean App Platform: https://www.digitalocean.com/products/app-platform
   - Strapi Cloud: https://strapi.io/cloud

2. **Cloudflare Account**: https://dash.cloudflare.com

## Step 1: Deploy Strapi Backend

### Option A: Railway (Recommended)

1. Create account at https://railway.app
2. Create new project
3. Connect your GitHub repo
4. Add service → Deploy from GitHub repo
5. Select `strapi-backend` directory
6. Set environment variables:
   ```
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=key1,key2,key3,key4
   API_TOKEN_SALT=your-salt
   ADMIN_JWT_SECRET=your-secret
   TRANSFER_TOKEN_SALT=your-salt
   JWT_SECRET=your-secret
   NODE_ENV=production
   ```
7. Railway will provide a URL like: `https://your-app.railway.app`

### Option B: Render

1. Create account at https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Settings:
   - Build Command: `cd strapi-backend && npm install && npm run build`
   - Start Command: `cd strapi-backend && npm start`
   - Environment: Node
5. Add environment variables (same as Railway)
6. Render will provide a URL like: `https://your-app.onrender.com`

## Step 2: Configure Next.js for Cloudflare Pages

### Install Cloudflare Adapter

```bash
npm install @cloudflare/next-on-pages
```

### Update next.config.ts

See updated configuration below.

### Update package.json

Add build script for Cloudflare:

```json
{
  "scripts": {
    "build": "next build",
    "build:cloudflare": "next build && @cloudflare/next-on-pages"
  }
}
```

## Step 3: Deploy to Cloudflare Pages

### Via Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages
2. Create a project
3. Connect your Git repository
4. Build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.vercel/output/static` (or `.next/static` if using adapter)
   - **Root directory**: `/` (root of repo)

### Environment Variables

Add in Cloudflare Pages settings:

```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.railway.app
```

### Via Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy .vercel/output/static --project-name=your-project
```

## Step 4: Configure CORS in Strapi

Update `strapi-backend/config/middlewares.js` to allow your Cloudflare Pages domain:

```javascript
{
  name: 'strapi::cors',
  config: {
    enabled: true,
    headers: '*',
    origin: [
      'http://localhost:5555',
      'http://localhost:3000',
      'https://your-site.pages.dev',  // Add your Cloudflare Pages URL
    ],
  },
}
```

## Step 5: Update Image Configuration

Ensure Strapi images are accessible:
- Use absolute URLs in Strapi media
- Or configure Cloudflare R2 for media storage

## Troubleshooting

### Issue: API calls failing
- Check CORS configuration in Strapi
- Verify `NEXT_PUBLIC_STRAPI_URL` is set correctly
- Ensure Strapi backend is publicly accessible

### Issue: Build fails
- Check Node.js version compatibility (Cloudflare Pages supports Node 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Issue: Images not loading
- Update `next.config.ts` to allow your Strapi domain
- Use HTTPS URLs for production
- Consider using Cloudflare Images or R2 for media

## Alternative: Static Export (Simpler but Limited)

If you don't need SSR, you can use static export:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  // ... rest of config
}
```

2. Build:
```bash
npm run build
```

3. Deploy `.next/out` folder to Cloudflare Pages

**Limitation**: No server-side rendering, all data fetched at build time.

