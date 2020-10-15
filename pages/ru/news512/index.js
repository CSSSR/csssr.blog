import React from 'react'

import News from '../../../components/News'

import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import getPostsCategories from '../../../utils/getPostsCategories'

const News512 = ({ categories, language, posts }) => (
  <News posts={posts} language={language} categories={categories} />
)

export default News512

export async function getStaticProps() {
  const postsByLanguage = await getPostsByLanguage(['tag'])
  const postsNews = await getPostsNews(['title', 'date', 'slug', 'author', 'tag'])

  console.log('postsNews = ', postsNews)

  const language = 'ru'
  const categories = getPostsCategories(postsByLanguage[language])
  const posts = postsNews.sort((postA, postB) => new Date(postB.date) - new Date(postA.date))

  return {
    props: {
      categories,
      language,
      posts,
    },
  }
}
