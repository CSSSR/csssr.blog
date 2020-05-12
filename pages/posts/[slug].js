import { useRouter } from 'next/router'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/Layout'
import { useTheme } from 'emotion-theming'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post /* morePosts, */ }) {
  const router = useRouter()
  const theme = useTheme()
  // TODO: добавить ErrorPage из csssr.com
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout>
      <Container>
        {/* TODO: добавить Header из csssr.com */}
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | CSSSR blog</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>

              <picture style={{ display: 'block', width: '100%' }}>
                <source
                  media={theme.breakpoints.desktop.all.slice(7)}
                  type="image/png"
                  srcSet={post.coverImage['desktop.all']}
                />

                <source
                  media={theme.breakpoints.mobile.all.slice(7)}
                  type="image/png"
                  srcSet={post.coverImage['mobile.all']}
                />

                <img
                  src={post.coverImage['desktop.all']}
                  alt={post.coverImage.alt}
                  style={{ display: 'block', width: '50%', margin: '40px auto' }}
                />
              </picture>

              <PostBody content={post.content} />
            </article>
          </>
        )}
        {/* TODO: добавить Footer из csssr.com */}
        {/* <Footer /> */}
      </Container>
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
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
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
