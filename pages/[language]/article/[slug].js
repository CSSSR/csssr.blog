import Layout from '../../../components/Layout'
import { getPostBySlugAndLanguage, getPostsByLanguage } from '../../../lib/api'
import Post from '../../../components/Post'
import languages from '../../../utils/languages'

export default function PostPage({ post, /* morePosts, */ language }) {
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
      <Post language={language} post={post} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const language = params.language
  const post = await getPostBySlugAndLanguage(params.slug, language, [
    'title',
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
      language,
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
            language: language,
          },
        })),
      ]
    }, []),
    fallback: false,
  }
}
