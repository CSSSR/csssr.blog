import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'

import myImageData from '../../public/posts/en/offshore-web-development/mainCover/desktop.all.png'

const meta = {
  en: {
    title: 'Blog | CSSSR',
    description:
      'Place where we are sharing our thoughts on different topics such as web development, management and remote work culture.',
  },
  ru: {
    title: 'Блог | CSSSR',
    description:
      'Место, где мы делимся своими мыслями на разные темы: веб разработка, менеджмент и культура удаленной работы. ',
  },
}

const MainPage = ({ posts, language }) => (
  <>
    <Head>
      <title>{meta[language].title}</title>
      <meta name="description" content={meta[language].description} />
      <meta property="og:title" content={meta[language].title} />
      <meta property="og:description" content={meta[language].description} />
      <meta property="og:url" content={`https://blog.csssr.com/${language}`} />
      <meta property="og:image" content={getOriginal(myImageData)} />
    </Head>
    <Layout language={language} isPost={false}>
      <h1 className="visual-hidden">{meta[language].title}</h1>
      <Posts language={language} posts={posts} />
    </Layout>
  </>
)

export default MainPage
