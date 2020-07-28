import React from 'react'
import { string } from 'prop-types'
import { Grid } from '../../Grid'
import styled from '@emotion/styled'
import styles from './Posts.styles'
import PostCard from './PostCard'
import postsOrderEn from '../../../postsOrderEn'
import postsOrderRu from '../../../postsOrderRu'

const postsOrder = {
  en: postsOrderEn,
  ru: postsOrderRu,
}

// В props.posts приходят статьи, которые надо отобразить на странице.
// В postsOrder перечислены все статьи.
// Проходим по postsOrder и набираем по этому порядку посты в соответствии с props.posts.
const Posts = ({ language, posts, className }) => {
  const postsBySlug = posts.reduce((acc, post) => {
    acc[post.slug] = post

    return acc
  }, {})

  return (
    <Grid as="ul" className={className}>
      {postsOrder[language].flat().reduce((memo, postSlug) => {
        const post = postsBySlug[postSlug]
        if (!post) {
          return memo
        }

        const orderInGroupOfFour = memo.length % 4
        const size = orderInGroupOfFour === 0 || orderInGroupOfFour === 3 ? 'l' : 's'
        const side = orderInGroupOfFour === 0 || orderInGroupOfFour === 2 ? 'l' : 'r'

        return [
          ...memo,
          <PostCard key={postSlug} language={language} post={post} size={size} side={side} />,
        ]
      }, [])}
    </Grid>
  )
}

Posts.propTypes = {
  className: string,
}

export default styled(Posts)`
  ${styles}
`
