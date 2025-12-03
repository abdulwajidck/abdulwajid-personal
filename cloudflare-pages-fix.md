# Cloudflare Pages Build Fix

## Issue
Cloudflare Pages is trying to use `yarn` instead of `npm`, causing build failures.

## Solution

### Option 1: Update Build Settings in Cloudflare Dashboard (Recommended)

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Builds & deployments**
3. Click **Edit configuration**
4. Update the build settings:
   - **Build command**: `npm run build` (NOT `yarn run build`)
   - **Build output directory**: `.next/out`
   - **Node version**: `20`
   - **Package manager**: Select `npm` (if available)

5. Save and redeploy

### Option 2: Delete yarn.lock (if it exists)

If there's a `yarn.lock` file in your repo, delete it:

```bash
rm yarn.lock
git add -A
git commit -m "Remove yarn.lock, use npm only"
git push
```

### Option 3: Add .npmrc file

Create `.npmrc` in the root:

```
package-lock=true
```

This ensures npm is used.

## Verification

After updating, the build logs should show:
- ✅ `Installing project dependencies: npm clean-install`
- ✅ `Executing user build command: npm run build`
- ❌ NOT `yarn run build`

## Current Configuration

- ✅ `package-lock.json` exists (indicates npm)
- ✅ `package.json` has `packageManager: "npm@10.9.2"`
- ✅ `.nvmrc` specifies Node 20
- ✅ Build command should be: `npm run build`

