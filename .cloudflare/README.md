# Cloudflare Pages Quick Start

## Quick Answer: Is it Compatible?

**Yes, with caveats:**

✅ **Next.js Frontend**: Fully compatible with Cloudflare Pages  
❌ **Strapi Backend**: Must be hosted separately (Railway, Render, etc.)

## Architecture

Your Next.js app can run on Cloudflare Pages, but Strapi needs to be hosted elsewhere:

```
Cloudflare Pages (Next.js) → API Calls → Strapi (Separate Host)
```

## Quick Setup

1. **Deploy Strapi** to Railway/Render (see CLOUDFLARE_DEPLOYMENT.md)
2. **Set environment variable** in Cloudflare Pages:
   - `NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.railway.app`
3. **Deploy** your Next.js app to Cloudflare Pages

## Build Command

Use: `npm run build:cloudflare`

This uses the Cloudflare adapter for Next.js.

## Important Notes

- Strapi backend cannot run on Cloudflare Pages
- You need a separate hosting service for Strapi
- CORS must be configured in Strapi to allow your Cloudflare Pages domain
- All API calls from Next.js will go to your external Strapi instance

See `CLOUDFLARE_DEPLOYMENT.md` for detailed instructions.

