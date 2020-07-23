import React from 'react'
import { string, shape, object, oneOf } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostCard.styles'
import DateFormatter from '../../../DateFormatter'
import Link from 'next/link'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import { Picture } from '@csssr/csssr.images/dist/react'

const PostCard = ({ className, post, size }) => {
  return (
    <li className={className}>
      <Link as={`/en/article/${post.slug}`} href="/en/article/[slug]">
        <a>
          <Picture
            className={cn('picture', {
              picture_size_m: size === 'm',
              picture_size_s: size === 's',
            })}
            sources={post.images.mainCover}
            alt={post.coverImageAlt}
          />

          <h2
            className={cn('title', { title_size_m: size === 'm', title_size_s: size === 's' })}
            dangerouslySetInnerHTML={{ __html: cleaningTitle(post.title) }}
          />
        </a>
      </Link>
      <a className="tag">{post.tag}</a>
      <DateFormatter className="date">{post.date}</DateFormatter>
    </li>
  )
}

PostCard.propTypes = {
  className: string,
  post: shape({
    title: string,
    coverImageAlt: string,
    images: object,
    date: string,
    tag: string,
    slug: string,
  }),
  size: oneOf(['m', 's']),
}

export default styled(PostCard)`
  ${styles}
`
