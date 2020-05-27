import Head from 'next/head'
import Posts from './Posts'
import Layout from '../Layout'

const MainPage = ({ allPosts }) => (
  <>
    <Head>
      <title>Blog | CSSSR</title>
    </Head>
    <Layout>
      <h1 className="visual-hidden">Blog CSSSR</h1>
      <Posts posts={allPosts} />
    </Layout>
  </>
)

export default MainPage
