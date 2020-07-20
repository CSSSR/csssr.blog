import React from 'react'
import { getPostsByLanguage } from '../../lib/api'
import MainPage from '../../components/main/MainPage'
import languages from '../../utils/languages'

const Index = ({ posts, language }) => <MainPage posts={posts} language={language} />

export default Index

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'excerpt',
    'tag',
    'images',
  ])

  const language = params.language

  return {
    props: {
      posts: postsByLanguage[language],
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
