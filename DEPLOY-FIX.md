# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
Wrangler requires at least Node.js v20.0.0. You are using v18.20.8.
Failed: error occurred while running deploy command
```

## Root Causes

1. **Node version**: Cloudflare Pages is using Node 18 instead of 20
2. **Deploy command**: There's a deploy command set to `npx wrangler deploy` which:
   - Requires Node 20+
   - Is NOT needed for static export (Cloudflare Pages auto-deploys `.next/out`)

## Solution

### Step 1: Remove Deploy Command (REQUIRED)

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Deploy command"** or **"Deploy command"** field
5. **DELETE** the deploy command (leave it empty)
6. Or set it to: (empty/nothing)
7. **Save**

**Why?** For static export, Cloudflare Pages automatically deploys the `.next/out` directory. No deploy command is needed.

### Step 2: Set Node Version to 20 (REQUIRED)

1. In the same **Build configuration** page
2. Find **"Node version"** field
3. Set it to: `20` or `20.19.2`
4. **Save**

### Step 3: Verify Build Output Directory

Make sure:
- **Build output directory**: `.next/out`
- **Build command**: `npm run build`
- **Deploy command**: (empty/blank)

### Step 4: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## What Should Happen

After fixing:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ No deploy command runs  
✅ Cloudflare Pages automatically deploys `.next/out`  
✅ Site goes live  

## Current Configuration Files

- ✅ `.nvmrc` → `20.19.2`
- ✅ `.node-version` → `20.19.2`
- ✅ `package.json` engines → `>=20.0.0`

But Cloudflare Pages dashboard settings override these, so you MUST update the dashboard.

