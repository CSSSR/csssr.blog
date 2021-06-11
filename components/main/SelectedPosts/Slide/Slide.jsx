import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { number, object, oneOf, shape, string } from 'prop-types'
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
  activeIndex,
  slideIndex,
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
    <CSSTransition in={activeIndex === slideIndex} unmountOnExit timeout={400}>
      <li
        className={cn(className, {
          left: direction === 'left',
          right: direction === 'right',
        })}
        data-testid={`SelectedPosts:block:slide.${slug}`}
      >
        <Link href={`/${language}/article/${slug}`} className="slide-link">
          <a className="slide-link" data-testid={`SelectedPosts:link:article.${slug}`}>
            <MainGrid as="span" className="slide-wrap">
              <Picture className="slide-picture" sources={postCover} alt={coverImageAlt} />

              <span className="slide-content">
                <span className="slide-top">
                  <object>
                    <Link href={`/${language}/${tag.toLowerCase()}`}>
                      <a
                        className="slide-tag"
                        data-testid={`SelectedPosts:link:category.${tag.toLowerCase()}`}
                      >
                        {categoriesByLanguage[language][tag.toLowerCase()]}
                      </a>
                    </Link>
                  </object>

                  <DateFormatter language={language} className="slide-date">
                    {date}
                  </DateFormatter>
                </span>

                <h2
                  className="slide-title"
                  dangerouslySetInnerHTML={{
                    __html: cleaningTitle(title),
                  }}
                />

                <span className="slide-description">{description || getDescription(content)}</span>
              </span>
            </MainGrid>
          </a>
        </Link>
      </li>
    </CSSTransition>
  )
}

Slide.propsTypes = {
  className: string,
  language: string,
  activeIndex: number,
  slideIndex: number,
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
