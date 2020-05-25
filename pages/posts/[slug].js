import { useRouter } from 'next/router'
import PostBody from '../../components/PostBody'
import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/PostTitle'
import PostHeader from '../../components/PostHeader'
import Head from 'next/head'
import cleaningTitle from '../../utils/client/cleaningTitle'

export default function Post({ post /* morePosts, */ }) {
  const router = useRouter()
  // TODO: добавить ErrorPage из csssr.com
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout>
      {/* TODO: добавить Header из csssr.com */}
      {/* <Header /> */}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article>
          <Head>
            <title>{cleaningTitle(post.title)} | CSSSR blog</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>

          <PostHeader title={post.title} coverImage={post.pageImage} />

          <PostBody content={post.content} />
        </article>
      )}
      {/* TODO: добавить Footer из csssr.com */}
      {/* <Footer /> */}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'pageImage',
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
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
