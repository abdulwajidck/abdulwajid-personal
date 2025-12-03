# 🚨 URGENT: Fix Cloudflare Pages Build Command

## The Problem

Cloudflare Pages is **STILL** trying to run `yarn run build` instead of `npm run build`.

**You MUST manually change this in the Cloudflare Dashboard - it cannot be fixed with code alone!**

## ✅ IMMEDIATE FIX (Required)

### Step 1: Go to Cloudflare Dashboard
1. Visit: https://dash.cloudflare.com
2. Click **Pages** in the left sidebar
3. Click on your project name

### Step 2: Edit Build Configuration
1. Click **Settings** (gear icon) at the top
2. Click **Builds & deployments** in the left sidebar
3. Click the **Edit configuration** button (or pencil icon)

### Step 3: Change Build Command
1. Find the **Build command** field
2. **DELETE** everything in that field
3. **TYPE EXACTLY**: `npm run build`
4. **DO NOT** use `yarn run build` or `yarn build`
5. Make sure it says **npm**, not **yarn**

### Step 4: Verify Settings
- ✅ **Build command**: `npm run build`
- ✅ **Build output directory**: `.next/out`
- ✅ **Root directory**: `/` (empty)
- ✅ **Node version**: `20`

### Step 5: Save and Redeploy
1. Click **Save** or **Save and Deploy**
2. Wait for the build to complete
3. Check build logs - should show `npm run build`

## Alternative: Use Build Script

If the dashboard keeps reverting, try using the build script:

**Build command**: `bash build.sh`

This script explicitly uses npm.

## What You'll See After Fix

✅ **Correct:**
```
Executing user build command: npm run build
```

❌ **Wrong (current):**
```
Executing user build command: yarn run build
```

## Why This Happens

Cloudflare Pages may auto-detect yarn based on:
- Framework preset selection
- Previous build configuration
- Auto-detection logic

**The build command MUST be manually set to `npm run build` in the dashboard.**

## Still Not Working?

1. **Delete and recreate the project:**
   - Delete the current Cloudflare Pages project
   - Create a new one
   - Set build command to `npm run build` from the start

2. **Or use the build script:**
   - Set build command to: `bash build.sh`

