import React from 'react'

import MainPage from '../../components/main/MainPage'
import { POSTS_PER_PAGE } from '../../data/constants'
import { getPostsByLanguage, getPostsNews } from '../../lib/api'
import getPostsCategories from '../../utils/getPostsCategories'
import languages from '../../utils/languages'
import sortByDate from '../../utils/sortByDate'

const Index = ({ posts, categories, totalNumberOfPosts, language }) => {
  return (
    <MainPage
      posts={posts}
      categories={categories}
      totalNumberOfPosts={totalNumberOfPosts}
      activeCategory="all"
      activePageNumber={1}
      language={language}
    />
  )
}

export default Index

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ])
  const language = params.language
  const categories = getPostsCategories(postsByLanguage[language])

  const news = await getPostsNews([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
    'episodeNumber',
  ])

  const lastNewsPost = sortByDate(news)[0]
  const posts = sortByDate(postsByLanguage[language])

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      lastNewsPost,
      categories,
      totalNumberOfPosts: posts.length,
      language,
    },
  }
}

export function getStaticPaths() {
  return {
    paths: languages.map((language) => ({
      params: {
        language,
      },
    })),
    fallback: false,
  }
}
