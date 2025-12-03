// Static blog posts data
export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  intro: string
  body: string
  imageUrl?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to E3 Marketing',
    slug: 'welcome-to-e3-marketing',
    date: '2024-01-15',
    intro: 'An introduction to the E3 Marketing framework and how it transforms business growth.',
    body: `
      <h2>What is E3 Marketing?</h2>
      <p>E3 Marketing stands for Embedded, Essential, and Engineered. It's a comprehensive framework designed to help businesses scale effectively, with particular success in the education sector.</p>
      
      <h2>The Three Pillars</h2>
      <p><strong>Embedded:</strong> Marketing that's deeply integrated into your business operations.</p>
      <p><strong>Essential:</strong> Focus on what truly matters for growth.</p>
      <p><strong>Engineered:</strong> Data-driven, systematic approach to marketing.</p>
      
      <p>This framework has helped generate ₹120Cr+ in revenue for education institutions and businesses.</p>
    `,
  },
  {
    id: '2',
    title: 'Digital Strategy for Education',
    slug: 'digital-strategy-for-education',
    date: '2024-02-20',
    intro: 'How digital marketing can transform education institutions and drive enrollment growth.',
    body: `
      <h2>The Education Marketing Challenge</h2>
      <p>Education institutions face unique challenges in marketing. They need to reach the right audience, build trust, and demonstrate value.</p>
      
      <h2>Our Approach</h2>
      <p>Through strategic digital marketing, we've helped institutions:</p>
      <ul>
        <li>Increase enrollment by 300%</li>
        <li>Reduce cost per acquisition by 40%</li>
        <li>Build sustainable growth systems</li>
      </ul>
      
      <p>The key is understanding your audience and creating content that resonates with students and parents.</p>
    `,
  },
  {
    id: '3',
    title: 'Building Scalable Marketing Systems',
    slug: 'building-scalable-marketing-systems',
    date: '2024-03-10',
    intro: 'Learn how to build marketing systems that scale with your business growth.',
    body: `
      <h2>Why Systems Matter</h2>
      <p>Scalable marketing systems are the foundation of sustainable growth. They allow you to:</p>
      <ul>
        <li>Automate repetitive tasks</li>
        <li>Maintain consistency</li>
        <li>Scale without proportional cost increases</li>
      </ul>
      
      <h2>Key Components</h2>
      <p>Every scalable marketing system needs:</p>
      <ol>
        <li><strong>Clear Processes:</strong> Documented workflows that anyone can follow</li>
        <li><strong>Automation:</strong> Tools that reduce manual work</li>
        <li><strong>Measurement:</strong> KPIs that track what matters</li>
        <li><strong>Optimization:</strong> Continuous improvement based on data</li>
      </ol>
      
      <p>Start small, measure everything, and iterate based on results.</p>
    `,
  },
]

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null
}

// Helper function to get all posts
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

