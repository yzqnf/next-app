
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Home from './home'

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <section>
        <Home />
      </section>
    </Layout>
  )
}

export default Index

// Index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Navbar />
//       {page}
//     </Layout>
//   )
// }