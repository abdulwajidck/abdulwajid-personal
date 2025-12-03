// Static data access layer - Cloudflare compatible
import { siteSettings } from '@/data/site-settings'
import { getAllPosts, getPostBySlug, BlogPost } from '@/data/blog-posts'

export async function getSiteSettings() {
  // Return static data (async for consistency with previous API)
  return Promise.resolve(siteSettings)
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return Promise.resolve(getAllPosts())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return Promise.resolve(getPostBySlug(slug))
}

// Re-export types
export type { BlogPost }

