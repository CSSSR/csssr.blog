import { getAllPosts } from '../../../../../lib/api'
import MainPage from '../../../../../components/main/MainPage'
import calculatePageByIndex from '../../../../../utils/calculatePageByIndex'

const Index = ({ posts, activeCategory }) => (
  <MainPage activeCategory={activeCategory} posts={posts} />
)

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

    if (params.category === 'all') return page === params.page

    return post.tag.toLowerCase() === params.category && page === params.page
  })

  return {
    props: {
      activeCategory: params.category,
      posts,
    },
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts(['tag'])

  return {
    paths: posts
      .map((post, index) => {
        const page = calculatePageByIndex(index)

        return {
          params: {
            category: post.tag.toLowerCase(),
            page,
          },
        }
      })
      .concat(
        posts.map((post, index) => {
          const page = calculatePageByIndex(index)

          return {
            params: {
              category: 'all',
              page,
            },
          }
        }),
      ),
    fallback: false,
  }
}
