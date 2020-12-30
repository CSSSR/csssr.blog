import React from 'react'
import { string, number, shape, object, oneOf } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostCard.styles'
import DateFormatter from '../../../DateFormatter'
import Link from 'next/link'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import categoriesByLanguage from '../../../../data/categoriesByLanguage'
import { Picture, PictureSmart } from '@csssr/csssr.images/dist/react'

const PostCard = ({ className, language, post, size, type = 'regular' }) => {
  const imgCover = size === 'l' ? post.images.mainCoverL : post.images.mainCoverS

  return (
    <li className={cn(`${className}`, { news: type === 'news' })}>
      <Link
        href={
          type === 'news' ? `/ru/news512/episode/${post.slug}` : `/${language}/article/${post.slug}`
        }
      >
        <a className="link">
          <div className="title-wrapper">
            {type === 'news' ? (
              <PictureSmart
                className="picture picture_size_s"
                requireImages={require.context('../../../../public/components/postCard')}
                alt={post.coverImageAlt}
              />
            ) : (
              <Picture
                className={cn('picture', {
                  picture_size_l: size === 'l',
                  picture_size_s: size === 's',
                })}
                sources={imgCover}
                alt={post.coverImageAlt}
              />
            )}
            <h2
              className={cn('title', { title_size_l: size === 'l', title_size_s: size === 's' })}
              dangerouslySetInnerHTML={{
                __html: type === 'news' ? 'Новости 512' : cleaningTitle(post.title),
              }}
            />
          </div>

          {type === 'news' && <span className="news-number">#{post.episodeNumber}</span>}

          <div className="data-wrapper">
            {post.author && <span className="author">{post.author}</span>}

            <DateFormatter className="date" language={language}>
              {post.date}
            </DateFormatter>

            <object>
              <Link
                href={type === 'news' ? '/ru/news512' : `/${language}/${post.tag.toLowerCase()}`}
              >
                <a className="tag">{categoriesByLanguage[language][post.tag.toLowerCase()]}</a>
              </Link>
            </object>
          </div>
        </a>
      </Link>
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
    episodeNumber: number,
  }),
  size: oneOf(['l', 's']),
  type: oneOf(['regular', 'news']),
}

export default styled(PostCard)`
  ${styles}
`
