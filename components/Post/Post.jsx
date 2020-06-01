import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Post.styles'
import Head from 'next/head'
import Header from './Header'
import Body from './Body'
import cleaningTitle from '../../utils/client/cleaningTitle'
import csssrBlogOrigin from '../../utils/csssrBlogOrigin'
import { withRouter } from 'next/router'

const Post = ({ post, className, router }) => (
  <article className={className}>
    <Head>
      <title>{cleaningTitle(post.title)} | CSSSR blog</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={`${cleaningTitle(post.title)} | CSSSR blog`} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:url" content={`${csssrBlogOrigin}${router.asPath}`} />
      <meta property="og:image" content={post.images.mainCover.fallbackSrcSet['3x']} />
    </Head>

    <Header
      title={post.title}
      coverImage={post.images.postCover}
      alt={post.coverImageAlt}
      tag={post.tag}
      date={post.date}
    />

    <Body content={post.content} images={post.images} />
  </article>
)

Post.propTypes = {
  className: string,
  post: object,
  router: object,
}

export default styled(withRouter(Post))`
  ${styles}
`
