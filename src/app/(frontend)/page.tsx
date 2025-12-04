import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Stakque } from '@/components/Stakque'
import { Metrics } from '@/components/Metrics'
import { Philosophy } from '@/components/Philosophy'
import { Process } from '@/components/Process'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { getSiteSettings } from '@/lib/data'

export default async function HomePage() {
  const settings = await getSiteSettings()

  return (
    <main>
      <Hero settings={settings} />
      <About settings={settings} />
      <Stakque settings={settings} />
      <Metrics settings={settings} />
      <Philosophy settings={settings} />
      <Process settings={settings} />
      <FAQ settings={settings} />
      <Contact settings={settings} />
    </main>
  )
}
