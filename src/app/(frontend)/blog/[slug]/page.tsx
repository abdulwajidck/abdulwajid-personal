import { getBlogPost, getBlogPosts } from '@/lib/data'
import styles from './post.module.css'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Required for static export with dynamic routes
export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) return {}

  return {
    title: `${post.title} - Abdul Wajid CK`,
    description: post.intro,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
      
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>Article</span>
            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.intro}>{post.intro}</p>
        </header>

        {post.imageUrl && (
          <div className={styles.featuredImage}>
            <img 
              src={post.imageUrl} 
              alt={post.title} 
            />
          </div>
        )}

        <div className={styles.content}>
          {post.body && (
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          )}
        </div>
      </article>

      <footer className={styles.footer}>
        <div className={styles.author}>
          <h3>About the Author</h3>
          <p>
            <strong>Abdul Wajid CK</strong> is the founder of Stakque and creator of the E3 Marketing 
            framework. With over 5 years of experience, he has helped generate ₹120Cr+ in revenue 
            for education institutions and businesses.
          </p>
        </div>
        
        <Link href="/blog" className="btn btn-secondary">
          ← Back to All Posts
        </Link>
      </footer>
    </main>
  )
}
