import Head from 'next/head'
import Posts from './Posts'
import Layout from '../Layout'

import postsOrder from '../../postsOrder'
import myImageData from '../../public/assets/blog/posts/offshore-web-development/mainCover/desktop.all.png'

const MainPage = ({ allPosts }) => {
  const imageUrlPng3x = myImageData.data[myImageData.data.length - 1].srcSet['3x']
  return (
    <>
      <Head>
        <title>Blog | CSSSR</title>
        <meta property="og:image" content={imageUrlPng3x} />
      </Head>
      <Layout>
        <h1 className="visual-hidden">Blog CSSSR</h1>
        <Posts posts={allPosts} postsOrder={postsOrder} />
      </Layout>
    </>
  )
}

export default MainPage
