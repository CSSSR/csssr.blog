import React from 'react'
import { string, arrayOf, shape, object } from 'prop-types'
import { Grid } from '../../Grid'
import styled from '@emotion/styled'
import styles from './Posts.styles'
import Newsletter from '../../Newsletter'
import PostCard from './PostCard'

const Posts = ({ language, posts, className, BENCHMARK_EMAIL_TOKEN, BENCHMARK_EMAIL_LIST_ID }) => (
  <Grid as="ul" className={className}>
    {posts.slice(0, 4).reduce((memo, post) => {
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

    {language === 'ru' && (
      <Newsletter
        BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
        BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      />
    )}

    {posts.length >= 4 &&
      posts.slice(4, 8).reduce((memo, post) => {
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
  postsOrder: arrayOf(arrayOf(string)),
  post: arrayOf(
    shape({
      title: string,
      coverImageAlt: string,
      images: object,
      slug: string,
      date: string,
      tag: string,
    }),
  ),
}

export default styled(Posts)`
  ${styles}
`
