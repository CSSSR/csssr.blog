import Layout from '../../../components/Layout'
import Post from '../../../components/Post'
import { getPostBySlugAndLanguage, getPostsByLanguage } from '../../../lib/api'
import languages from '../../../utils/languages'
import sortByDate from '../../../utils/sortByDate'

const PostPage = ({ posts, post, language }) => {
  // const router = useRouter()
  // TODO: добавить ErrorPage из csssr.com
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <Layout language={language}>
      {/*
        не думаю что нам это пока нужно, но оставлю как пример создания фолбека
        router.isFallback ? <PostTitle>Loading…</PostTitle> : <Post post={post} />
      */}
      <Post language={language} posts={posts} post={post} />
    </Layout>
  )
}

export default PostPage

export async function getStaticProps({ params }) {
  const { language, slug } = params

  const postsByLanguage = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ])
  const post = await getPostBySlugAndLanguage(slug, language, [
    'title',
    'description',
    'date',
    'slug',
    'author',
    'content',
    'tag',
    'coverImageAlt',
    'images',
  ])

  // Передаем 2 крайних статьи за исключением текущей
  // для отображения в конце статьи в блоке "Читайте также"
  const posts = sortByDate(postsByLanguage[language])
    .filter((item) => {
      return item.slug !== post.slug
    })
    .slice(0, 2)

  return {
    props: {
      language,
      posts,
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsByLanguage(['slug'])

  return {
    paths: languages.reduce((memo, language) => {
      return [
        ...memo,
        ...posts[language].map((post) => ({
          params: {
            slug: post.slug,
            language,
          },
        })),
      ]
    }, []),
    fallback: false,
  }
}
