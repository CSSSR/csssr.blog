import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import { Grid } from '@csssr/core-design'
import { Heading } from '@csssr/core-design'
import { useTheme } from 'emotion-theming'
import DateFormater from '../../DateFormater'

import styles from './Header.styles'

const Header = ({ className, title, tag, date, coverImage }) => {
  const theme = useTheme()

  return (
    <Grid as="header" className={className}>
      <div className="post-meta">
        <a className="tag">{tag}</a>
        <DateFormater className="date">{date}</DateFormater>
      </div>

      <Heading
        type="regular"
        size="l"
        className="title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <picture className="picture">
        <source
          media={theme.breakpoints.desktop.all.slice(7)}
          type="image/png"
          srcSet={coverImage.postPage['desktop.all']}
        />

        <source
          media={theme.breakpoints.mobile.all.slice(7)}
          type="image/png"
          srcSet={coverImage.postPage['mobile.all']}
        />

        <img className="img" src={coverImage.postPage['desktop.all']} alt={coverImage.alt} />
      </picture>
    </Grid>
  )
}

Header.propTypes = {
  className: string,
  title: string,
  tag: string,
  date: string,
  coverImage: object,
}

export default styled(Header)`
  ${styles}
`
