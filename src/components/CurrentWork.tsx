'use client'

import { getTimelineItems } from '@/data/current-work'
import styles from './CurrentWork.module.css'

export function CurrentWork() {
  const items = getTimelineItems()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'ongoing':
        return 'var(--accent)'
      case 'completed':
        return 'var(--text-secondary)'
      case 'upcoming':
        return 'var(--accent-dim)'
      default:
        return 'var(--text-secondary)'
    }
  }

  return (
    <section className={`section ${styles.timeline}`} id="what-im-doing">
      <div className={styles.header}>
        <div className="section-label">01 / What I'm Doing</div>
        <h2>Current <em>work</em> & activities</h2>
      </div>
      
      <div className={styles.timelineContainer}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineLine}>
              <div 
                className={styles.timelineDot}
                style={{ 
                  backgroundColor: getStatusColor(item.status),
                  borderColor: getStatusColor(item.status)
                }}
              />
              {index < items.length - 1 && <div className={styles.timelineConnector} />}
            </div>
            
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>{formatDate(item.date)}</div>
              <div className={styles.timelineBadge}>
                <span className={styles.badgeType}>{item.type}</span>
                {item.status && (
                  <span 
                    className={styles.badgeStatus}
                    style={{ color: getStatusColor(item.status) }}
                  >
                    {item.status}
                  </span>
                )}
              </div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineDescription}>{item.description}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  className={styles.timelineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

