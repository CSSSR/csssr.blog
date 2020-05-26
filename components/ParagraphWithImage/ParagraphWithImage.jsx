import React from 'react'
import { string, node, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ParagraphWithImage.styles'
import { Picture } from '@csssr/csssr.images'

const ParagraphWithImage = ({ children, className, pictureData, alt }) => {
  return (
    <div className={className}>
      <Picture pictureData={pictureData} className="img-wrap" alt={alt} />
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  children: node,
  className: string,
  pictureData: object,
  alt: string,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
