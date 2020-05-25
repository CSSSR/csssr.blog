import React from 'react'
import { string, shape, object, oneOf } from 'prop-types'
import cn from 'classnames'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import styles from './Post.styles'
import DateFormater from '../../../DateFormater'
import Link from 'next/link'
import cleaningTitle from '../../../../utils/client/cleaningTitle'

const Post = ({ className, post, size }) => {
  const theme = useTheme()

  return (
    <li className={className}>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a>
          <picture>
            <source
              media={theme.breakpoints.desktop.all.slice(7)}
              type="image/png"
              srcSet={post.coverImage.mainPage['desktop.all']}
            />

            <source
              media={theme.breakpoints.mobile.all.slice(7)}
              type="image/png"
              srcSet={post.coverImage.mainPage['mobile.all']}
            />

            <img src={post.coverImage.mainPage['desktop.all']} alt={post.coverImage.alt}></img>
          </picture>

          <h2 className={cn('title', { title_size_m: size === 'm', title_size_s: size === 's' })}>
            {cleaningTitle(post.title)}
          </h2>

          <a className="tag">{post.tag}</a>
          <DateFormater className="date">{post.date}</DateFormater>
        </a>
      </Link>
    </li>
  )
}

Post.propTypes = {
  className: string,
  post: shape({
    title: string,
    excerpt: string,
    coverImage: object,
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

export default styled(Post)`
  ${styles}
`
