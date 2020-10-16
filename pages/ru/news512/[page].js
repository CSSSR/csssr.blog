import React from 'react'
import News from '../../../components/News'

import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import calculatePageNumberByPostIndex from '../../../utils/calculatePageNumberByPostIndex'
import getPostsCategories from '../../../utils/getPostsCategories'

const News512 = ({ posts, categories, totalNumberOfPosts, activePageNumber, language }) => (
  <News
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activePageNumber={activePageNumber}
    language={language}
  />
)

export default News512

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage(['tag'])
  const postsNews = await getPostsNews(['title', 'date', 'slug', 'author', 'tag'])
  const language = 'ru'
  const categories = getPostsCategories(postsByLanguage[language])
  const orderedPostsNews = postsNews.sort(
    (postA, postB) => new Date(postB.date) - new Date(postA.date),
  )
  const postsNewsAndPage = orderedPostsNews.filter((post, index) => {
    const pageNumber = calculatePageNumberByPostIndex(index)

    return pageNumber === params.page
  })

  return {
    props: {
      posts: postsNewsAndPage,
      categories,
      totalNumberOfPosts: orderedPostsNews.length,
      activePageNumber: Number(params.page),
      language,
    },
  }
}

//  TODO: Сделать правильную реализацию getStaticPaths

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: '2' } }, { params: { page: '3' } }],
    fallback: false,
  }
}
