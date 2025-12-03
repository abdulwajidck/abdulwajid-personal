import styles from './Philosophy.module.css'

interface PhilosophyProps {
  settings?: {
    e3Cards?: Array<{ symbol: string; title: string; description: string }>
  } | null
}

const defaultCards = [
  { symbol: 'E¹', title: 'Embedded', description: "Marketing that works from inside your organization. I believe in working shoulder-to-shoulder with leadership teams—real transformation happens when you're embedded in the problem, not observing from outside." },
  { symbol: 'E²', title: 'Essential', description: "Strip away the noise. Every strategy focuses on what truly moves the needle—no vanity metrics, no fluff. Just the essential actions that drive measurable growth and lasting impact." },
  { symbol: 'E³', title: 'Engineered', description: "Growth isn't luck—it's engineered. Data-driven systems, repeatable frameworks, and precision execution. Every campaign is built like a machine designed to scale." },
]

export function Philosophy({ settings }: PhilosophyProps) {
  const cards = settings?.e3Cards?.length ? settings.e3Cards : defaultCards

  return (
    <section className="section" id="philosophy">
      <div className="section-header">
        <div>
          <div className="section-label">02 / The E3 Framework</div>
          <h2>The philosophy behind <em>E3 Marketing</em></h2>
        </div>
      </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.number}>{card.symbol}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
