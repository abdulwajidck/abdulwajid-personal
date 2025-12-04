'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQProps {
  settings?: {
    faqs?: Array<{
      question: string
      answer: string
    }>
  } | null
}

const defaultFAQs = [
  {
    question: 'How does the E3 framework work?',
    answer: 'The E3 framework stands for Embedded, Essential, and Engineered. Embedded means we work as integrated partners within your organization, not as external consultants. Essential focuses on what truly moves the needle—no vanity metrics. Engineered means every system is data-driven, repeatable, and designed to scale. Together, these principles create marketing systems that become competitive advantages.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'While we\'ve achieved exceptional dominance in education marketing, the E3 framework drives remarkable results across diverse sectors. We work with e-commerce brands, SaaS companies, healthcare providers, technology firms, and businesses across 15+ industries. The framework adapts to any industry because it\'s built on universal growth principles.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer: 'Engagement timelines vary based on your specific needs. Initial strategy development typically takes 4-6 weeks. Implementation and system setup can range from 2-4 months depending on complexity. However, we work as embedded partners, so many clients maintain ongoing relationships for continuous optimization and scaling. The goal is building systems that work long-term, not quick fixes.',
  },
  {
    question: 'What\'s the difference between Stakque and your personal consulting?',
    answer: 'Stakque is the agency I founded—a full-service digital marketing agency that handles everything from SEO to performance marketing. My personal consulting focuses on strategic leadership, helping C-suite executives and leadership teams implement the E3 framework at an organizational level. Both leverage the same proven methodology, but serve different needs and engagement models.',
  },
  {
    question: 'Do you work with startups or only established businesses?',
    answer: 'We work with both. For startups, we help build marketing systems from the ground up, ensuring they\'re scalable from day one. For established businesses, we diagnose existing systems, identify bottlenecks, and optimize for growth. The E3 framework works at any stage—the key is embedding the right systems early.',
  },
  {
    question: 'What results can I expect?',
    answer: 'Results vary by industry and starting point, but our track record includes: 300% enrollment increases for education institutions, 40% reduction in customer acquisition costs, 746% increases in organic traffic, and ₹120Cr+ in revenue generated for clients. More importantly, we build systems that deliver sustainable, compounding growth rather than one-time spikes.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We focus on metrics that directly correlate with business outcomes: revenue metrics (CAC, LTV, revenue per customer), conversion metrics at each funnel stage, engagement metrics, and efficiency metrics (marketing ROI, time to conversion). We avoid vanity metrics and focus on what actually drives growth. Every client gets a custom dashboard tracking their specific KPIs.',
  },
  {
    question: 'What\'s your approach to pricing?',
    answer: 'Pricing is customized based on your specific needs, engagement scope, and expected outcomes. We offer both project-based and retainer models. The best approach is to schedule a strategy call where we can discuss your challenges and determine the right engagement model. We believe in transparent pricing and ROI-focused investments.',
  },
]

export function FAQ({ settings }: FAQProps) {
  const faqs = settings?.faqs?.length ? settings.faqs : defaultFAQs
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section" id="faq">
      <div className="section-header">
        <div>
          <div className="section-label">05 / FAQ</div>
          <h2>Frequently asked <em>questions</em></h2>
        </div>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={styles.icon}
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

