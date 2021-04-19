import React from 'react'
import { string, shape, object, arrayOf } from 'prop-types'
import styled from '@emotion/styled'

import ErrorPostCard from './ErrorPostCard'

import postsOrderEn from '../../../postsOrderEn.json'
import postsOrderRu from '../../../postsOrderRu.json'

import styles from './ErrorPosts.styles'

const ErrorPosts = ({ className, posts, language }) => {
  const postsOrderByLanguage = {
    en: postsOrderEn,
    ru: postsOrderRu,
  }
  const lastPostCount = 6
  const newsSlug = 'news512'

  const postsOrder = postsOrderByLanguage[language]
    .flat()
    .filter((slug) => slug !== newsSlug)
    .slice(0, lastPostCount)

  const postsFiltered = postsOrder.map((slug) => posts.find((post) => post.slug === slug))

  return (
    <ul className={className} data-testid="ErrorPage404:block:posts.list">
      {postsFiltered.map((post) => (
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
