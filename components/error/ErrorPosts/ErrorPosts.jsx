import React from 'react'
import { string, shape, object, arrayOf } from 'prop-types'
import { parseISO } from 'date-fns'
import styled from '@emotion/styled'

import ErrorPostCard from './ErrorPostCard'

import styles from './ErrorPosts.styles'

const ErrorPosts = ({ className, posts, language }) => {
  const lastPostCount = 6
  const sortedPosts = posts
    .sort((postA, postB) => parseISO(postB.date) - parseISO(postA.date))
    .slice(0, lastPostCount)

  return (
    <ul className={className} data-testid="ErrorPage404:block:posts.list">
      {sortedPosts.map((post) => (
        <ErrorPostCard key={post.slug} post={post} language={language} />
      ))}
    </ul>
  )
}

ErrorPosts.propTypes = {
  className: string,
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

export default styled(ErrorPosts)`
  ${styles}
`
