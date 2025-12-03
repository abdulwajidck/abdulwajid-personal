import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Abdul Wajid CK — Architect of E3 Marketing',
  description: 'Creator of the E3 Marketing framework—Embedded, Essential, and Engineered. Transforming how businesses scale, with remarkable impact on education institutions.',
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="grid-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
