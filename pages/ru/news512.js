import React from 'react'

import News from '../../components/News'

import { getPostsByLanguage } from '../../lib/api'
import getPostsCategories from '../../utils/getPostsCategories'

const News512 = ({ categories, language, posts }) => (
  <News posts={posts} language={language} categories={categories} />
)

export default News512

export async function getStaticProps() {
  const postsByLanguage = await getPostsByLanguage(['title', 'date', 'slug', 'author', 'tag'])

  const language = 'ru'
  const categories = getPostsCategories(postsByLanguage[language])
  const posts = postsByLanguage[language]
    .filter((post) => post.tag === 'news')
    .sort((postA, postB) => new Date(postB.date) - new Date(postA.date))

  return {
    props: {
      categories,
      language,
      posts,
    },
  }
}
