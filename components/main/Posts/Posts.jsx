import { string } from 'prop-types'
import { Grid } from '@csssr/core-design'
import styled from '@emotion/styled'
import styles from './Posts.styles'
import Post from './Post'

const postsOrder = [
  ['offshore-web-development', 'augmented-and-virtual-reality'],
  ['html-or-cms-or-custom-development', 'eight-ways-to-Improve-staff-motivation'],
  ['creative-and-web-development', 'tips-for-task-estimating'],
  ['the-baltic-e-success', 'split-stack-web-development'],
]

const Posts = ({ posts, className }) => {
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
          const side = isOddPost ? 'l' : 'r'

          return <Post key={postSlug} post={post} size={size} side={side} />
        }),
      )}
    </Grid>
  )
}

Posts.propTypes = {
  className: string,
}

export default styled(Posts)`
  ${styles}
`
