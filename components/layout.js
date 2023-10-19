// components/layout.js

import '../styles/globals.css'
import styles from '@/styles/layout.module.scss'

export default function layout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}