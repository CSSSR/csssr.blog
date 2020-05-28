import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import { Grid } from '@csssr/core-design'
import { Heading } from '@csssr/core-design'
import DateFormatter from '../../DateFormatter'

import styles from './Header.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const Header = ({ className, title, tag, date, coverImage, alt }) => {
  return (
    <Grid as="header" className={className}>
      <div className="post-meta">
        <a className="tag">{tag}</a>
        <DateFormatter className="date">{date}</DateFormatter>
      </div>

      <Heading
        type="regular"
        size="l"
        className="title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Picture className="picture" pictureData={coverImage} alt={alt} />
    </Grid>
  )
}

Header.propTypes = {
  className: string,
  title: string,
  tag: string,
  date: string,
  coverImage: object,
  alt: string,
}

export default styled(Header)`
  ${styles}
`
