import React from 'react'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import calculatePageNumberByPostIndex from '../../../utils/calculatePageNumberByPostIndex'
import languages from '../../../utils/languages'
import areEqualShallow from '../../../utils/areEqualShallow'
import getPostsCategories from '../../../utils/getPostsCategories'
import { POSTS_PER_PAGE } from '../../../data/constants'
import postsOrderEn from '../../../postsOrderEn.json'
import postsOrderRu from '../../../postsOrderRu.json'

import sortByDate from '../../../utils/sortByDate'

const Index = ({
  posts,
  categories,
  totalNumberOfPosts,
  activeCategory,
  activePageNumber,
  language,
}) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
    activePageNumber={activePageNumber}
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
  const postsByLanguageAndCategory = postsByLanguage[language].filter((post) => {
    if (params.category === 'all') {
      return post
    }

    return post.tag.toLowerCase() === params.category
  })

  let orderedPostsByLanguageAndCategory

  if (params.category === 'all') {
    const postsBySlug = postsByLanguage[language].reduce((acc, post) => {
      acc[post.slug] = post

      return acc
    }, {})

    const postsOrder = {
      en: postsOrderEn,
      ru: postsOrderRu,
    }

    const news = await getPostsNews([
      'title',
      'date',
      'slug',
      'author',
      'coverImageAlt',
      'tag',
      'images',
      'episode',
    ])

    const newsSortedByDate = sortByDate(news)

    orderedPostsByLanguageAndCategory = postsOrder[language].flat().map((slug) => {
      if (slug === 'news512') {
        return newsSortedByDate[params.page - 1]
      }

      return postsBySlug[slug]
    })
  } else {
    orderedPostsByLanguageAndCategory = sortByDate(postsByLanguageAndCategory)
  }

  const postsByLanguageAndCategoryAndPage = orderedPostsByLanguageAndCategory.filter(
    (post, index) => {
      const pageNumber = calculatePageNumberByPostIndex(index)
      if (params.category === 'all') {
        return pageNumber === params.page
      }

      return pageNumber === params.page
    },
  )

  let postsWithNewsByLanguageAndCategoryAndPage = postsByLanguageAndCategoryAndPage

  return {
    props: {
      posts: postsWithNewsByLanguageAndCategoryAndPage.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: postsByLanguageAndCategory.length,
      activeCategory: params.category,
      activePageNumber: Number(params.page),
      language,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['tag'])
  const paths = languages.reduce(
    (memo, language) => [
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
        )
        .reduce((memo, post) => {
          const isParamsAlreadyInMemo = memo.find(({ params }) =>
            areEqualShallow(params, post.params),
          )

          if (isParamsAlreadyInMemo) {
            return memo
          }

          return memo.concat({
            params: {
              language: post.params.language,
              category: post.params.category,
              page: post.params.page,
            },
          })
        }, [])
        .filter(({ params: { page } }) => page !== '1'),
    ],
    [],
  )

  return {
    paths,
    fallback: false,
  }
}
