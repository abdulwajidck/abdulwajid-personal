# Migration from Wagtail to Strapi + Google

This document outlines the migration from Wagtail (Django CMS) to Strapi (Node.js CMS) with Google services integration.

## What Changed

### Backend
- **Replaced**: Wagtail/Django backend (`backend/` directory)
- **New**: Strapi backend (`strapi-backend/` directory)
- **Port**: Changed from 8000 to 1337

### Frontend
- **Updated**: All API calls now use Strapi instead of Wagtail
- **New**: Google services integration library (`src/lib/google.ts`)
- **Replaced**: `wagtail.ts` with `strapi.ts`

### Content Types
- **Blog**: Migrated from Wagtail `BlogPage` to Strapi `blog` collection type
- **Site Settings**: Migrated from Wagtail `SiteSettings` to Strapi `site-setting` single type

## Setup Instructions

### 1. Install Strapi Dependencies
```bash
cd strapi-backend
npm install
```

### 2. Configure Environment Variables

Create `strapi-backend/.env`:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
TRANSFER_TOKEN_SALT=your-salt
JWT_SECRET=your-secret
```

Create `.env.local` in project root:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 3. Start Strapi Admin
```bash
cd strapi-backend
npm run develop
```

Access admin at: http://localhost:1337/admin

### 4. Create Content
- Create an admin user when prompted
- Go to Content-Type Builder and verify Blog and Site Settings are available
- Create blog posts and configure site settings

### 5. Start Development Servers
```bash
./start-dev.sh
```

This will start:
- Strapi backend on port 1337
- Next.js frontend on port 5555

## Google Integration

### Available Services
1. **Google OAuth**: Authentication with Google accounts
2. **Google Sheets**: Fetch data from Google Sheets
3. **Google Drive**: Upload and manage files
4. **Google Analytics**: Retrieve analytics data

### Configuration
Add Google credentials to `strapi-backend/.env`:
```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

## API Changes

### Before (Wagtail)
```
GET http://localhost:8000/api/v2/pages/?slug=my-post
GET http://localhost:8000/api/v2/pages/?type=home.BlogPage
```

### After (Strapi)
```
GET http://localhost:1337/api/blogs?filters[slug][$eq]=my-post&populate=*
GET http://localhost:1337/api/blogs?populate=*&sort=date:desc
GET http://localhost:1337/api/site-setting?populate=*
```

## Migration Checklist

- [x] Strapi backend setup
- [x] Content types created (Blog, Site Settings)
- [x] Frontend API client updated
- [x] Blog pages updated to use Strapi
- [x] Site settings updated to use Strapi
- [x] Google services integration added
- [x] Startup script updated
- [ ] Migrate existing content from Wagtail (manual step)
- [ ] Configure Google OAuth credentials
- [ ] Test all functionality

## Notes

- The old Wagtail backend is still in the `backend/` directory but is no longer used
- You may want to backup your Wagtail database before removing it
- Strapi uses SQLite by default (can be changed to PostgreSQL, MySQL, etc.)

