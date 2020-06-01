import Head from 'next/head'
import Posts from './Posts'
import Layout from '../Layout'
import { withRouter } from 'next/router'
import csssrBlogOrigin from '../../utils/csssrBlogOrigin'

import postsOrder from '../../postsOrder'
import myImageData from '../../public/assets/blog/posts/offshore-web-development/mainCover/desktop.all.png'

const MainPage = ({ allPosts }) => {
  const imageUrlPng3x = myImageData.data[myImageData.data.length - 1].srcSet['3x']
  return (
    <>
      <Head>
        <title>Blog | CSSSR</title>
        <meta
          name="description"
          content="Place where we are sharing our thoughts on different topics such as web development, management and remote work culture."
        />
        <meta property="og:title" content="Blog | CSSSR" />
        <meta
          property="og:description"
          content="Place where we are sharing our thoughts on different topics such as web development, management and remote work culture."
        />
        <meta property="og:url" content={csssrBlogOrigin} />
        <meta property="og:image" content={imageUrlPng3x} />
      </Head>
      <Layout>
        <h1 className="visual-hidden">Blog CSSSR</h1>
        <Posts posts={allPosts} postsOrder={postsOrder} />
      </Layout>
    </>
  )
}

export default withRouter(MainPage)
