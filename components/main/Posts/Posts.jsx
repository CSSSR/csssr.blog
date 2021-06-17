import styled from '@emotion/styled'
import { arrayOf, object, shape, string } from 'prop-types'
import React from 'react'

import PostCard from './PostCard'
import styles from './Posts.styles'

const Posts = ({ language, posts, className }) => (
  <ul className={className} data-testid="Posts:block">
    {posts.map((post) => {
      return <PostCard key={post.slug} language={language} post={post} />
    })}
  </ul>
)

Posts.propTypes = {
  className: string,
  language: string,
  posts: arrayOf(
    shape({
      title: string,
      coverImageAlt: string,
      images: object,
      date: string,
      author: string,
      tag: string,
      slug: string,
    }),
  ),
}

export default styled(Posts)`
  ${styles}
`
