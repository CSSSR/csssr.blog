import React from 'react'
import Layout from '../../../../components/Layout'
import { getPostNewsBySlug, getPostsNews } from '../../../../lib/api'
import Post from '../../../../components/Post'

export default function PostNewsPage({ post, /* morePosts, */ language }) {
  return (
    <Layout language={language}>
      <Post language={language} post={post} type="news" />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostNewsBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'tag',
    'coverImageAlt',
    'images',
    'episodeNumber',
    'soundcloudLink',
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
    fallback: false,
  }
}
