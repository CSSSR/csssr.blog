import React from 'react'

import News from '../../../components/news512/News'
import { NEWS_PER_PAGE } from '../../../data/constants'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import getPostsCategories from '../../../utils/getPostsCategories'

const News512 = ({ categories, language, posts, totalNumberOfPosts, lastPostDate }) => (
  <News
    posts={posts}
    language={language}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activePageNumber={1}
    lastPostDate={lastPostDate}
  />
)

export default News512

export async function getStaticProps() {
  const postsByLanguage = await getPostsByLanguage(['tag'])
  const postsNews = await getPostsNews(['title', 'date', 'slug', 'episodeNumber'])
  const language = 'ru'
  const categories = getPostsCategories(postsByLanguage[language])
  const orderedPostsNews = postsNews.sort(
    (postA, postB) => new Date(postB.date) - new Date(postA.date),
  )
  const lastPostDate = orderedPostsNews[0].date

  return {
    props: {
      lastPostDate,
      categories,
      language,
      posts: orderedPostsNews.slice(0, NEWS_PER_PAGE),
      totalNumberOfPosts: orderedPostsNews.length,
    },
  }
}
