# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
✘ [ERROR] Missing entry-point to Worker script or to assets directory
```

## Root Cause

The deploy command `npx wrangler deploy` doesn't know what to deploy. For static sites, we need to specify the assets directory.

## Solution: Update Deploy Command

The deploy command needs to point to the static output directory.

### Step 1: Update Deploy Command

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Deploy command"** field
5. Change from: `npx wrangler deploy`
6. Change to: `npx wrangler pages deploy .next/out`
7. **Save**

### Step 2: Verify Settings

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out`
- **Node version**: `20` or `20.19.2` ✅ (already set!)
- **Deploy command**: `npx wrangler pages deploy .next/out` ⚠️ **UPDATED**

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## What Should Happen

After updating the deploy command:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ Deploy command (`npx wrangler pages deploy .next/out`) deploys static files  
✅ Site goes live  

## Why This Works

- `npx wrangler pages deploy .next/out` tells wrangler to deploy the static files from `.next/out`
- This is the correct command for deploying static sites to Cloudflare Pages
- The build output directory (`.next/out`) contains all the static HTML, CSS, and JS files

## Alternative: Create wrangler.toml

If the deploy command update doesn't work, we can create a `wrangler.toml` file, but updating the deploy command is simpler.
