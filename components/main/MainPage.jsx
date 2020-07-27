import React, { useState } from 'react'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'
import Categories from './Categories'

import myImageData from '../../public/posts/en/offshore-web-development/mainCoverM/desktop.m.png'
import Pagination from './Pagination/Pagination'

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

import categories from '../../data/categories'

const MainPage = ({ posts, language, activeCategory }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(1)

  // const indexOfLastPost = currentPage * postsPerPage
  // const indexOfFirstPost = indexOfLastPost - postsPerPage
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <>
      <Head>
        <title>{meta[language].title}</title>
        <meta name="description" content={meta[language].description} />
        <meta property="og:title" content={meta[language].title} />
        <meta property="og:description" content={meta[language].description} />
        <meta property="og:url" content={`https://blog.csssr.com/${language}`} />
        <meta property="og:image" content={getOriginal(myImageData)} />
      </Head>
      <Layout language={language}>
        <h1 className="visual-hidden">{meta[language].title}</h1>
        <Categories items={categories} language={language} activeCategory={activeCategory} />

        <Posts language={language} posts={posts} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Layout>
    </>
  )
}

export default MainPage
