import { string, object, shape } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Post.styles'
import Head from 'next/head'
import cn from 'classnames'
import { getOriginal } from '@csssr/csssr.images/dist/utils'
import Header from './Header'
import Body from './Body'
import cleaningTitle from '../../utils/client/cleaningTitle'
import getDescription from '../../utils/client/getDescription'

import newsPostOgImage from '../../public/images/og/news512/all.png'

const Post = ({
  posts,
  post,
  language,
  className,
  type = 'regular',
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const title = type === 'news' ? 'Новости 512 | CSSS' : cleaningTitle(post.title, 'meta')
  const description =
    type === 'news' ? cleaningTitle(post.title, 'meta') : getDescription(post.content)

  return (
    <article
      className={cn(className, {
        type_news: type === 'news',
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
          content={`${process.env.BLOG_HOST}/${language}/article/${post.slug}`}
        />
        <meta
          property="og:image"
          content={getOriginal(
            type === 'news'
              ? newsPostOgImage
              : post.images.mainCoverL[post.images.mainCoverL.length - 1],
          )}
        />

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
