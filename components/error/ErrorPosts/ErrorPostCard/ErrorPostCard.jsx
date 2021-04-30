import React from 'react'
import { string, shape, object } from 'prop-types'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Picture } from '@csssr/csssr.images/dist/react'

import DateFormatter from '../../../DateFormatter'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import categoriesByLanguage from '../../../../data/categoriesByLanguage'

import styles from './ErrorPostCard.styles'

const ErrorPostCard = ({ className, language, post }) => {
  return (
    <li className={className} data-testid="ErrorPostCard:block:post.item">
      <Link href={`/${language}/article/${post.slug}`}>
        <a className="link" data-testid={`ErrorPostCard:link:article.${post.slug}`}>
          <Picture
            className="post-img"
            sources={post.images.mainCoverL}
            alt={post.coverImageAlt}
            testId={`ErrorPostCard:block:img.${post.slug}`}
          />

          <h2
            className="post-title"
            data-testid={`ErrorPostCard:text:title.${post.slug}`}
            dangerouslySetInnerHTML={{
              __html: cleaningTitle(post.title),
            }}
          />

          <span className="bottom">
            {post.author && <span className="author">{post.author}</span>}

            <DateFormatter className="date" language={language}>
              {post.date}
            </DateFormatter>

            <object>
              <Link href={`/${language}/${post.tag.toLowerCase()}`}>
                <a
                  className="tag"
                  data-testid={`ErrorPostCard:link:category.${post.tag.toLowerCase()}`}
                >
                  {categoriesByLanguage[language][post.tag.toLowerCase()]}
                </a>
              </Link>
            </object>
          </span>
        </a>
      </Link>
    </li>
  )
}

ErrorPostCard.propTypes = {
  className: string,
  language: string,
  post: shape({
    title: string,
    coverImageAlt: string,
    images: object,
    date: string,
    author: string,
    tag: string,
    slug: string,
  }),
}

export default styled(ErrorPostCard)`
  ${styles}
`
