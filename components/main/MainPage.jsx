import Head from 'next/head'
import Posts from './Posts'
import Layout from '../Layout'

const MainPage = ({ allPosts }) => (
  <>
    <Head>
      <title>CSSSR Blog</title>
    </Head>
    <Layout>
      <Posts posts={allPosts} />
    </Layout>
  </>
)

export default MainPage
