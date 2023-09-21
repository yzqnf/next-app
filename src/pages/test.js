import styles from '@/styles/page.module.css'
import { kv } from '@vercel/kv';


export default async function Test() {
  const cart = await kv.get('avalue');
  console.log(cart)
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
          {/* {cart} */}
        </div>
      </main>
    </section>
  )
}