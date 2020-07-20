import { getAllPosts } from '../../../lib/api'
import MainPage from '../../../components/main/MainPage'
import calculatePageByIndex from '../../../utils/calculatePageByIndex'

const Index = ({ posts }) => <MainPage posts={posts} />

export default Index
export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ]).filter((post, index) => {
    const page = calculatePageByIndex(index)

    return page === params.page
  })

  return {
    props: {
      posts,
    },
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post, index) => {
      const page = calculatePageByIndex(index)

      return {
        params: {
          page,
        },
      }
    }),
    fallback: false,
  }
}
