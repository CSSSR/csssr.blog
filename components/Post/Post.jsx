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

import newsPostCardImage from '../../public/components/postCard/desktop.m.png'

const Post = ({ post, language, className, type = 'regular' }) => {
  return (
    <article
      className={cn(className, {
        type_news: type === 'news',
      })}
    >
      <Head>
        <title>{cleaningTitle(post.title, 'meta')}</title>
        <meta name="description" content={getDescription(post.content)} />
        <meta property="og:type" content="article" />
        <meta property="article:section" content={post.tag} />
        <meta
          property="og:url"
          content={`${process.env.BLOG_HOST}/${language}/article/${post.slug}`}
        />
        <meta property="og:title" content={cleaningTitle(post.title, 'meta')} />
        <meta property="og:description" content={getDescription(post.content)} />
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author} />}
        <meta
          property="og:image"
          content={getOriginal(
            type === 'news'
              ? newsPostCardImage
              : post.images.mainCoverL[post.images.mainCoverL.length - 1],
          )}
        />
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
        content={post.content}
        slug={post.slug}
        images={post.images}
        language={language}
        type={type}
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
