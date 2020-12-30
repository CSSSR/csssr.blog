import React from 'react'
import Layout from '../../../../components/Layout'
import { getPostNewsBySlug, getPostsNews } from '../../../../lib/api'
import getBenchmarkEmailListId from '../../../../utils/getBenchmarkEmailListId'
import Post from '../../../../components/Post'

export default function PostNewsPage({
  post,
  /* morePosts, */ language,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) {
  return (
    <Layout language={language}>
      <Post
        language={language}
        post={post}
        type="news"
        BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
        BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      />
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
      BENCHMARK_EMAIL_TOKEN: process.env.BENCHMARK_EMAIL_TOKEN,
      BENCHMARK_EMAIL_LIST_ID: getBenchmarkEmailListId(),
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
