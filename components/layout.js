// components/layout.js
import '@/styles/globals.css'
// import Navbar from './navbar'
import styles from '@/styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}