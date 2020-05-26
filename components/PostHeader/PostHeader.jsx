import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import { Grid } from '@csssr/core-design'
import { Heading } from '@csssr/core-design'

import styles from './PostHeader.styles'
import { Picture } from '@csssr/csssr.images'

const PostHeader = ({ className, title, coverImage, alt }) => {
  return (
    <Grid className={className}>
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

PostHeader.propTypes = {
  className: string,
  title: string,
  coverImage: object,
  alt: string,
}

export default styled(PostHeader)`
  ${styles}
`
