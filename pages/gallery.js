import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'
import Image from 'next/image'

function Profile() {
  return (
    <Image
      className='w-50 h-50'
      width={100}
      height={100}
      src="https://gitee.com/yzqnf/qdkfgf/raw/master/img/cmd4.png"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <Layout>
      <Navbar />
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </Layout>
  );
}
