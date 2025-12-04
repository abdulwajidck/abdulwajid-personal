'use client'

import Image from 'next/image'
import styles from './About.module.css'

interface AboutProps {
  settings?: {
    aboutParagraphs?: Array<{ text: string; isHighlighted?: boolean }>
    tags?: Array<{ label: string }>
  } | null
}

const defaultParagraphs = [
  { text: "I'm the architect of E3 Marketing—a framework built on three pillars: Embedded, Essential, and Engineered. This is the foundation on which Stakque thrives.", isHighlighted: true },
  { text: "With over five years of experience, I've made a remarkable impact on education institution marketing, helping schools, colleges, and ed-tech companies scale their reach and enrollment. As CEO of Stakque Digital, I lead a team that doesn't just market—we embed, fix, and scale.", isHighlighted: false },
  { text: "Based in Mangalore, India, we've transformed struggling institutions into thriving brands, generated hundreds of qualified leads, and helped businesses achieve up to 746% increases in organic traffic.", isHighlighted: false },
]

const defaultTags = [
  { label: 'E3 Marketing' },
  { label: 'Education Marketing' },
  { label: 'SEO Expert' },
  { label: 'Performance Marketing' },
  { label: 'Brand Growth' },
]

export function About({ settings }: AboutProps) {
  const paragraphs = settings?.aboutParagraphs?.length ? settings.aboutParagraphs : defaultParagraphs
  const tags = settings?.tags?.length ? settings.tags : defaultTags

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={styles.header}>
        <div className="section-label">01 / About</div>
        <h2>Strategy meets <em>execution</em></h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.image}>
          <Image
            src="/abdul-wajid-photo.jpg"
            alt="Abdul Wajid CK"
            fill
            className={styles.photo}
            priority
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>
        <div className={styles.content}>
          {paragraphs.map((para, index) => (
            <p key={index} className={para.isHighlighted ? styles.highlighted : ''}>
              {para.text}
            </p>
          ))}
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
