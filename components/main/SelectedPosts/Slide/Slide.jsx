import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { bool, object, oneOf, shape, string } from 'prop-types'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

import categoriesByLanguage from '../../../../data/categoriesByLanguage'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import getDescription from '../../../../utils/client/getDescription'
import DateFormatter from '../../../DateFormatter'
import MainGrid from '../../MainGrid'

import styles from './Slide.styles'

const Slide = ({
  className,
  isActive,
  direction,
  post: {
    slug,
    tag,
    date,
    description,
    content,
    title,
    images: { postCover },
    coverImageAlt,
  },
  language,
}) => {
  return (
    <CSSTransition in={isActive} unmountOnExit timeout={400}>
      <li
        className={cn(className, {
          left: direction === 'left',
          right: direction === 'right',
        })}
        data-testid={`SelectedPosts:block:slide.${slug}`}
      >
        <MainGrid as="span" className="slide-wrap">
          <Picture className="slide-picture" sources={postCover} alt={coverImageAlt} />

          <span className="slide-content">
            <span className="slide-top">
              <Link href={`/${language}/${tag.toLowerCase()}`}>
                <a
                  className="slide-tag"
                  data-testid={`SelectedPosts:link:category.${tag.toLowerCase()}`}
                >
                  {categoriesByLanguage[language][tag.toLowerCase()]}
                </a>
              </Link>

              <DateFormatter language={language} className="slide-date">
                {date}
              </DateFormatter>
            </span>
            <Link href={`/${language}/article/${slug}`} className="slide-link">
              <a className="slide-link" data-testid={`SelectedPosts:link:article.${slug}`}>
                <h2
                  className="slide-title"
                  dangerouslySetInnerHTML={{
                    __html: cleaningTitle(title),
                  }}
                />
              </a>
            </Link>

            <span className="slide-description">{description || getDescription(content)}</span>
          </span>
        </MainGrid>
      </li>
    </CSSTransition>
  )
}

Slide.propsTypes = {
  className: string,
  language: string,
  isActive: bool,
  direction: oneOf[('left', 'right')],
  post: shape({
    title: string,
    date: string,
    slug: string,
    content: string,
    tag: string,
    coverImageAlt: string,
    images: object,
  }),
}

export default styled(Slide)`
  ${styles}
`
