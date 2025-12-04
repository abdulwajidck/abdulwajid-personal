# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
✘ [ERROR] A request to the Cloudflare API failed.
Authentication error [code: 10000]
```

## Root Cause

Wrangler is trying to authenticate to deploy, but for Cloudflare Pages, the deployment should happen automatically when the build output directory is set correctly.

## Solution: Remove or Simplify Deploy Command

For Cloudflare Pages, if the **Build output directory** is set to `.next/out`, Cloudflare automatically deploys the files. The deploy command may not be needed.

### Option 1: Use No-Op Command (Recommended)

Since the deploy command cannot be empty, use a simple command that does nothing:

**Deploy command**: `echo "Deployment handled by Cloudflare Pages"`

This satisfies the requirement for a deploy command without actually running wrangler.

### Option 2: Keep Wrangler but Fix Authentication

If you must use wrangler, you need to:
1. Go to Cloudflare Dashboard → Profile → API Tokens
2. Create a token with **Pages:Edit** permissions
3. Add it as an environment variable in Cloudflare Pages: `CLOUDFLARE_API_TOKEN`

But **Option 1 is simpler** since Cloudflare Pages auto-deploys when build output directory is set.

### Step 1: Update Deploy Command

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Deploy command"** field
5. Change to: `echo "Deployment handled by Cloudflare Pages"`
6. **Save**

### Step 2: Verify Build Output Directory

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out` ⚠️ **CRITICAL - This is what Cloudflare deploys**
- **Node version**: `20` or `20.19.2` ✅
- **Deploy command**: `echo "Deployment handled by Cloudflare Pages"`

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## How Cloudflare Pages Works

1. **Build phase**: Runs `npm run build`, creates `.next/out`
2. **Deploy phase**: Cloudflare Pages automatically deploys `.next/out` to the global network
3. **Deploy command**: Only needed if you want custom deployment logic (usually not needed)

Since you've set **Build output directory** to `.next/out`, Cloudflare Pages will automatically deploy it after the build completes.

## What Should Happen

After updating the deploy command:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ Cloudflare Pages automatically deploys `.next/out`  
✅ No authentication errors  
✅ Site goes live  

## Why This Works

- Cloudflare Pages watches the build output directory (`.next/out`)
- When build completes, it automatically deploys those files
- The deploy command is optional - only needed for custom logic
- Using `echo` satisfies the "cannot be empty" requirement without errors
