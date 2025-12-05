// Tools and software data
export interface Tool {
  id: string
  name: string
  category: 'development' | 'design' | 'productivity' | 'communication' | 'analytics' | 'other'
  description: string
  website: string
  icon?: string
}

export const tools: Tool[] = [
  // Development
  {
    id: 'tool-1',
    name: 'VS Code',
    category: 'development',
    description: 'My primary code editor. Lightweight, fast, and incredibly extensible.',
    website: 'https://code.visualstudio.com',
  },
  {
    id: 'tool-2',
    name: 'GitHub',
    category: 'development',
    description: 'Version control and collaboration platform. Essential for all my projects.',
    website: 'https://github.com',
  },
  {
    id: 'tool-3',
    name: 'Next.js',
    category: 'development',
    description: 'React framework for production. Powers this website and many client projects.',
    website: 'https://nextjs.org',
  },
  // Design
  {
    id: 'tool-4',
    name: 'Figma',
    category: 'design',
    description: 'Collaborative design tool for creating interfaces, prototypes, and design systems.',
    website: 'https://www.figma.com',
  },
  {
    id: 'tool-5',
    name: 'Adobe Creative Suite',
    category: 'design',
    description: 'Industry-standard tools for graphic design, video editing, and creative work.',
    website: 'https://www.adobe.com/creativecloud.html',
  },
  // Productivity
  {
    id: 'tool-6',
    name: 'Notion',
    category: 'productivity',
    description: 'All-in-one workspace for notes, docs, tasks, and project management.',
    website: 'https://www.notion.so',
  },
  {
    id: 'tool-7',
    name: 'Linear',
    category: 'productivity',
    description: 'Beautiful issue tracking and project management for software teams.',
    website: 'https://linear.app',
  },
  {
    id: 'tool-8',
    name: 'Obsidian',
    category: 'productivity',
    description: 'Powerful knowledge base that works on top of a local folder of plain text Markdown files.',
    website: 'https://obsidian.md',
  },
  // Communication
  {
    id: 'tool-9',
    name: 'Slack',
    category: 'communication',
    description: 'Team communication platform. Keeps all team conversations organized.',
    website: 'https://slack.com',
  },
  {
    id: 'tool-10',
    name: 'Zoom',
    category: 'communication',
    description: 'Video conferencing for client meetings, workshops, and team syncs.',
    website: 'https://zoom.us',
  },
  // Analytics
  {
    id: 'tool-11',
    name: 'Google Analytics',
    category: 'analytics',
    description: 'Web analytics service to track and report website traffic and user behavior.',
    website: 'https://analytics.google.com',
  },
  {
    id: 'tool-12',
    name: 'Vercel Analytics',
    category: 'analytics',
    description: 'Real-time web analytics with privacy-first approach. Integrated into this site.',
    website: 'https://vercel.com/analytics',
  },
]

// Helper function to get tools grouped by category
export function getToolsByCategory(): Record<string, Tool[]> {
  return tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = []
    }
    acc[tool.category].push(tool)
    return acc
  }, {} as Record<string, Tool[]>)
}

// Helper function to get all tools
export function getAllTools(): Tool[] {
  return tools
}

