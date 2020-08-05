import React from 'react'
import { getPostsByLanguage } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import languages from '../../../utils/languages'
import getPostsCategories from '../../../utils/getPostsCategories'

const Index = ({ posts, categories, totalNumberOfPosts, activeCategory, language }) => (
  <MainPage
    posts={posts}
    categories={categories}
    totalNumberOfPosts={totalNumberOfPosts}
    activeCategory={activeCategory}
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

  const postsByLanguageAndCategory = postsByLanguage[language].filter(
    (post) => post.tag.toLowerCase() === params.category,
  )

  return {
    props: {
      posts: postsByLanguageAndCategory.slice(0, 8),
      categories,
      totalNumberOfPosts: postsByLanguageAndCategory.length,
      activeCategory: params.category,
      language,
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
