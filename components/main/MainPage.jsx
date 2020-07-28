import React, { useState } from 'react'
import { string, arrayOf, shape, object } from 'prop-types'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'
import Categories from './Categories'

import myImageData from '../../public/posts/en/offshore-web-development/mainCoverL/desktop.m.png'
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

const MainPage = ({ posts, language, activeCategory }) => {
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
      id: 'management',
      title: 'Management',
    },
    {
      id: 'web-development',
      title: 'Web development',
    },
    {
      id: 'culture',
      title: 'Culture',
    },
    // {
    //   id: 'news',
    //   title: '🔥 Новости',
    // },
  ]

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
        <Categories items={categoriesMock} activeCategory={activeCategory} />

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

Posts.propTypes = {
  allPosts: arrayOf(
    shape({
      title: string,
      coverImageAlt: string,
      images: object,
      slug: string,
      date: string,
      tag: string,
    }),
  ),
}

export default MainPage
