# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
Wrangler requires at least Node.js v20.0.0. You are using v18.20.8.
Failed: error occurred while running deploy command
```

## Root Cause

**Node version is 18, but wrangler (deploy command) requires Node 20+**

The deploy command `npx wrangler deploy` cannot be removed or left empty - it's required by Cloudflare Pages.

## Solution: Set Node Version to 20 (REQUIRED)

Since the deploy command cannot be empty, we must ensure Node 20 is used so wrangler can run.

### Step 1: Set Node Version to 20

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Node version"** field
5. Set it to: `20` or `20.19.2`
6. **Save**

### Step 2: Verify Settings

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out`
- **Node version**: `20` or `20.19.2` ⚠️ **CRITICAL**
- **Deploy command**: `npx wrangler deploy` (keep as is - can't be empty)

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## What Should Happen

After setting Node to 20:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ Deploy command (`npx wrangler deploy`) runs with Node 20  
✅ Wrangler works (requires Node 20+)  
✅ Site deploys successfully  

## Why This Works

- **Build phase**: Uses Node 20, builds successfully
- **Deploy phase**: Uses Node 20, wrangler can run (requires Node 20+)
- **Result**: Both build and deploy succeed

## Current Configuration Files

- ✅ `.nvmrc` → `20.19.2`
- ✅ `.node-version` → `20.19.2`
- ✅ `package.json` engines → `>=20.0.0`

**But Cloudflare Pages dashboard settings override these, so you MUST set Node version to 20 in the dashboard.**

## Alternative (If Node 20 Setting Doesn't Work)

If setting Node version in dashboard doesn't work, try changing the deploy command to:

```
echo "Build output ready at .next/out"
```

But this may not work - Cloudflare Pages likely expects wrangler. The best solution is to **set Node version to 20**.
