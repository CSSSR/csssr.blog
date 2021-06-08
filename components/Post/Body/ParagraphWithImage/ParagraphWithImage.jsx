import { Picture, PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import { arrayOf, node, object, oneOf, string } from 'prop-types'
import React from 'react'

import { defaultImages } from './constants'
import styles from './ParagraphWithImage.styles'

const ParagraphWithImage = ({ children, className, sources, alt, imageName }) => {
  return (
    <div className={className}>
      {imageName ? (
        <PictureSmart requireImages={defaultImages[imageName]} className="img-wrap" alt={alt} />
      ) : (
        <Picture sources={sources} className="img-wrap" alt={alt} />
      )}
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  children: node,
  className: string,
  sources: arrayOf(object),
  alt: string,
  imageName: oneOf(['manWithLaptop', 'laptopNews', 'laptopDialog']),
}

export default styled(ParagraphWithImage)`
  ${styles}
`
