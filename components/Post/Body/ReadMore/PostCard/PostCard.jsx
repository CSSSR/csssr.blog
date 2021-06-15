import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { object, shape, string } from 'prop-types'
import React from 'react'

import categoriesByLanguage from '../../../../../data/categoriesByLanguage'
import cleaningTitle from '../../../../../utils/client/cleaningTitle'
import DateFormatter from '../../../../DateFormatter'

import styles from './PostCard.styles'

const PostCard = ({ className, language, post }) => {
  const imgCover = post.images.postCover

  return (
    <li className={className}>
      <Link href={`/${language}/article/${post.slug}`}>
        <a className="link" data-testid={`PostCard:link:article.${post.slug}`}>
          <div className="title-wrapper">
            <Picture className={'picture'} sources={imgCover} alt={post.coverImageAlt} />

            <h2
              className="title"
              dangerouslySetInnerHTML={{
                __html: cleaningTitle(post.title),
              }}
            />
          </div>

          <div className="data-wrapper">
            {post.author && <span className="author">{post.author}</span>}

            <DateFormatter className="date" language={language}>
              {post.date}
            </DateFormatter>

            <object>
              <Link href={`/${language}/${post.tag.toLowerCase()}`}>
                <a className="tag" data-testid={`PostCard:link:category.${post.tag.toLowerCase()}`}>
                  {categoriesByLanguage[language][post.tag.toLowerCase()]}
                </a>
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
  }),
}

export default styled(PostCard)`
  ${styles}
`
