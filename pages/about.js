import { useRouter } from 'next/navigation'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '@/styles/page.module.css'

export default function About() {
  return (
    <section>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.js</code>
          </p>
        </div>

        <h2>Layout Example (About)</h2>
      </main>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}