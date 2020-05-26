import React from 'react'
import { string, node } from 'prop-types'
import styled from '@emotion/styled'
import Img from '../Img'
import styles from './ParagraphWithImage.styles'

const ParagraphWithImage = ({ children, className, slug, imgName }) => {
  return (
    <div className={className}>
      <Img name={imgName} slug={slug} className="img-wrap" />
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  className: string,
  imgName: string,
  children: node,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
