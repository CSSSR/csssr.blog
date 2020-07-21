import { getPostsByLanguage } from '../../../../../lib/api'
import MainPage from '../../../../../components/main/MainPage'
import calculatePageByIndex from '../../../../../utils/calculatePageByIndex'
import languages from '../../../../../utils/languages'
import React from 'react'

const Index = ({ posts, activeCategory, language }) => (
  <MainPage activeCategory={activeCategory} posts={posts} language={language} />
)

export default Index
export async function getStaticProps({ params }) {
  const language = params.language
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ])

  const posts = postsByLanguage[language].filter((post, index) => {
    const page = calculatePageByIndex(index)

    if (params.category === 'all') return page === params.page

    return post.tag.toLowerCase() === params.category && page === params.page
  })

  return {
    props: {
      language,
      activeCategory: params.category,
      posts,
    },
  }
}
export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['tag'])

  return {
    paths: languages.reduce((memo, language) => {
      return [
        ...memo,
        ...posts[language]
          .map((post, index) => {
            const page = calculatePageByIndex(index)

            return {
              params: {
                language,
                category: post.tag.toLowerCase(),
                page,
              },
            }
          })
          .concat(
            posts[language].map((post, index) => {
              const page = calculatePageByIndex(index)

              return {
                params: {
                  language,
                  category: 'all',
                  page,
                },
              }
            }),
          ),
      ]
    }, []),
    fallback: false,
  }
}
