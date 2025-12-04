'use client'

import styles from './Process.module.css'

interface ProcessProps {
  settings?: {
    processSteps?: Array<{
      number: number
      title: string
      description: string
    }>
  } | null
}

const defaultSteps = [
  {
    number: 1,
    title: 'Discovery & Diagnosis',
    description: 'We start by deeply understanding your business, market position, and growth challenges. Through comprehensive audits and stakeholder interviews, we identify the root causes of growth barriers.',
  },
  {
    number: 2,
    title: 'Strategy Development',
    description: 'Applying the E3 framework, we develop a customized marketing strategy that\'s embedded in your operations, focused on essential growth drivers, and engineered for scalability.',
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'We work as embedded partners, not external consultants. Our team integrates directly with yours to build marketing systems, set up automation, and establish data-driven processes.',
  },
  {
    number: 4,
    title: 'Optimization',
    description: 'Continuous improvement through data analysis. We measure everything, identify what\'s working, and refine strategies based on real performance metrics—not assumptions.',
  },
  {
    number: 5,
    title: 'Scale & Growth',
    description: 'Once systems are proven, we scale them efficiently. The goal isn\'t just growth—it\'s sustainable, profitable expansion that compounds over time.',
  },
]

export function Process({ settings }: ProcessProps) {
  const steps = settings?.processSteps?.length ? settings.processSteps : defaultSteps

  return (
    <section className="section" id="process">
      <div className="section-header">
        <div>
          <div className="section-label">03 / How We Work</div>
          <h2>How we implement <em>E3 Marketing</em></h2>
        </div>
      </div>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

