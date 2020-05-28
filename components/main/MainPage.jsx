import Head from 'next/head'
import Posts from './Posts'
import Layout from '../Layout'
import postsOrder from '../../postsOrder'

const MainPage = ({ allPosts }) => (
  <>
    <Head>
      <title>CSSSR Blog</title>
    </Head>
    <Layout>
      <Posts posts={allPosts} postsOrder={postsOrder} />
    </Layout>
  </>
)

export default MainPage
