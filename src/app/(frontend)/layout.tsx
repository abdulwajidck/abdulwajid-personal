import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Instrument_Serif } from 'next/font/google'
import '@/styles/globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
  variable: '--font-instrument-serif',
  fallback: ['Georgia', 'serif'],
})

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
    <html lang="en" suppressHydrationWarning className={instrumentSerif.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body suppressHydrationWarning>
        <div className="grid-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
