import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'
import Categories from './Categories'

import postsOrder from '../../postsOrder'
import myImageData from '../../public/posts/offshore-web-development/mainCover/desktop.all.png'

const MainPage = ({ posts, activeCategory }) => {
  const categoriesMock = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'business',
      title: 'Business',
    },
    {
      id: 'managment',
      title: 'Managment',
    },
    {
      id: 'web-development',
      title: 'Web development',
    },
    {
      id: 'culture',
      title: 'Culture',
    },
    {
      id: 'news',
      title: '🔥 Новости',
    },
  ]

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
        <meta property="og:url" content="https://blog.csssr.com/en" />
        <meta property="og:image" content={getOriginal(myImageData)} />
      </Head>
      <Layout>
        <h1 className="visual-hidden">Blog CSSSR</h1>
        <Categories items={categoriesMock} activeCategory={activeCategory} />
        <Posts posts={posts} postsOrder={postsOrder} />
      </Layout>
    </>
  )
}

export default MainPage
