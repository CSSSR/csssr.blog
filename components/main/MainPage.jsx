import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import Posts from './Posts'
import Layout from '../Layout'

import postsOrder from '../../postsOrder'
import myImageData from '../../public/posts/offshore-web-development/mainCover/desktop.all.png'
import Pagination from './Pagination/Pagination'

const MainPage = ({ allPosts }) => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(1)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setPosts(allPosts);
  }, [])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
        <Posts posts={allPosts} postsOrder={postsOrder} />
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
