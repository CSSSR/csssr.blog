import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import { node, string } from 'prop-types'
import React from 'react'

import images from './constants/images'
import styles from './ParagraphWithImage.styles'

const ParagraphWithImage = ({ children, className, alt, imageName }) => {
  return (
    <div className={className}>
      {images[imageName] && <Picture sources={images[imageName]} className="img-wrap" alt={alt} />}
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  children: node,
  className: string,
  alt: string,
  imageName: string,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
