# 🔴 FINAL FIX: Cloudflare Pages Build Command

## The Problem

Cloudflare Pages **KEEPS** using `yarn run build` even though we've configured npm. This is because **the build command is set in the Cloudflare Dashboard and must be changed there manually**.

## ✅ SOLUTION: Change Build Command in Dashboard

### Method 1: Direct Dashboard Edit (REQUIRED)

1. **Go to**: https://dash.cloudflare.com
2. **Navigate to**: Pages → [Your Project Name]
3. **Click**: Settings (gear icon) → **Builds & deployments**
4. **Click**: **Edit configuration** button
5. **Find**: "Build command" field
6. **DELETE**: `yarn run build` (if it's there)
7. **TYPE**: `npm run build`
8. **OR TYPE**: `bash build.sh` (alternative)
9. **Click**: Save
10. **Redeploy**: Trigger a new deployment

### Method 2: Use Build Script

If typing `npm run build` doesn't work, use the build script:

**Build command**: `bash build.sh`

### Method 3: Delete and Recreate Project

If nothing works:

1. **Delete** the current Cloudflare Pages project
2. **Create** a new project
3. **Connect** the same GitHub repo
4. **Set build command** to `npm run build` from the start
5. **Never** select a framework preset that uses yarn

## What Changed in Code

- ✅ Removed `.tool-versions` (might cause conflicts)
- ✅ Added `pages:build` script to package.json
- ✅ Created `build.sh` script as backup
- ✅ Added `cloudflare-pages-config.json` (may or may not be used)

## Verification

After fixing, check build logs. You should see:

✅ **Correct:**
```
Executing user build command: npm run build
```

OR

✅ **Also correct:**
```
Executing user build command: bash build.sh
```

❌ **Wrong (current):**
```
Executing user build command: yarn run build
```

## Why This Keeps Happening

Cloudflare Pages:
- May auto-detect yarn based on framework preset
- May cache the build command
- May default to yarn for Next.js projects

**The ONLY way to fix this is to manually change the build command in the Cloudflare Dashboard.**

## Still Not Working?

1. Check that you're editing the **correct project**
2. Make sure you **saved** the changes
3. **Trigger a new deployment** after saving
4. Check the build logs to verify the command changed
5. Try using `bash build.sh` as the build command instead

