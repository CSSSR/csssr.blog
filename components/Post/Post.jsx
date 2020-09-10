import { string, object, shape } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Post.styles'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'
import Header from './Header'
import Body from './Body'
import cleaningTitle from '../../utils/client/cleaningTitle'
import getDescription from '../../utils/client/getDescription'

const Post = ({ post, language, className }) => {
  return (
    <article className={className}>
      <Head>
        <title>{cleaningTitle(post.title, 'meta')}</title>
        <meta name="description" content={getDescription(post.content)} />
        <meta property="og:type" content="article" />
        <meta property="article:section" content={post.tag} />
        <meta
          property="og:url"
          content={`https://blog.csssr.com/${language}/article/${post.slug}`}
        />
        <meta property="og:title" content={cleaningTitle(post.title, 'meta')} />
        <meta property="og:description" content={getDescription(post.content)} />
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author} />}
        <meta
          property="og:image"
          content={getOriginal(post.images.mainCoverL[post.images.mainCoverL.length - 1])}
        />
        {language === 'ru' && (
          <link
            href="https://static.csssr.com/fonts-subsets/Sweet-Mavka-Script-d25a5d77.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
      </Head>

      <Header
        title={post.title}
        coverImage={post.images.postCover}
        alt={post.coverImageAlt}
        tag={post.tag}
        date={post.date}
        author={post.author}
        language={language}
      />

      <Body content={post.content} slug={post.slug} images={post.images} language={language} />
    </article>
  )
}

Post.propTypes = {
  className: string,
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
