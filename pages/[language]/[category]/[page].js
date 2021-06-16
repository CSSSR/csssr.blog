import React from 'react'

import MainPage from '../../../components/main/MainPage'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import selectedPostsByLanguage from '../../../selectedPostsByLanguage.json'
import areEqualShallow from '../../../utils/areEqualShallow'
import calculatePageNumberByPostIndex from '../../../utils/calculatePageNumberByPostIndex'
import getPostsCategories from '../../../utils/getPostsCategories'
import getSelectedPosts from '../../../utils/getSelectedPosts'
import languages from '../../../utils/languages'
import sortByDate from '../../../utils/sortByDate'

const Index = ({
  posts,
  categories,
  totalNumberOfPosts,
  activeCategory,
  activePageNumber,
  language,
  latestNews,
  selectedPosts,
}) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
    activePageNumber={activePageNumber}
    language={language}
    latestNews={latestNews}
    selectedPosts={selectedPosts}
  />
)

export default Index

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'content',
    'coverImageAlt',
    'description',
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

  const news = await getPostsNews(['title', 'date', 'slug', 'episodeNumber'])
  const latestNews = sortByDate(news)[0]

  const sortedPostsByLanguageAndCategory = sortByDate(postsByLanguageAndCategory)

  const postsByLanguageAndCategoryAndPage = sortedPostsByLanguageAndCategory.filter(
    (post, index) => {
      const pageNumber = calculatePageNumberByPostIndex(index)
      if (params.category === 'all') {
        return pageNumber === params.page
      }

      return pageNumber === params.page
    },
  )

  const selectedPosts = getSelectedPosts(
    selectedPostsByLanguage[language],
    postsByLanguage[language],
  )

  return {
    props: {
      posts: postsByLanguageAndCategoryAndPage,
      categories,
      latestNews,
      totalNumberOfPosts: sortedPostsByLanguageAndCategory.length,
      activeCategory: params.category,
      activePageNumber: Number(params.page),
      language,
      selectedPosts,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['tag'])

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
          posts[language].flat().map((post, index) => {
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
        .reduce((_memo, post) => {
          const isParamsAlreadyInMemo = _memo.find(({ params }) =>
            areEqualShallow(params, post.params),
          )

          if (isParamsAlreadyInMemo) {
            return _memo
          }

          return _memo.concat({
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
