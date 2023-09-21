import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'
import Image from 'next/image'

function Profile() {
  return (
    <Image
      className='w-50 h-50'
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

Gallery.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}