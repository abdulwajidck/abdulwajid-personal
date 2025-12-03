# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
Wrangler requires at least Node.js v20.0.0. You are using v18.20.8.
Failed: error occurred while running deploy command
```

## Root Causes

1. **Node version**: Cloudflare Pages is using Node 18 instead of 20
2. **Deploy command**: `npx wrangler deploy` requires Node 20+

## Solution: Set Node Version to 20 (REQUIRED)

Since the deploy command cannot be removed, we need to ensure Node 20 is used.

### Step 1: Set Node Version to 20

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Node version"** field
5. Set it to: `20` or `20.19.2`
6. **Save**

### Step 2: Verify Build Command

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out`
- **Node version**: `20` or `20.19.2` ⚠️ **CRITICAL**

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## Alternative: Use Different Deploy Command

If setting Node version doesn't work, try changing the deploy command to:

**Option 1:** Leave it as `npx wrangler deploy` but ensure Node 20 is set

**Option 2:** Try: `echo "Deploying static files..."` (if allowed)

**Option 3:** Use: `ls -la .next/out` (just verify output exists)

But the best solution is to **set Node version to 20** so wrangler can run.

## What Should Happen

After setting Node to 20:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ Deploy command (`npx wrangler deploy`) runs with Node 20  
✅ Wrangler works (requires Node 20+)  
✅ Site deploys successfully  

## Current Configuration Files

- ✅ `.nvmrc` → `20.19.2`
- ✅ `.node-version` → `20.19.2`
- ✅ `package.json` engines → `>=20.0.0`

**But Cloudflare Pages dashboard settings override these, so you MUST set Node version to 20 in the dashboard.**

## Why This Happens

Cloudflare Pages may:
- Auto-detect Node 18 from framework preset
- Cache the Node version setting
- Default to Node 18 for Next.js projects

**The Node version MUST be explicitly set to 20 in the Cloudflare Pages dashboard.**
