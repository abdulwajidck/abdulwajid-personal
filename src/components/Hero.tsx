'use client'

import Link from 'next/link'
import styles from './Hero.module.css'
import { Graph3D } from './Graph3D'

interface HeroProps {
  settings?: {
    heroLabel?: string
    heroName?: string
    heroTagline?: string
    heroDescription?: string
    stats?: Array<{ value: string; label: string }>
  } | null
}

const defaultStats = [
  { value: '₹120Cr+', label: 'Revenue Generated' },
  { value: '200+', label: 'Clients Served' },
  { value: '5+', label: 'Years Experience' },
]

export function Hero({ settings }: HeroProps) {
  const heroLabel = settings?.heroLabel || 'Founder & Digital Strategist'
  const heroName = settings?.heroName || 'Abdul Wajid CK'
  const heroTagline = settings?.heroTagline || 'Architect of E3 Marketing'
  const heroDescription = settings?.heroDescription || 'Creator of the E3 Marketing framework—Embedded, Essential, and Engineered. Transforming how businesses scale, with remarkable impact on education institutions.'
  const stats = settings?.stats?.length ? settings.stats : defaultStats

  return (
    <section className={styles.hero}>
      <div className={styles.graphBackground}>
        <Graph3D />
      </div>
      <div className={styles.label}>
        <span className={styles.dot} />
        {heroLabel}
      </div>
      <h1 className={styles.title}>
        <span>{heroName}</span>
        <span>{heroTagline.split(' ').map((word, i) => 
          word === 'E3' ? <em key={i}>{word} </em> : word + ' '
        )}</span>
      </h1>
      <p className={styles.description}>{heroDescription}</p>
      <div className={styles.cta}>
        <Link href="#contact" className="btn btn-primary">Let's Connect</Link>
        <Link href="https://stakque.com" className="btn btn-secondary" target="_blank">
          Visit Stakque →
        </Link>
      </div>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <span className={styles.statNumber}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
