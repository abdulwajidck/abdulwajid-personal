import Link from 'next/link'
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>Abdul Wajid CK</Link>
      <ul className={styles.links}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#stakque">Stakque</Link></li>
        <li><Link href="/#philosophy">Philosophy</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      <Link href="/blog" className={styles.mobileBlogLink}>Blog</Link>
    </nav>
  )
}
