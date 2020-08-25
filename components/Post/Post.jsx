import { string, object, shape } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Post.styles'
import Head from 'next/head'
import { getOriginal } from '@csssr/csssr.images/dist/utils'
import Header from './Header'
import Body from './Body'
import cleaningTitle from '../../utils/client/cleaningTitle'
import getDescription from '../../utils/client/getDescription'
import { Fonts } from '@csssr/core-design'

const Post = ({ post, language, className }) => {
  return (
    <article className={className}>
      <Head>
        <title>{cleaningTitle(post.title)}</title>
        <meta name="description" content={getDescription(post.content)} />
        <meta property="og:type" content="article" />
        <meta property="article:section" content={post.tag} />
        <meta
          property="og:url"
          content={`https://blog.csssr.com/${language}/article/${post.slug}`}
        />
        <meta property="og:title" content={cleaningTitle(post.title)} />
        <meta property="og:description" content={getDescription(post.content)} />
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author} />}
        <meta
          property="og:image"
          content={getOriginal(post.images.mainCoverL[post.images.mainCoverL.length - 1])}
        />

        <Fonts
          options={[
            {
              family: language === 'ru' ? 'Sweet Mavka Script' : 'Amita',
              weight: 400,
              style: 'normal',
              rel: 'preload',
            },
          ]}
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
