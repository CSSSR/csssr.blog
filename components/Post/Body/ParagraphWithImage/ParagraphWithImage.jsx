import React from 'react'
import { string, node, array } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ParagraphWithImage.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const ParagraphWithImage = ({ children, className, sources, alt }) => {
  return (
    <div className={className}>
      <Picture sources={sources} className="img-wrap" alt={alt} />
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  children: node,
  className: string,
  sources: array,
  alt: string,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
