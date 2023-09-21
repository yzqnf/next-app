import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'

export default function Post() {
  const router = useRouter()
  const id = router.query.id
  return (
    <section>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.js</code>
          </p>
        </div>
        <h1>Post: {id}</h1>
        <ul>
          <li>
            <Link href={`/post/${id}/first-comment`}>First comment</Link>
          </li>
          <li>
            <Link href={`/post/${id}/second-comment`}>Second comment</Link>
          </li>
        </ul>
      </main>
    </section>
  )
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}