import React from 'react'
import { string, bool, shape, object, oneOf } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostCard.styles'
import DateFormatter from '../../../DateFormatter'
import Link from 'next/link'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import categoriesByLanguage from '../../../../data/categoriesByLanguage'
import { Picture } from '@csssr/csssr.images/dist/react'

const PostCard = ({ className, language, post, size, isNews }) => {
  const imgCover = size === 'l' ? post.images.mainCoverL : post.images.mainCoverS

  return (
    <li className={cn(`${className}`, { news: isNews })}>
      <Link href="/[language]/article/[slug]" as={`/${language}/article/${post.slug}`}>
        <a className="link">
          <Picture
            className={cn('picture', {
              picture_size_l: size === 'l',
              picture_size_s: size === 's',
            })}
            sources={imgCover}
            alt={post.coverImageAlt}
          />
          <h2
            className={cn('title', { title_size_l: size === 'l', title_size_s: size === 's' })}
            dangerouslySetInnerHTML={{ __html: cleaningTitle(post.title) }}
          />
        </a>
      </Link>

      {post.author && <span className="author">{post.author}</span>}

      <DateFormatter className="date" language={language}>
        {post.date}
      </DateFormatter>

      <Link href="/[language]/[category]" as={`/${language}/${post.tag.toLowerCase()}`}>
        <a className="tag">{categoriesByLanguage[language][post.tag.toLowerCase()]}</a>
      </Link>

      {isNews && <span className="news-number">#{post.episode}</span>}
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
    author: string,
    ogImage: shape({
      url: string,
    }),
    tag: string,
    slug: string,
    episode: string,
  }),
  size: oneOf(['l', 's']),
  isNews: bool,
}

export default styled(PostCard)`
  ${styles}
`
