# ⚠️ CRITICAL: Fix Cloudflare Pages Build Command

## The Problem

Cloudflare Pages is still trying to run `yarn run build` instead of `npm run build`, causing the build to fail.

## ✅ SOLUTION: Update Build Command in Cloudflare Dashboard

**You MUST manually change the build command in Cloudflare Pages dashboard:**

### Step-by-Step Instructions:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Navigate to: **Pages** → Your project name

2. **Open Build Settings**
   - Click on **Settings** (gear icon)
   - Click on **Builds & deployments** in the left sidebar
   - Click **Edit configuration** button

3. **Change Build Command**
   - Find the **Build command** field
   - **DELETE**: `yarn run build`
   - **REPLACE WITH**: `npm run build`
   - ⚠️ Make sure there are no spaces or typos!

4. **Verify Other Settings**
   - **Build output directory**: `.next/out`
   - **Root directory**: `/` (leave empty)
   - **Node version**: `18` (should auto-detect from `.nvmrc`)
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`

5. **Save and Redeploy**
   - Click **Save** or **Save and Deploy**
   - The build should now use `npm run build`

## What You Should See After Fix

✅ **Correct build logs:**
```
Executing user build command: npm run build
```

❌ **Wrong build logs (current):**
```
Executing user build command: yarn run build
```

## Why This Happens

Cloudflare Pages may auto-detect yarn if:
- It finds a `yarn.lock` file (we don't have one)
- The framework preset defaults to yarn
- Previous build configuration used yarn

## Verification

After updating, check the build logs. You should see:
- ✅ `npm clean-install` (not yarn)
- ✅ `npm run build` (not yarn run build)
- ✅ Build completes successfully

## Alternative: Delete and Recreate Project

If the build command keeps reverting:
1. Delete the Cloudflare Pages project
2. Create a new project
3. Connect the same GitHub repo
4. Set build command to `npm run build` from the start

