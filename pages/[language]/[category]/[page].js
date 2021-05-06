import React from 'react'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import calculatePageNumberByPostIndex from '../../../utils/calculatePageNumberByPostIndex'
import languages from '../../../utils/languages'
import areEqualShallow from '../../../utils/areEqualShallow'
import getPostsCategories from '../../../utils/getPostsCategories'
import getBenchmarkEmailListId from '../../../utils/getBenchmarkEmailListId'
import sortByDate from '../../../utils/sortByDate'
import postsOrderEn from '../../../postsOrderEn.json'
import postsOrderRu from '../../../postsOrderRu.json'

const Index = ({
  posts,
  categories,
  totalNumberOfPosts,
  activeCategory,
  activePageNumber,
  language,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
    activePageNumber={activePageNumber}
    language={language}
    BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
    BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
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
      'episodeNumber',
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

  return {
    props: {
      posts: postsByLanguageAndCategoryAndPage,
      categories,
      totalNumberOfPosts: orderedPostsByLanguageAndCategory.length,
      activeCategory: params.category,
      activePageNumber: Number(params.page),
      language,
      BENCHMARK_EMAIL_TOKEN: process.env.BENCHMARK_EMAIL_TOKEN,
      BENCHMARK_EMAIL_LIST_ID: getBenchmarkEmailListId(),
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['tag'])

  const postsOrder = {
    en: postsOrderEn,
    ru: postsOrderRu,
  }

  const paths = languages.reduce((memo, language) => {
    let indexShift = 0

    return [
      ...memo,
      ...posts[language]
        .sort((postA, postB) => {
          if (postA.tag < postB.tag) {
            return -1
          }
          if (postA.tag > postB.tag) {
            return 1
          }

          return 0
        })
        .map((post, index, array) => {
          const prevItem = (index > 0 && array[index - 1]) || post

          if (post.tag !== prevItem.tag) {
            indexShift = index
          }

          const page = calculatePageNumberByPostIndex(index - indexShift)

          return {
            params: {
              language,
              category: post.tag.toLowerCase(),
              page,
            },
          }
        })
        .concat(
          postsOrder[language].flat().map((post, index) => {
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
    ]
  }, [])

  return {
    paths,
    fallback: false,
  }
}
