import { string, object } from 'prop-types'
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
        <title>{cleaningTitle(post.title)}</title>
        <meta name="description" content={getDescription(post.content)} />
        <meta property="og:title" content={cleaningTitle(post.title)} />
        <meta property="og:description" content={getDescription(post.content)} />
        <meta
          property="og:url"
          content={`https://blog.csssr.com/${language}/article/${post.slug}`}
        />
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author} />}
        <meta
          property="og:image"
          content={getOriginal(post.images.mainCoverM[post.images.mainCoverM.length - 1])}
        />
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

      <Body content={post.content} slug={post.slug} images={post.images} />
    </article>
  )
}

Post.propTypes = {
  className: string,
  post: object,
}

export default styled(Post)`
  ${styles}
`
