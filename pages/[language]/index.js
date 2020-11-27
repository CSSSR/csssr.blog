import React from 'react'
import { getPostsByLanguage } from '../../lib/api'
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

const Index = ({ posts, categories, totalNumberOfPosts, language }) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory="all"
    activePageNumber={1}
    language={language}
  />
)

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

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: posts.length,
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
