import React from 'react'

import MainPage from '../../../components/main/MainPage'
import { POSTS_PER_PAGE } from '../../../data/constants'
import { getPostsByLanguage, getPostsNews } from '../../../lib/api'
import selectedPostsByLanguage from '../../../selectedPostsByLanguage.json'
import getPostsCategories from '../../../utils/getPostsCategories'
import getSelectedPosts from '../../../utils/getSelectedPosts'
import languages from '../../../utils/languages'
import sortByDate from '../../../utils/sortByDate'

const Index = ({
  posts,
  categories,
  totalNumberOfPosts,
  activeCategory,
  language,
  latestNews,
  selectedPosts,
}) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
    activePageNumber={1}
    language={language}
    latestNews={latestNews}
    selectedPosts={selectedPosts}
  />
)

export default Index

export async function getStaticProps({ params }) {
  const postsByLanguage = await getPostsByLanguage([
    'title',
    'description',
    'date',
    'slug',
    'content',
    'coverImageAlt',
    'tag',
    'images',
  ])

  const news = await getPostsNews(['title', 'date', 'slug', 'episodeNumber'])
  const latestNews = sortByDate(news)[0]
  const language = params.language

  const categories = getPostsCategories(postsByLanguage[language])
  const postsSorted = sortByDate(postsByLanguage[language])

  const postsByLanguageAndCategory = postsSorted
    .filter((slug) => slug !== 'news512')
    .filter((post) => post.tag.toLowerCase() === params.category)

  const selectedPosts = getSelectedPosts(selectedPostsByLanguage[language], postsSorted)

  return {
    props: {
      posts: postsByLanguageAndCategory.slice(0, POSTS_PER_PAGE),
      categories,
      totalNumberOfPosts: postsByLanguageAndCategory.length,
      activeCategory: params.category,
      language,
      latestNews,
      selectedPosts,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['tag'])
  const paths = languages.reduce(
    (memoByLng, language) => [
      ...memoByLng,
      ...posts[language].reduce((memo, post) => {
        const isParamsAlreadyInMemo = memo.find(
          ({ params: { category } }) => category === post.tag.toLowerCase(),
        )

        if (isParamsAlreadyInMemo) {
          return memo
        }

        return memo.concat({
          params: {
            language,
            category: post.tag.toLowerCase(),
          },
        })
      }, []),
    ],
    [],
  )

  return {
    paths,
    fallback: false,
  }
}
