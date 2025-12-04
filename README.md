# KOSbite - Personal Portfolio Website

A fully static Next.js portfolio website, optimized for Cloudflare Pages deployment. **Frontend only - no backend required.**

## ✨ Features

- ✅ **100% Static Frontend** - No backend, no database, no API calls
- ✅ **Next.js 15** - Latest Next.js with App Router
- ✅ **TypeScript** - Fully typed codebase
- ✅ **Tailwind CSS** - Modern, responsive styling
- ✅ **Static Blog System** - Blog posts stored in code
- ✅ **Cloudflare Pages Ready** - Deploys instantly to global CDN
- ✅ **Fully Responsive** - Mobile-first design

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit: **http://localhost:5555**

### Build for Production

```bash
npm run build
```

Output will be in `.next/out` directory - ready for Cloudflare Pages!

## 📁 Project Structure

```
KOSbite/
├── src/
│   ├── app/              # Next.js pages (home, blog)
│   ├── components/       # React components (Hero, About, Contact, etc.)
│   ├── data/             # Static data files
│   │   ├── blog-posts.ts      # Blog posts content
│   │   └── site-settings.ts   # Site configuration
│   ├── lib/              # Utilities
│   └── styles/           # Global CSS
├── public/               # Static assets (images, etc.)
├── package.json
└── next.config.ts        # Next.js configuration (static export)
```

## 📝 Content Management

All content is stored in static TypeScript files - no CMS needed!

### Edit Blog Posts

Edit `src/data/blog-posts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Your Post Title',
    slug: 'your-post-slug',
    date: '2024-01-15',
    intro: 'Brief introduction...',
    body: '<p>Your content here...</p>',
  },
]
```

### Edit Site Settings

Edit `src/data/site-settings.ts`:

```typescript
export const siteSettings = {
  heroName: "Your Name",
  heroTagline: "Your Tagline",
  email: "your@email.com",
  // ... other settings
}
```

### Edit Components

All components are in `src/components/`:
- `Hero.tsx` - Hero section
- `About.tsx` - About section
- `Contact.tsx` - Contact information
- `Navigation.tsx` - Navigation bar
- `Footer.tsx` - Footer
- And more...

## 🌐 Cloudflare Pages Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Setup:**
1. Connect GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `.next/out`
4. Node version: `20`
5. Deploy command: `echo "Deployment handled by Cloudflare Pages"`

## 🎨 Customization

### Styling
- **Global styles**: `src/styles/globals.css`
- **Component styles**: Each component has its own `.module.css` file
- **Tailwind CSS**: Configured and ready to use

### Adding New Pages
1. Create a new file in `src/app/(frontend)/`
2. Export a default React component
3. The route will be automatically available

### Adding New Components
1. Create a new file in `src/components/`
2. Import and use in your pages

## 📦 Dependencies

- **Next.js 15.4.7** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

No backend dependencies! Everything is frontend-only.

## 🚫 What's NOT Included

- ❌ No backend server
- ❌ No database
- ❌ No API endpoints
- ❌ No CMS
- ❌ No authentication
- ❌ No server-side rendering (fully static)

## ✅ What IS Included

- ✅ Static HTML pages
- ✅ React components
- ✅ Static blog posts
- ✅ Site configuration
- ✅ Responsive design
- ✅ Fast page loads

## 📚 Documentation

- `DEPLOYMENT.md` - Cloudflare Pages deployment guide
- `README-CLOUDFLARE.md` - Cloudflare-specific instructions
- `DEPLOY-FIX.md` - Troubleshooting deployment issues

## 🎯 Performance

- ⚡ **Instant page loads** - Static HTML
- 🌍 **Global CDN** - Cloudflare Pages
- 📱 **Mobile optimized** - Responsive design
- 🔒 **HTTPS** - Automatic SSL

## 📄 License

MIT

## 👤 Author

Abdul Wajid CK - Architect of E3 Marketing
