import React from 'react'
import styled from '@emotion/styled'
import { string, array } from 'prop-types'
import { Grid } from '../../Grid'
import { Heading } from '@csssr/core-design'
import DateFormatter from '../../DateFormatter'

import styles from './Header.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const Header = ({ className, title, author, tag, date, coverImage, alt }) => {
  return (
    <Grid as="header" className={className}>
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date">{date}</DateFormatter>

        <a className="tag">{tag}</a>
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
  coverImage: array,
  alt: string,
}

export default styled(Header)`
  ${styles}
`
