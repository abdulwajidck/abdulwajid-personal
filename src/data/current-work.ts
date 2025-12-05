// Current work timeline data
export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  type: 'project' | 'activity'
  status?: 'ongoing' | 'completed' | 'upcoming'
  link?: string
}

export const timelineItems: TimelineItem[] = [
  {
    id: '1',
    date: '2025-01-15',
    title: 'E3 Marketing Framework Documentation',
    description: 'Creating comprehensive documentation for the E3 Marketing framework, including case studies and implementation guides.',
    type: 'project',
    status: 'ongoing',
    link: '#',
  },
  {
    id: '2',
    date: '2025-01-10',
    title: 'Stakque Digital Platform Enhancement',
    description: 'Leading the development of new features for Stakque Digital platform to improve client onboarding and reporting.',
    type: 'project',
    status: 'ongoing',
  },
  {
    id: '3',
    date: '2025-01-05',
    title: 'Education Marketing Masterclass',
    description: 'Conducting workshops on education marketing strategies for institutions across India.',
    type: 'activity',
    status: 'ongoing',
  },
  {
    id: '4',
    date: '2024-12-20',
    title: 'Multi-Industry Marketing Campaign Launch',
    description: 'Successfully launched integrated marketing campaigns for clients in e-commerce, SaaS, and healthcare sectors.',
    type: 'project',
    status: 'completed',
  },
  {
    id: '5',
    date: '2024-12-15',
    title: 'SEO Optimization Project',
    description: 'Completed comprehensive SEO overhaul for education institution, resulting in 746% increase in organic traffic.',
    type: 'project',
    status: 'completed',
  },
]

// Helper function to get timeline items sorted by date (newest first)
export function getTimelineItems(): TimelineItem[] {
  return [...timelineItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

