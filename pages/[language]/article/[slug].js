import Layout from '../../../components/Layout'
import Post from '../../../components/Post'
import { getPostBySlugAndLanguage, getPostsByLanguage } from '../../../lib/api'
import languages from '../../../utils/languages'
import getBenchmarkEmailListId from '../../../utils/getBenchmarkEmailListId'
import postsOrderEn from '../../../postsOrderEn.json'
import postsOrderRu from '../../../postsOrderRu.json'

const postsOrder = {
  en: postsOrderEn,
  ru: postsOrderRu,
}

// const postsOrder = postsOrderRu.flat().filter((slug) => slug !== 'news512')

export default function PostPage({
  posts,
  post,
  language,
  IS_PRODUCTION,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) {
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
      <Post
        language={language}
        posts={posts}
        post={post}
        IS_PRODUCTION={IS_PRODUCTION}
        BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
        BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      />
    </Layout>
  )
}

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

  const postsBySlug = postsByLanguage[language].reduce((acc, post) => {
    acc[post.slug] = post
    return acc
  }, {})

  const posts = postsOrder[language]
    .flat()
    .filter((post) => {
      return post !== slug && post !== 'news512'
    })
    .slice(0, 2)
    .map((post) => {
      return postsBySlug[post]
    })

  const post = await getPostBySlugAndLanguage(slug, language, [
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
      language,
      posts,
      post,
      IS_PRODUCTION: process.env.IS_PRODUCTION === 'TRUE',
      BENCHMARK_EMAIL_TOKEN: process.env.BENCHMARK_EMAIL_TOKEN,
      BENCHMARK_EMAIL_LIST_ID: getBenchmarkEmailListId(),
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
