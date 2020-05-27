import { getAllPosts } from '../lib/api'
import MainPage from '../components/main/MainPage'

const Index = ({ allPosts }) => <MainPage allPosts={allPosts} />

export default Index
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'excerpt',
    'tag',
    'images',
  ])

  return {
    props: { allPosts },
  }
}
