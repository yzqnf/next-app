import { kv } from '@vercel/kv'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'
import { Suspense } from 'react'
import ViewCounter from '@/components/view-counter'

export default function About({ user }) {
  console.log(user)
  return (
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
  )
}

export async function getUserProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const user = await res.json()
  console.log("user:" + user)
  return { props: { user } }
  // const cart = await kv.get('avalue');
  // let user = await cart.json()
  // return {
  //   props: {
  //     user
  //   }
  // }
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}