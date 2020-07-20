import { string } from 'prop-types'
import { Grid } from '@csssr/core-design'
import styled from '@emotion/styled'
import styles from './Posts.styles'
import PostCard from './PostCard'
import postsOrderEn from '../../../postsOrderEn'
import postsOrderRu from '../../../postsOrderRu'

const postsOrder = {
  en: postsOrderEn,
  ru: postsOrderRu,
}

const Posts = ({ language, posts, className }) => {
  const postsBySlug = posts.reduce((acc, post) => {
    acc[post.slug] = post

    return acc
  }, {})

  return (
    <Grid as="ul" className={className}>
      {postsOrder[language].map((postsRow, rowIndex) =>
        postsRow.map((postSlug, postIndex) => {
          const post = postsBySlug[postSlug]
          const isOddRow = (rowIndex + 1) % 2
          const isOddPost = (postIndex + 1) % 2
          const size = (isOddRow && isOddPost) || (!isOddRow && !isOddPost) ? 'm' : 's'
          const side = isOddPost ? 'l' : 'r'

          return <PostCard key={postSlug} language={language} post={post} size={size} side={side} />
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
