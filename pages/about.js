import { kv } from '@vercel/kv'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'
import { Suspense } from 'react'
import ViewCounter from '@/components/view-counter'

export default function About() {
  return (
    <Layout>
      <Navbar />
      <section>
        <main className={styles.main}>
          <div className={styles.description}>
            <p className='bg-red-100'>
              Get started by editing&nbsp;
              <code className={styles.code}>app/page.js</code>
            </p>
          </div>
          <div>
            <Suspense>
              {/* @ts-expect-error Async Server Component */}
              <ViewCounter />
            </Suspense>
          </div>
          <h2>Layout Example (About) </h2>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
        </main>
      </section>
    </Layout>
  )
}
