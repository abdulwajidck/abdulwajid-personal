import { getStrapiPage } from '@/lib/strapi'
import styles from './post.module.css'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getStrapiPage(slug)
  
  if (!post) return {}

  return {
    title: `${post.attributes.title} - Abdul Wajid CK`,
    description: post.attributes.intro,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getStrapiPage(slug)

  if (!post) {
    notFound()
  }

  const feedImage = post.attributes?.feed_image?.data
  const imageUrl = feedImage 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${feedImage.attributes?.url}`
    : null

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
              {new Date(post.attributes.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <h1 className={styles.title}>{post.attributes.title}</h1>
          <p className={styles.intro}>{post.attributes.intro}</p>
        </header>

        {imageUrl && (
          <div className={styles.featuredImage}>
            <img 
              src={imageUrl} 
              alt={post.attributes.title} 
            />
          </div>
        )}

        <div className={styles.content}>
          {post.attributes.body && (
            <div dangerouslySetInnerHTML={{ __html: post.attributes.body }} />
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
