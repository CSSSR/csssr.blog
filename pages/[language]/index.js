import React from 'react'
import { getPostsByLanguage, getPostsNews } from '../../lib/api'
import MainPage from '../../components/main/MainPage'
import languages from '../../utils/languages'
import getPostsCategories from '../../utils/getPostsCategories'
import getBenchmarkEmailListId from '../../utils/getBenchmarkEmailListId'
import sortByDate from '../../utils/sortByDate'
import { POSTS_PER_PAGE } from '../../data/constants'
import postsOrderEn from '../../postsOrderEn.json'
import postsOrderRu from '../../postsOrderRu.json'

const postsOrder = {
  en: postsOrderEn,
  ru: postsOrderRu,
}

const Index = ({
  posts,
  categories,
  totalNumberOfPosts,
  language,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  return (
    <MainPage
      posts={posts}
      categories={categories}
      totalNumberOfPosts={totalNumberOfPosts}
      activeCategory="all"
      activePageNumber={1}
      language={language}
      BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
      BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
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
  const postsBySlug = postsByLanguage[language].reduce((acc, post) => {
    acc[post.slug] = post
    return acc
  }, {})

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

  const newsSortedByDate = sortByDate(news)

  const posts = postsOrder[language].flat().map((slug) => {
    if (slug === 'news512') {
      return newsSortedByDate[0]
    }

    return postsBySlug[slug]
  })

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: posts.length,
      language,
      BENCHMARK_EMAIL_TOKEN: process.env.BENCHMARK_EMAIL_TOKEN,
      BENCHMARK_EMAIL_LIST_ID: getBenchmarkEmailListId(),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((language) => ({
      params: {
        language,
      },
    })),
    fallback: false,
  }
}
