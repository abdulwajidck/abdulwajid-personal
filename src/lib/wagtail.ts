const WAGTAIL_API_URL = 'http://localhost:8000/api/v2'

export async function getWagtailPage(slug: string) {
  const res = await fetch(`${WAGTAIL_API_URL}/pages/?slug=${slug}&fields=*,body,date,intro,feed_image`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()
  
  if (data.items.length === 0) {
    return null
  }

  return data.items[0]
}

export async function getWagtailPages(type: string) {
  const res = await fetch(`${WAGTAIL_API_URL}/pages/?type=${type}&fields=*,date,intro,feed_image`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch pages')
  }

  return res.json()
}

export async function getSiteSettings() {
  // Mock data matching component expectations
  return {
    // Hero
    heroLabel: "Digital Architect",
    heroName: "Abdul Wajid CK",
    heroTagline: "Architect of E3 Marketing",
    heroDescription: "Transforming how businesses scale, with remarkable impact on education institutions.",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    
    // About
    aboutParagraphs: [
      { text: "I am a digital architect focused on building scalable marketing systems." },
    ],
    tags: [
      { label: "Marketing" },
      { label: "Technology" },
      { label: "Strategy" },
    ],

    // Stakque
    stakqueTitle: "Founder of Stakque",
    stakqueDescription: "Stakque is India's strategic branding and digital marketing agency.",
    services: [],

    // Metrics
    metrics: [
      { value: "10M+", label: "Ad Impressions" },
      { value: "500k+", label: "Leads Generated" },
    ],

    // Philosophy
    e3Cards: [],

    // Contact
    email: 'hello@example.com',
    phone: '+91 1234567890',
    linkedinUrl: 'https://linkedin.com',
    instagramUrl: 'https://instagram.com',
    stakqueUrl: 'https://stakque.com',
  }
}
