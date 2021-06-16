import React from 'react'

import MainPage from '../../components/main/MainPage'
import { POSTS_PER_PAGE } from '../../data/constants'
import { getPostsByLanguage, getPostsNews } from '../../lib/api'
import selectedPostsByLanguage from '../../selectedPostsByLanguage.json'
import getPostsCategories from '../../utils/getPostsCategories'
import getSelectedPosts from '../../utils/getSelectedPosts'
import languages from '../../utils/languages'
import sortByDate from '../../utils/sortByDate'

const Index = ({ posts, categories, totalNumberOfPosts, language, latestNews, selectedPosts }) => {
  return (
    <MainPage
      posts={posts}
      categories={categories}
      totalNumberOfPosts={totalNumberOfPosts}
      activeCategory="all"
      activePageNumber={1}
      language={language}
      latestNews={latestNews}
      selectedPosts={selectedPosts}
    />
  )
}

export default Index

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'description',
    'date',
    'slug',
    'content',
    'coverImageAlt',
    'tag',
    'images',
  ])
  const language = params.language
  const categories = getPostsCategories(postsByLanguage[language])

  const news = await getPostsNews(['title', 'date', 'slug', 'episodeNumber'])

  const latestNews = sortByDate(news)[0]
  const posts = sortByDate(postsByLanguage[language])

  const selectedPosts = getSelectedPosts(selectedPostsByLanguage[language], posts)

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: posts.length,
      language,
      latestNews,
      selectedPosts,
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
