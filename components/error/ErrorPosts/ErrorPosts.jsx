import styled from '@emotion/styled'
import { arrayOf, object, shape, string } from 'prop-types'
import React from 'react'

import sortByDate from '../../../utils/sortByDate'

import ErrorPostCard from './ErrorPostCard'
import styles from './ErrorPosts.styles'

const ErrorPosts = ({ className, posts, language }) => {
  const lastPostCount = 6
  const postsSorted = sortByDate(posts).slice(0, lastPostCount)

  return (
    <ul className={className} data-testid="ErrorPage404:block:posts.list">
      {postsSorted.map((post) => (
        <ErrorPostCard key={post.slug} post={post} language={language} />
      ))}
    </ul>
  )
}

ErrorPosts.propTypes = {
  className: string,
  posts: arrayOf(
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
