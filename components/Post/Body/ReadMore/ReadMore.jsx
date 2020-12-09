import React from 'react'
import styled from '@emotion/styled'
import styles from './ReadMore.styles'
import { Heading } from '@csssr/core-design'
import PostCard from '../../../main/Posts/PostCard'

const ReadMore = ({ className, posts }) => {
  return (
    <div className={className}>
      <Heading.H2 type="regular" className="title">
        Читайте так же
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
