import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { string, arrayOf, object } from 'prop-types'
import { Grid } from '../../Grid'
import cn from 'classnames'
import { Heading } from '@csssr/core-design'
import DateFormatter from '../../DateFormatter'
import categoriesByLanguage from '../../../data/categoriesByLanguage'

import styles from './Header.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const Header = ({
  className,
  title,
  author,
  tag,
  episodeNumber,
  date,
  coverImage,
  alt,
  language,
  type,
}) => {
  return (
    <Grid
      as="header"
      className={cn(className, {
        type_news: type === 'news',
      })}
    >
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        {type === 'news' ? (
          <Link href="/[language]/[category]" as={`/${language}/${tag}512`}>
            <a className="tag">{categoriesByLanguage[language][tag]}</a>
          </Link>
        ) : (
          <Link href="/[language]/[category]" as={`/${language}/${tag.toLowerCase()}`}>
            <a className="tag">{categoriesByLanguage[language][tag.toLowerCase()]}</a>
          </Link>
        )}
      </div>

      {type === 'news' ? (
        <div className="title-wrapper">
          <Heading
            type="regular"
            size="l"
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {episodeNumber && (
            <Heading.H2
              type="regular"
              size="l"
              className="episode-number"
              dangerouslySetInnerHTML={{ __html: episodeNumber }}
            />
          )}
        </div>
      ) : (
        <Heading
          type="regular"
          size="l"
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      <Picture className="picture" sources={coverImage} alt={alt} />
    </Grid>
  )
}

Header.propTypes = {
  className: string,
  title: string,
  author: string,
  tag: string,
  date: string,
  coverImage: arrayOf(object),
  alt: string,
  language: string,
  type: string,
}

export default styled(Header)`
  ${styles}
`
