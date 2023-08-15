import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/post/first">First post</Link>
      <Link href="/post/second">Second post</Link>
    </nav>
  )
}