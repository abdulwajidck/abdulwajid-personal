# KOSbite - Personal Portfolio

A fully static Next.js portfolio site, optimized for Cloudflare Pages deployment.

## Features

- ✅ **Fully Static** - No backend required, 100% Cloudflare Pages compatible
- ✅ **Next.js 15** - Latest Next.js with App Router
- ✅ **TypeScript** - Fully typed
- ✅ **Tailwind CSS** - Modern styling
- ✅ **Blog System** - Static blog posts
- ✅ **Responsive Design** - Mobile-first approach

## Quick Start

### Development

```bash
npm install
npm run dev
```

Visit: http://localhost:5555

### Build for Production

```bash
npm run build
```

Output will be in `.next/out` directory - ready for Cloudflare Pages!

## Cloudflare Pages Deployment

### Option 1: Via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Create a new project
3. Connect your GitHub repository
4. Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `.next/out`
   - **Root directory**: `/` (leave empty)

### Option 2: Via Wrangler CLI

```bash
npm install -g wrangler
npm run build
wrangler pages deploy .next/out --project-name=your-project
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── data/             # Static data (blog posts, settings)
│   ├── lib/              # Utilities and helpers
│   └── styles/           # Global styles
├── public/               # Static assets
└── package.json
```

## Content Management

### Blog Posts

Edit blog posts in `src/data/blog-posts.ts`:

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

### Site Settings

Edit site settings in `src/data/site-settings.ts`:

```typescript
export const siteSettings = {
  heroName: "Your Name",
  heroTagline: "Your Tagline",
  // ... other settings
}
```

## Customization

### Update Content

- **Blog Posts**: `src/data/blog-posts.ts`
- **Site Settings**: `src/data/site-settings.ts`
- **Components**: `src/components/`

### Styling

- **Global Styles**: `src/styles/globals.css`
- **Component Styles**: Each component has its own `.module.css` file
- **Tailwind Config**: `tailwind.config.js` (if needed)

## Environment Variables

No environment variables needed! Everything is static.

## Performance

- ✅ Static HTML export
- ✅ Optimized images (when using Next.js Image component)
- ✅ Minimal JavaScript
- ✅ Fast page loads

## License

MIT

## Author

Abdul Wajid CK - Architect of E3 Marketing

