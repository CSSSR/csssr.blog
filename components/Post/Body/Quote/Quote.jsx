import React from 'react'
import { string, bool } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import { Grid } from '@csssr/core-design'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

const Quote = ({ className, children, author, position, withImage }) => {
  return (
    <Grid className={className}>
      {withImage && (
        <PictureSmart className="image-wrapper" alt="lady" requireImages={require.context('../../../../public/components/quote/images')} />
      )}

      <blockquote className="quote">
        <p className="quote-text font_p16-regular">{children}</p>
        <span className="author font_h3-regular ">{author}</span>
        <span className="autor-post font_perforator-10-regular">{position}</span>
      </blockquote>
    </Grid>
  )
}

Quote.propTypes = {
  className: string,
  author: string,
  position: string,
  withImage: bool,
}

export default styled(Quote)`
  ${styles}
`
