import { getOriginal } from '@csssr/csssr.images/dist/utils'
import styled from '@emotion/styled'
import cn from 'classnames'
import Head from 'next/head'
import { object, shape, string } from 'prop-types'

import newsPostOgImage from '../../public/images/og/news512/all.png'
import cleaningTitle from '../../utils/client/cleaningTitle'
import getDescription from '../../utils/client/getDescription'

import Body from './Body'
import Header from './Header'
import styles from './Post.styles'

const Post = ({
  posts,
  post,
  language,
  className,
  type = 'regular',
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const isNews = type === 'news'
  const title = isNews ? 'Новости 512 | CSSSR' : cleaningTitle(post.title, 'meta')
  const description = getDescription(post, isNews)

  const ogImage = getOriginal(
    // В для всех новостей используем одинаковое изображение для обычных статей мобильную версию postCover
    isNews ? newsPostOgImage : post.images.postCover[1],
  )

  return (
    <article
      className={cn(className, {
        type_news: isNews,
      })}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={
            isNews
              ? `${process.env.BLOG_HOST}/${language}/news512/episode/${post.slug}`
              : `${process.env.BLOG_HOST}/${language}/article/${post.slug}`
          }
        />
        <meta property="og:image" content={ogImage} />

        <meta property="article:section" content={post.tag} />
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author} />}
      </Head>

      <Header
        title={post.title}
        episodeNumber={post.episodeNumber}
        soundcloudLink={post.soundcloudLink}
        coverImage={post.images.postCover}
        alt={post.coverImageAlt}
        tag={post.tag}
        date={post.date}
        author={post.author}
        language={language}
        type={type}
      />

      <Body
        posts={posts}
        content={post.content}
        slug={post.slug}
        images={post.images}
        language={language}
        type={type}
        BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
        BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      />
    </article>
  )
}

Post.propTypes = {
  className: string,
  type: string,
  post: shape({
    content: string,
    title: string,
    coverImageAlt: string,
    images: object,
    slug: string,
    date: string,
    tag: string,
  }),
}

export default styled(Post)`
  ${styles}
`
