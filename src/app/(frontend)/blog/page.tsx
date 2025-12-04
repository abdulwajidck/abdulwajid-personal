import Link from 'next/link'
import styles from './blog.module.css'
import { getBlogPosts } from '@/lib/data'

export const metadata = {
  title: 'Blog - Abdul Wajid CK',
  description: 'Insights on E3 Marketing, digital strategy, and education growth.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Insights & Articles</h1>
        <p className={styles.subtitle}>Strategic insights on E3 Marketing, digital strategy, education growth, and building scalable marketing systems.</p>
      </header>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
            {post.imageUrl && (
              <div className={styles.imageWrapper}>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.category}>Article</span>
                <span className={styles.readTime}>5 min read</span>
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.intro}</p>
              <span className={styles.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
