import React from 'react'
import Link from 'next/link'
import styles from './Stakque.module.css'

interface StakqueProps {
  settings?: {
    stakqueTitle?: string
    stakqueDescription?: string
    services?: Array<{ title: string; description: string; icon?: string }>
  } | null
}

const defaultServices = [
  { title: 'SEO & Search Visibility', description: 'Technical SEO, content strategies & on-page optimization for long-term organic growth.', icon: 'chart' },
  { title: 'Performance Marketing', description: 'Targeted ads on Google, Meta & LinkedIn with ROI-focused conversion tracking.', icon: 'pie' },
  { title: 'Marketing Automation', description: 'Automated CRM, email sequences & chatbots for seamless lead nurturing.', icon: 'gear' },
  { title: 'Web Design & Development', description: 'Fast, user-friendly websites optimized for performance and conversions.', icon: 'monitor' },
]

const icons: Record<string, React.ReactElement> = {
  chart: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
  pie: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>,
  gear: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  monitor: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
}

export function Stakque({ settings }: StakqueProps) {
  const services = settings?.services?.length ? settings.services : defaultServices

  return (
    <section className={styles.section} id="stakque">
      <div className={styles.grid}>
        <div className={styles.intro}>
          <h3>Founder of <em>Stakque</em></h3>
          <p>
            Stakque is India's strategic branding and digital marketing agency. 
            Founded in 2019, we've grown to become South India's trusted SEO agency, 
            empowering businesses with comprehensive digital solutions.
          </p>
          <p>
            We go beyond typical agencies—working as an embedded partner to diagnose 
            growth barriers and implement data-driven marketing systems that deliver 
            measurable, lasting results.
          </p>
          <Link href="https://stakque.com" className="btn btn-primary" target="_blank">
            Explore Stakque
          </Link>
        </div>
        <div className={styles.services}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {icons[service.icon || 'chart']}
              </div>
              <div className={styles.cardContent}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
