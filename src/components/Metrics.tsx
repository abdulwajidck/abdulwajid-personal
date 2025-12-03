import styles from './Metrics.module.css'

interface MetricsProps {
  settings?: {
    metrics?: Array<{ value: string; label: string }>
  } | null
}

const defaultMetrics = [
  { value: '746%', label: 'Traffic Increase' },
  { value: '686', label: 'Leads in 1 Month' },
  { value: '90%', label: 'Avg. Occupancy' },
  { value: '95%', label: 'Google-Driven Sales' },
]

export function Metrics({ settings }: MetricsProps) {
  const metrics = settings?.metrics?.length ? settings.metrics : defaultMetrics

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.value}>{metric.value}</div>
            <div className={styles.label}>{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
