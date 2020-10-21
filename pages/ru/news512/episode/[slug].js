import React from 'react'
import Layout from '../../../../components/Layout'
import { getPostNewsBySlug, getPostsNews } from '../../../../lib/api'
import Post from '../../../../components/Post'

export default function PostNewsPage({ post, /* morePosts, */ language }) {
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
      <Post language={language} post={post} isNews />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostNewsBySlug(params.slug, 'ru', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'tag',
    'coverImageAlt',
    'images',
    'number',
  ])
  return {
    props: {
      post: post,
      language: 'ru',
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPostsNews(['slug'])

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: true,
  }
}
