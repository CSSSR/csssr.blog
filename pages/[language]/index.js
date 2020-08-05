import React from 'react'
import { getPostsByLanguage } from '../../lib/api'
import MainPage from '../../components/main/MainPage'
import languages from '../../utils/languages'
import getPostsCategories from '../../utils/getPostsCategories'

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

  return {
    props: {
      posts: postsByLanguage[language].slice(0, 8),
      categories,
      totalNumberOfPosts: postsByLanguage[language].length,
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
