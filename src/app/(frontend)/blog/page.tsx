import Link from 'next/link'
import styles from './blog.module.css'
import { getStrapiPages } from '@/lib/strapi'

export const metadata = {
  title: 'Blog - Abdul Wajid CK',
  description: 'Insights on E3 Marketing, digital strategy, and education growth.',
}

export default async function BlogPage() {
  const posts = await getStrapiPages()

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Insights & Articles</h1>
        <p>Thoughts on marketing, technology, and growth.</p>
      </header>

      <div className={styles.grid}>
        {posts.map((post: any) => {
          const feedImage = post.attributes?.feed_image?.data
          const imageUrl = feedImage 
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${feedImage.attributes?.url}`
            : null

          return (
            <Link href={`/blog/${post.attributes.slug}`} key={post.id} className={styles.card}>
              {imageUrl && (
                <div className={styles.imageWrapper}>
                  <img 
                    src={imageUrl} 
                    alt={post.attributes.title} 
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>Article</span>
                  <span className={styles.readTime}>5 min read</span>
                </div>
                <h2 className={styles.title}>{post.attributes.title}</h2>
                <p className={styles.excerpt}>{post.attributes.intro}</p>
                <span className={styles.date}>
                  {new Date(post.attributes.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
