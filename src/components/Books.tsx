'use client'

import { getBooksData } from '@/data/books'
import styles from './Books.module.css'

export function Books() {
  const { currentlyReading, read } = getBooksData()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric'
    })
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
    return (
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={styles.star}
            style={{ color: i < rating ? 'var(--accent)' : 'var(--border)' }}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className={`section ${styles.books}`} id="books">
      <div className={styles.header}>
        <div className="section-label">02 / Books</div>
        <h2>What I'm <em>reading</em></h2>
      </div>

      {currentlyReading && (
        <div className={styles.currentlyReading}>
          <div className={styles.currentlyReadingLabel}>Currently Reading</div>
          <div className={styles.currentBook}>
            <div className={styles.bookCoverPlaceholder}>
              {currentlyReading.coverImage ? (
                <img 
                  src={currentlyReading.coverImage} 
                  alt={currentlyReading.title}
                  className={styles.bookCover}
                />
              ) : (
                <div className={styles.bookCoverFallback}>
                  <span>{currentlyReading.title.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{currentlyReading.title}</h3>
              <p className={styles.bookAuthor}>by {currentlyReading.author}</p>
              <p className={styles.bookDescription}>{currentlyReading.description}</p>
              {currentlyReading.progress !== undefined && (
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${currentlyReading.progress}%` }}
                    />
                  </div>
                  <span className={styles.progressText}>{currentlyReading.progress}% complete</span>
                </div>
              )}
              {currentlyReading.link && (
                <a 
                  href={currentlyReading.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookLink}
                >
                  View on Amazon →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {read.length > 0 && (
        <div className={styles.readBooks}>
          <div className={styles.readBooksLabel}>Already Read</div>
          <div className={styles.readBooksGrid}>
            {read.map((book) => (
              <div key={book.id} className={styles.readBookCard}>
                <div className={styles.readBookCover}>
                  {book.coverImage ? (
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      className={styles.readBookImage}
                    />
                  ) : (
                    <div className={styles.readBookFallback}>
                      <span>{book.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className={styles.readBookInfo}>
                  <h4 className={styles.readBookTitle}>{book.title}</h4>
                  <p className={styles.readBookAuthor}>{book.author}</p>
                  {book.dateRead && (
                    <p className={styles.readBookDate}>Read in {formatDate(book.dateRead)}</p>
                  )}
                  {renderStars(book.rating)}
                  {book.link && (
                    <a 
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readBookLink}
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

