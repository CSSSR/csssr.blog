import { string, arrayOf, shape, object } from 'prop-types'
import { Grid } from '@csssr/core-design'
import styled from '@emotion/styled'
import styles from './Posts.styles'
import PostCard from './PostCard'

const Posts = ({ posts, postsOrder, className }) => {
  const postsBySlug = posts.reduce((acc, post) => {
    acc[post.slug] = post

    return acc
  }, {})

  return (
    <Grid as="ul" className={className}>
      {postsOrder.map((postsRow, rowIndex) =>
        postsRow.map((postSlug, postIndex) => {
          const post = postsBySlug[postSlug]
          const isOddRow = (rowIndex + 1) % 2
          const isOddPost = (postIndex + 1) % 2
          const size = (isOddRow && isOddPost) || (!isOddRow && !isOddPost) ? 'm' : 's'

          return <PostCard key={postSlug} post={post} size={size} />
        }),
      )}
    </Grid>
  )
}

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
