import { CurrentWork } from '@/components/CurrentWork'
import { Books } from '@/components/Books'
import { Tools } from '@/components/Tools'

export const metadata = {
  title: 'Resources — Abdul Wajid CK',
  description: 'Current work, books I\'m reading, and tools I use daily.',
}

export default function ResourcesPage() {
  return (
    <main>
      <CurrentWork />
      <Books />
      <Tools />
    </main>
  )
}

