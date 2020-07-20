import { getAllPosts } from '../../lib/api'
import MainPage from '../../components/main/MainPage'

const Index = ({ allPosts }) => <MainPage activeCategory="all" posts={allPosts} />

export default Index
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ])

  return {
    props: { allPosts },
  }
}
