import styled from '@emotion/styled'
import { arrayOf, object, shape, string } from 'prop-types'
import React from 'react'

import { Grid } from '../../Grid'

import PostCard from './PostCard'
import styles from './Posts.styles'

const Posts = ({ language, posts, className }) => (
  <Grid as="ul" className={className} data-testid="Posts:block">
    {posts.reduce((memo, post) => {
      const orderInGroupOfFour = memo.length % 4
      const size = orderInGroupOfFour === 0 || orderInGroupOfFour === 3 ? 'l' : 's'
      const side = orderInGroupOfFour === 0 || orderInGroupOfFour === 2 ? 'l' : 'r'

      return [
        ...memo,
        <PostCard
          key={post.slug}
          language={language}
          post={post}
          size={size}
          side={side}
          type={post.tag === 'news' ? 'news' : 'regular'}
        />,
      ]
    }, [])}
  </Grid>
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
