// components/layout.js

import styles from '@/styles/layout.module.scss'

export default function layout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}