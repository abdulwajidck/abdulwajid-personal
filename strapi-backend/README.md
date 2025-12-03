# Strapi Backend for KOSbite

This is the Strapi CMS backend that replaced Wagtail.

## 🏠 Local Development (Recommended)

Strapi runs **locally** for development. This is the default setup!

### Quick Setup

```bash
# Run the setup script
./setup-local.sh

# Or manually:
npm install
# Create .env file (see below)
```

### Start Strapi Locally

```bash
npm run develop
```

Access admin at: **http://localhost:1337/admin**

### Using the Full Stack

From project root:
```bash
./start-dev.sh
```

This starts both Strapi (port 1337) and Next.js (port 5555).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here (generate 4 random strings)
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Google Cloud Storage (optional)
GCS_BUCKET=your-bucket-name
GCS_SERVICE_ACCOUNT_KEY=path-to-service-account-key.json

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. Start the development server:
```bash
npm run develop
```

4. Access the admin panel at: http://localhost:1337/admin

## Content Types

### Blog
- `title` (String, required)
- `slug` (UID, auto-generated from title)
- `date` (Date, required)
- `intro` (Text, required)
- `body` (RichText)
- `feed_image` (Media, single image)

### Site Settings
Single type for global site configuration:
- Site information (name, description)
- Contact information (email, phone)
- Social links (LinkedIn, Instagram, Stakque)
- Hero section content
- About section content
- Metrics and statistics

## API Endpoints

- Blog posts: `GET /api/blogs`
- Single blog post: `GET /api/blogs?filters[slug][$eq]=your-slug`
- Site settings: `GET /api/site-setting`

## Google Integration

The backend includes Google services integration:
- Google OAuth authentication
- Google Sheets data fetching
- Google Drive file uploads
- Google Analytics data retrieval

Configure Google credentials in the `.env` file to enable these features.

