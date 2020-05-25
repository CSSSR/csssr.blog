import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Post.styles'
import Head from 'next/head'
import Header from './Header'
import Body from './Body'
import cleaningTitle from '../../utils/client/cleaningTitle'

const Post = ({ post, className }) => (
  <article className={className}>
    <Head>
      <title>{cleaningTitle(post.title)} | CSSSR blog</title>
      <meta property="og:image" content={post.ogImage.url} />
    </Head>

    <Header title={post.title} coverImage={post.coverImage} tag={post.tag} date={post.date} />

    <Body content={post.content} />
  </article>
)

Post.propTypes = {
  className: string,
}

export default styled(Post)`
  ${styles}
`
