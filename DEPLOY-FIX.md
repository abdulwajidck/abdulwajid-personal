# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
✘ [ERROR] Must specify a project name.
▲ [WARNING] Pages now has wrangler.toml support.
We detected a configuration file but it is missing the "pages_build_output_dir" field
```

## Root Cause

The `wrangler.toml` file is missing the `pages_build_output_dir` field required by Cloudflare Pages.

## Solution: Updated wrangler.toml

I've updated `wrangler.toml` to include:
- `pages_build_output_dir = ".next/out"` - Tells wrangler where the static files are
- `name = "abdul-wajid-personal"` - Project name

### Option 1: Use wrangler.toml (Recommended)

With the updated `wrangler.toml` file, you can use:

**Deploy command**: `npx wrangler pages deploy .next/out`

The `wrangler.toml` file will provide both the project name and output directory.

### Option 2: Use Project Name in Command

If `wrangler.toml` doesn't work, use:

**Deploy command**: `npx wrangler pages deploy .next/out --project-name=abdul-wajid-personal`

Replace `abdul-wajid-personal` with your actual Cloudflare Pages project name.

### Step 1: Update Deploy Command (if needed)

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Deploy command"** field
5. Use: `npx wrangler pages deploy .next/out`
6. **Save**

### Step 2: Verify Settings

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out`
- **Node version**: `20` or `20.19.2` ✅ (already set!)
- **Deploy command**: `npx wrangler pages deploy .next/out`

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## What Should Happen

After the fix:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ `wrangler.toml` provides project name and output directory  
✅ Deploy command works  
✅ Site deploys successfully  

## Current Configuration

- ✅ `wrangler.toml` → Includes `pages_build_output_dir` and `name`
- ✅ Build output directory: `.next/out`
- ✅ Node version: 20.19.2

The `wrangler.toml` file should now work correctly with Cloudflare Pages!
