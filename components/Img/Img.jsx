import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import styles from './Img.styles'
import { Picture } from '@csssr/csssr.images'

const Img = ({ className, pictureData, alt }) =>
  <Picture className={className} pictureData={pictureData} alt={alt} />

Img.propTypes = {
  className: string,
  pictureData: object,
  alt: string,
}

export default styled(Img)`
  ${styles}
`
