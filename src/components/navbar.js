import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      {/* prefetch 预加载 */}
      <Link href="/about">About</Link>
      <Link href="/post/first">First post</Link>
      <Link href="/post/second">Second post</Link>
      <Link href="/api/user">User</Link>

    </nav>
  )
}