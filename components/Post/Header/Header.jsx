import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { string, arrayOf, object } from 'prop-types'
import { Grid } from '../../Grid'
import { Heading } from '@csssr/core-design'
import DateFormatter from '../../DateFormatter'
import getPostCategoryLocale from '../../../utils/getPostCategoryLocale'

import styles from './Header.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const Header = ({ className, title, author, tag, date, coverImage, alt, language }) => {
  return (
    <Grid as="header" className={className}>
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        <Link href={`/${language}/category/${tag.toLowerCase()}/page/1`}>
          <a className="tag">{getPostCategoryLocale(tag, language)}</a>
        </Link>
      </div>

      <Heading
        type="regular"
        size="l"
        className="title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

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
}

export default styled(Header)`
  ${styles}
`
