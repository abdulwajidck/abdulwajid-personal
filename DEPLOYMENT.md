# Cloudflare Pages Deployment Guide

## ✅ Fully Cloudflare Compatible!

This project is now **100% static** and fully compatible with Cloudflare Pages. No backend required!

## Quick Deploy

### Method 1: Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Navigate to: Pages → Create a project

2. **Connect Repository**
   - Connect your GitHub repository: `abdulwajidck/abdulwajid-personal`
   - Authorize Cloudflare to access your repo

3. **Configure Build Settings** ⚠️ **CRITICAL STEP**
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build` 
     - ⚠️ **MUST BE**: `npm run build` (NOT `yarn run build`)
     - ⚠️ **DOUBLE CHECK**: Make sure it says `npm`, not `yarn`
   - **Build output directory**: `out` ⚠️ **IMPORTANT: Use `out` NOT `.next/out`**
     - Next.js static export creates files in `out/` directory
   - **Root directory**: `/` (leave empty)
   - **Node version**: `20` or `20.19.2` ⚠️ **CRITICAL - REQUIRED!**
   - **Deploy command**: `echo "Deployment handled by Cloudflare Pages"`
     - Cloudflare Pages automatically deploys `out/` when build completes
     - No need for wrangler - the build output directory setting handles deployment
     - This satisfies the "cannot be empty" requirement without authentication issues
   - **Package manager**: `npm` (if option available)
   
   **IMPORTANT:**
   - If you see `yarn run build` in the build command field, DELETE IT and type `npm run build` manually!
   - **Node version MUST be set to 20** - Wrangler requires Node 20+ ✅
   - **Build output directory MUST be**: `out` (NOT `.next/out`)

4. **Environment Variables**
   - None required! Everything is static.

5. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live in minutes!

### Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Build the site
npm run build

# Deploy
wrangler pages deploy out --project-name=your-project-name
```

## Build Output

After running `npm run build`, you'll find:
- **Output directory**: `out/` (NOT `.next/out`)
- **Format**: Static HTML, CSS, and JavaScript
- **Size**: Optimized and minimal

## What Changed

✅ **Removed**: All backend dependencies (Strapi, Django/Wagtail)  
✅ **Added**: Static data files (`src/data/`)  
✅ **Updated**: Next.js config for static export  
✅ **Simplified**: No environment variables needed  

## Content Updates

To update content, simply edit:
- **Blog posts**: `src/data/blog-posts.ts`
- **Site settings**: `src/data/site-settings.ts`

Then commit and push - Cloudflare Pages will automatically rebuild!

## Custom Domain

1. Go to your Cloudflare Pages project
2. Navigate to "Custom domains"
3. Add your domain
4. Follow DNS setup instructions

## Performance

- ⚡ **Fast**: Static HTML = instant page loads
- 💰 **Free**: Cloudflare Pages free tier is generous
- 🌍 **Global CDN**: Automatic global distribution
- 🔒 **HTTPS**: Automatic SSL certificates

## Troubleshooting

### Build Fails
- Check Node.js version (use 20 or higher)
- Ensure all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Images Not Loading
- Use absolute URLs for images
- Or host images in `public/` directory
- Or use external image hosting (Cloudflare Images, etc.)

### 404 Errors
- Ensure `trailingSlash: false` in `next.config.ts`
- Check that all routes are properly exported

### Shows "Hello World" or Blank Page
- ⚠️ **Check Build Output Directory**: Must be `out` (NOT `.next/out`)
- Verify the build completed successfully
- Check that `index.html` exists in the `out/` directory
- Clear Cloudflare Pages cache and redeploy

## Support

For issues, check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
