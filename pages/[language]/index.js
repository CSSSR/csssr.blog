import React from 'react'
import { getPostsByLanguage, getPostsNews } from '../../lib/api'
import MainPage from '../../components/main/MainPage'
import languages from '../../utils/languages'
import getPostsCategories from '../../utils/getPostsCategories'
import { POSTS_PER_PAGE } from '../../data/constants'
import postsOrderEn from '../../postsOrderEn.json'
import postsOrderRu from '../../postsOrderRu.json'

const postsOrder = {
  en: postsOrderEn,
  ru: postsOrderRu,
}

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
  const postsBySlug = postsByLanguage[language].reduce((acc, post) => {
    acc[post.slug] = post
    return acc
  }, {})
  const posts = postsOrder[language].flat().map((slug) => postsBySlug[slug])

  const allNews = await getPostsNews([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
    'episode',
  ])
  posts.splice(1, 0, allNews[allNews.length - 1])

  const postsWithNews = posts.slice(0, -1)

  return {
    props: {
      posts: postsWithNews.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: postsWithNews.length,
      language,
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
