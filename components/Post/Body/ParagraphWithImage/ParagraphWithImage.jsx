import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import { node, string } from 'prop-types'
import React from 'react'

import defaultImages from './constants/images'
import styles from './ParagraphWithImage.styles'

const ParagraphWithImage = ({ children, className, alt, imageName }) => {
  return (
    <div className={className}>
      {defaultImages[imageName] && (
        <Picture sources={defaultImages[imageName]} className="img-wrap" alt={alt} />
      )}
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
