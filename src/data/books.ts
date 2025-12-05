// Books data
export interface Book {
  id: string
  title: string
  author: string
  description: string
  coverImage?: string
  link?: string
  progress?: number // 0-100 for currently reading
  dateRead?: string // For already read books
  rating?: number // 1-5 for already read books
}

export interface BooksData {
  currentlyReading: Book | null
  read: Book[]
}

export const booksData: BooksData = {
  currentlyReading: {
    id: 'current-1',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    description: 'A methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.',
    progress: 65,
    link: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
  },
  read: [
    {
      id: 'read-1',
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An easy and proven way to build good habits and break bad ones. Tiny changes that make a remarkable difference.',
      dateRead: '2024-11-15',
      rating: 5,
      link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
    },
    {
      id: 'read-2',
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey',
      description: 'A powerful lesson in personal change. The book presents a principle-centered approach for solving personal and professional problems.',
      dateRead: '2024-10-20',
      rating: 5,
      link: 'https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519',
    },
    {
      id: 'read-3',
      title: 'Influence: The Psychology of Persuasion',
      author: 'Robert B. Cialdini',
      description: 'The classic book on persuasion explains the psychology of why people say yes and how to apply these principles ethically in business and life.',
      dateRead: '2024-09-10',
      rating: 4,
      link: 'https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X',
    },
  ],
}

// Helper function to get books data
export function getBooksData(): BooksData {
  return booksData
}

