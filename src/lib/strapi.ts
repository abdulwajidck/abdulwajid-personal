// Strapi API URL - works in both server and client components
const STRAPI_API_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/api`

export async function getStrapiPage(slug: string) {
  const res = await fetch(
    `${STRAPI_API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: 'no-store',
    }
  )
  
  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()
  
  if (data.data.length === 0) {
    return null
  }

  return data.data[0]
}

export async function getStrapiPages() {
  const res = await fetch(
    `${STRAPI_API_URL}/blogs?populate=*&sort=date:desc`,
    {
      cache: 'no-store',
    }
  )
  
  if (!res.ok) {
    throw new Error('Failed to fetch pages')
  }

  const data = await res.json()
  return data.data || []
}

export async function getSiteSettings() {
  try {
    const res = await fetch(
      `${STRAPI_API_URL}/site-setting?populate=*`,
      {
        cache: 'no-store',
      }
    )
    
    if (!res.ok) {
      throw new Error('Failed to fetch site settings')
    }

    const data = await res.json()
    
    if (!data.data) {
      // Return default settings if not found
      return getDefaultSettings()
    }

    const settings = data.data.attributes
    
    // Transform Strapi format to match component expectations
    return {
      // Hero
      heroLabel: settings.hero_label || "Digital Architect",
      heroName: settings.hero_name || "Abdul Wajid CK",
      heroTagline: settings.hero_tagline || "Architect of E3 Marketing",
      heroDescription: settings.hero_description || "Transforming how businesses scale, with remarkable impact on education institutions.",
      stats: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Delivered" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      
      // About
      aboutParagraphs: settings.about_paragraphs || [
        { text: "I am a digital architect focused on building scalable marketing systems." },
      ],
      tags: settings.tags || [
        { label: "Marketing" },
        { label: "Technology" },
        { label: "Strategy" },
      ],

      // Stakque
      stakqueTitle: settings.stakque_title || "Founder of Stakque",
      stakqueDescription: settings.stakque_description || "Stakque is India's strategic branding and digital marketing agency.",
      services: [],

      // Metrics
      metrics: settings.metrics || [
        { value: "10M+", label: "Ad Impressions" },
        { value: "500k+", label: "Leads Generated" },
      ],

      // Philosophy
      e3Cards: [],

      // Contact
      email: settings.contact_email || 'hello@example.com',
      phone: settings.contact_phone || '+91 1234567890',
      linkedinUrl: settings.linkedin_url || 'https://linkedin.com',
      instagramUrl: settings.instagram_url || 'https://instagram.com',
      stakqueUrl: settings.stakque_url || 'https://stakque.com',
    }
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return getDefaultSettings()
  }
}

function getDefaultSettings() {
  return {
    heroLabel: "Digital Architect",
    heroName: "Abdul Wajid CK",
    heroTagline: "Architect of E3 Marketing",
    heroDescription: "Transforming how businesses scale, with remarkable impact on education institutions.",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    aboutParagraphs: [
      { text: "I am a digital architect focused on building scalable marketing systems." },
    ],
    tags: [
      { label: "Marketing" },
      { label: "Technology" },
      { label: "Strategy" },
    ],
    stakqueTitle: "Founder of Stakque",
    stakqueDescription: "Stakque is India's strategic branding and digital marketing agency.",
    services: [],
    metrics: [
      { value: "10M+", label: "Ad Impressions" },
      { value: "500k+", label: "Leads Generated" },
    ],
    e3Cards: [],
    email: 'hello@example.com',
    phone: '+91 1234567890',
    linkedinUrl: 'https://linkedin.com',
    instagramUrl: 'https://instagram.com',
    stakqueUrl: 'https://stakque.com',
  }
}

