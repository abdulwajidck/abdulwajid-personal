'use client'

import { getToolsByCategory } from '@/data/tools'
import styles from './Tools.module.css'

export function Tools() {
  const toolsByCategory = getToolsByCategory()

  const categoryLabels: Record<string, string> = {
    development: 'Development',
    design: 'Design',
    productivity: 'Productivity',
    communication: 'Communication',
    analytics: 'Analytics',
    other: 'Other',
  }

  const categoryOrder = ['development', 'design', 'productivity', 'communication', 'analytics', 'other']

  return (
    <section className={`section ${styles.tools}`} id="tools">
      <div className={styles.header}>
        <div className="section-label">03 / Tools</div>
        <h2>Apps & software I <em>use daily</em></h2>
      </div>

      <div className={styles.categories}>
        {categoryOrder.map((category) => {
          const tools = toolsByCategory[category]
          if (!tools || tools.length === 0) return null

          return (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{categoryLabels[category]}</h3>
              <div className={styles.toolsGrid}>
                {tools.map((tool) => (
                  <a
                    key={tool.id}
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.toolCard}
                  >
                    <div className={styles.toolIcon}>
                      {tool.icon ? (
                        <img src={tool.icon} alt={tool.name} className={styles.toolIconImage} />
                      ) : (
                        <div className={styles.toolIconFallback}>
                          {tool.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className={styles.toolInfo}>
                      <h4 className={styles.toolName}>{tool.name}</h4>
                      <p className={styles.toolDescription}>{tool.description}</p>
                    </div>
                    <div className={styles.toolArrow}>→</div>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

