# Fix Cloudflare Pages Deploy Command Issue

## Problem

Build succeeds but deploy fails with:
```
✘ [ERROR] Must specify a project name.
```

## Root Cause

The deploy command `npx wrangler pages deploy .next/out` needs a project name to deploy to.

## Solution: Add Project Name to Deploy Command

The deploy command needs to include the `--project-name` parameter.

### Step 1: Update Deploy Command

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Find **"Deploy command"** field
5. Change to: `npx wrangler pages deploy .next/out --project-name=abdul-wajid-personal`
6. **Save**

**Note:** Replace `abdul-wajid-personal` with your actual Cloudflare Pages project name if different.

### Alternative: Use wrangler.toml

I've created a `wrangler.toml` file that specifies the project name. You can also use:

**Deploy command**: `npx wrangler pages deploy .next/out`

The `wrangler.toml` file will provide the project name automatically.

### Step 2: Verify Settings

Make sure:
- **Build command**: `npm run build`
- **Build output directory**: `.next/out`
- **Node version**: `20` or `20.19.2` ✅ (already set!)
- **Deploy command**: `npx wrangler pages deploy .next/out --project-name=YOUR_PROJECT_NAME`

### Step 3: Clear Cache and Redeploy

1. Clear build cache (Settings → Builds & deployments → Clear cache)
2. Trigger a new deployment

## What Should Happen

After updating the deploy command:

✅ Build uses Node 20  
✅ Build completes successfully  
✅ Deploy command includes project name  
✅ Site deploys successfully  

## Finding Your Project Name

1. Go to Cloudflare Dashboard → Pages
2. Your project name is shown in the project list
3. Use that exact name in the deploy command
