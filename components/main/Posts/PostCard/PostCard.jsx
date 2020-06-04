import React from 'react'
import { string, shape, object, oneOf } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostCard.styles'
import DateFormatter from '../../../DateFormatter'
import Link from 'next/link'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import { Picture } from '@csssr/csssr.images/dist/react';

const PostCard = ({ className, post, size }) => {
  return (
    <li className={className}>
      <Link as={`/en/posts/${post.slug}`} href="/en/posts/[slug]">
        <a>
          <Picture sources={post.images.mainCover} alt={post.coverImageAlt} />

          <h2
            className={cn('title', { title_size_m: size === 'm', title_size_s: size === 's' })}
            dangerouslySetInnerHTML={{__html: cleaningTitle(post.title)}}
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
    excerpt: string,
    coverImageAlt: string,
    images: object,
    date: string,
    author: shape({
      name: string,
      picture: string,
    }),
    ogImage: shape({
      url: string,
    }),
  }),
  size: oneOf(['m', 's']),
  side: oneOf(['l', 'r']),
}

export default styled(PostCard)`
  ${styles}
`
