import { getPostsByLanguage } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import calculatePageByIndex from '../../../utils/calculatePageByIndex'
import languages from '../../../utils/languages'

const Index = ({ posts, language }) => <MainPage posts={posts} language={language} />

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

    return page === params.page
  })

  return {
    props: {
      language,
      posts,
    },
  }
}
export async function getStaticPaths() {
  const posts = await getPostsByLanguage()

  return {
    paths: languages.reduce((memo, language) => {
      return [
        ...memo,
        ...posts[language].map((post, index) => {
          const page = calculatePageByIndex(index)

          return {
            params: {
              page,
              language: language,
            },
          }
        }),
      ]
    }, []),
    fallback: false,
  }
}
