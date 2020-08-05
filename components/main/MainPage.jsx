import React from 'react'
import { string, number, arrayOf, shape, object } from 'prop-types'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'
import Categories from './Categories'

import Pagination from './Pagination/Pagination'
import myImageData from '../../public/posts/en/offshore-web-development/mainCoverL/desktop.m.png'
import categories from '../../data/categories'

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

const MainPage = ({ posts, totalNumberOfPosts, activeCategory, activePageNumber, language }) => (
  <>
    <Head>
      <title>{meta[language].title}</title>
      <meta name="description" content={meta[language].description} />
      <meta property="og:title" content={meta[language].title} />
      <meta property="og:description" content={meta[language].description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://blog.csssr.com/${language}`} />
      <meta property="og:image" content={getOriginal(myImageData)} />
    </Head>
    <Layout language={language}>
      <h1 className="visual-hidden">{meta[language].title}</h1>
      <Categories items={categories} language={language} activeCategory={activeCategory} />

      <Posts language={language} posts={posts} />

      <Pagination
        language={language}
        activeCategory={activeCategory}
        activePageNumber={activePageNumber}
        totalNumberOfPosts={totalNumberOfPosts}
      />
    </Layout>
  </>
)

MainPage.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      coverImageAlt: string,
      images: object,
      slug: string,
      date: string,
      tag: string,
    }),
  ),
  totalNumberOfPosts: number,
  activeCategory: string,
  activePageNumber: number,
  language: string,
}

export default MainPage
