import { getPostsByLanguage } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import calculatePageNumberByPostIndex from '../../../utils/calculatePageNumberByPostIndex'
import languages from '../../../utils/languages'
import React from 'react'

const Index = ({ posts, totalNumberOfPosts, activeCategory, activePageNumber, language }) => (
  <MainPage
    posts={posts}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
    activePageNumber={activePageNumber}
    language={language}
  />
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
    const pageNumber = calculatePageNumberByPostIndex(index + 1)

    if (params.category === 'all') return pageNumber === params.page

    return post.tag.toLowerCase() === params.category && pageNumber === params.page
  })

  return {
    props: {
      posts,
      totalNumberOfPosts: postsByLanguage[language].length,
      activeCategory: params.category,
      activePageNumber: Number(params.page),
      language,
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
            const page = calculatePageNumberByPostIndex(index)

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
              const page = calculatePageNumberByPostIndex(index)

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
