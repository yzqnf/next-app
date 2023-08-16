import { kv } from "@vercel/kv"
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'

export default async function User() {
  const router = useRouter()
  await kv.set("user", router.query.name);
  const user = await kv.get("user");
  console.log(user)
  return (
    <section>
      {/* <div>
        {
          user?.map((item) => (
            <div key={item.id}>
              {item.id} - {item.email}
            </div>
          ))}
      </div> */}
    </section>
  )
}

User.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}