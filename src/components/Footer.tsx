import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Abdul Wajid CK. All rights reserved.</p>
      <div className={styles.links}>
        <Link href="https://stakque.com" target="_blank">Stakque</Link>
        <Link href="https://linkedin.com/in/abdulwajidck" target="_blank">LinkedIn</Link>
        <Link href="https://instagram.com/wajistakque" target="_blank">Instagram</Link>
      </div>
    </footer>
  )
}
