import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'

export default function CommentPage() {
  const router = useRouter()
  const id = router.query.id
  const comment = router.query.comment

  return (
    <section>
      <main>
        <h1>Post: {id}</h1>
        <h1>Comment: {comment}</h1>
      </main>
    </section>
  )
}

CommentPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}