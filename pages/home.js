'use client'

import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Link from 'next/link'
// import Router from 'next/router'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const JumptoPage = (id) => {
    router.push(`/post/${id}`, { scroll: false });
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link className={styles.card} href='/post/[id]' as={`post/1`}>
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <a
          className={styles.card}
          rel="noopener noreferrer"
          onClick={() => JumptoPage(2)}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>


      </div>
    </main>
  )
}

