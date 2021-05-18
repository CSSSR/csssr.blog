import React from 'react'

import News from '../../../components/news512/News'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import calculatePageNumberByNewsIndex from '../../../utils/calculatePageNumberByNewsIndex'
import getPostsCategories from '../../../utils/getPostsCategories'

const News512 = ({
  posts,
  categories,
  totalNumberOfPosts,
  activePageNumber,
  language,
  lastPostDate,
}) => (
  <News
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activePageNumber={activePageNumber}
    language={language}
    lastPostDate={lastPostDate}
  />
)

export default News512

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage(['tag'])
  const postsNews = await getPostsNews(['title', 'date', 'slug', 'episodeNumber'])
  const language = 'ru'
  const categories = getPostsCategories(postsByLanguage[language])
  const orderedPostsNews = postsNews.sort(
    (postA, postB) => new Date(postB.date) - new Date(postA.date),
  )
  const postsNewsAndPage = orderedPostsNews.filter((post, index) => {
    const pageNumber = calculatePageNumberByNewsIndex(index)

    return pageNumber === params.page
  })
  const lastPostDate = orderedPostsNews[0].date

  return {
    props: {
      lastPostDate,
      posts: postsNewsAndPage,
      categories,
      totalNumberOfPosts: orderedPostsNews.length,
      activePageNumber: Number(params.page),
      language,
    },
  }
}

export async function getStaticPaths() {
  const postsNews = await getPostsNews()
  const pageNumber = Number(calculatePageNumberByNewsIndex(postsNews.length))
  const paths = [...Array(pageNumber)]
    .map((item, index) => ({
      params: { page: (index + 1).toString() },
    }))
    .filter(({ params: { page } }) => page !== '1')

  return {
    paths,
    fallback: false,
  }
}
