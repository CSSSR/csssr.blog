import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import { Grid } from '@csssr/core-design'
import { Heading } from '@csssr/core-design'
import { useTheme } from 'emotion-theming'

import styles from './PostHeader.styles'

const PostHeader = ({ className, title, coverImage }) => {
  const theme = useTheme()

  return (
    <Grid className={className}>
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
          srcSet={coverImage['desktop.all']}
        />

        <source
          media={theme.breakpoints.mobile.all.slice(7)}
          type="image/png"
          srcSet={coverImage['mobile.all']}
        />

        <img className="img" src={coverImage['desktop.all']} alt={coverImage.alt} />
      </picture>
    </Grid>
  )
}

PostHeader.propTypes = {
  className: string,
  title: string,
  coverImage: object,
}

export default styled(PostHeader)`
  ${styles}
`
