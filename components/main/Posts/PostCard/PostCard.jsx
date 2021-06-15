import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { object, shape, string } from 'prop-types'
import React from 'react'

import categoriesByLanguage from '../../../../data/categoriesByLanguage'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import getDescription from '../../../../utils/client/getDescription'
import DateFormatter from '../../../DateFormatter'
import MainGrid from '../../MainGrid'

import styles from './PostCard.styles'

const PostCard = ({
  className,
  language,
  post: {
    title,
    description,
    content,
    slug,
    coverImageAlt,
    date,
    tag,
    images: { postCover },
  },
}) => {
  return (
    <li className={className}>
      <MainGrid as="span" className="wrap">
        <Picture className="picture" sources={postCover} alt={coverImageAlt} />

        <span className="content">
          <span className="top">
            <Link href={`/${language}/${tag.toLowerCase()}`}>
              <a className="tag" data-testid={`PostCard:link:category.${tag.toLowerCase()}`}>
                {categoriesByLanguage[language][tag.toLowerCase()]}
              </a>
            </Link>

            <DateFormatter className="date" language={language}>
              {date}
            </DateFormatter>
          </span>

          <Link href={`/${language}/article/${slug}`}>
            <a className="link" data-testid={`PostCard:link:article.${slug}`}>
              <h2
                className="title"
                dangerouslySetInnerHTML={{
                  __html: cleaningTitle(title),
                }}
              />
            </a>
          </Link>

          <p className="description">{description || getDescription(content)}</p>
        </span>
      </MainGrid>
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
    description: string,
  }),
}

export default styled(PostCard)`
  ${styles}
`
