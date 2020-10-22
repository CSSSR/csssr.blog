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

const Header = ({ className, title, author, tag, date, coverImage, alt, language, isNews }) => {
  return (
    <Grid
      as="header"
      className={cn(className, {
        newsHeader: isNews,
      })}
    >
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        <Link href="/[language]/[category]" as={`/${language}/${tag}512`}>
          <a className="tag">{categoriesByLanguage[language][tag]}</a>
        </Link>
      </div>

      <Heading
        type="regular"
        size="l"
        className={cn('title', {
          newsTitle: isNews,
        })}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Picture
        className={cn('picture', {
          newsPicture: isNews,
        })}
        sources={coverImage}
        alt={alt}
      />
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
}

export default styled(Header)`
  ${styles}
`
