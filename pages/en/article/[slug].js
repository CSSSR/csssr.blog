import Layout from '../../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import Post from '../../../components/Post'

export default function PostPage({ post /* morePosts, */ }) {
  // const router = useRouter()
  // TODO: добавить ErrorPage из csssr.com
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <Layout isPost={!!post}>
      {/*
        не дмаю что нам это пока нужно, но оставлю как пример создания фолбека
        router.isFallback ? <PostTitle>Loading…</PostTitle> : <Post post={post} />
      */}
      <Post post={post} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'author',
    'date',
    'slug',
    'author',
    'content',
    'tag',
    'coverImageAlt',
    'images',
  ])

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
