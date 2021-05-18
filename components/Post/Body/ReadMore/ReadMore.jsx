import { Heading } from '@csssr/core-design'
import styled from '@emotion/styled'
import React from 'react'

import PostCard from '../../../main/Posts/PostCard'

import styles from './ReadMore.styles'

const ReadMore = ({ className, posts }) => {
  return (
    <div className={className} data-testid="ReadMore:block">
      <Heading.H2 type="regular" className="title">
        Читайте также
      </Heading.H2>
      <ul className="morePosts">
        {posts.reduce((memo, post) => {
          return [
            ...memo,
            <PostCard key={post.slug} language="ru" post={post} size="s" type="regular" />,
          ]
        }, [])}
      </ul>
    </div>
  )
}

export default styled(ReadMore)`
  ${styles}
`
