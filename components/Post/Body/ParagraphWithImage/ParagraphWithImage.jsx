import React from 'react'
import { string, node, arrayOf, object } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './ParagraphWithImage.styles'
import { Picture } from '@csssr/csssr.images/dist/react'

const ParagraphWithImage = ({ children, className, imageSide = 'left', sources, alt }) => {
  return (
    <div
      className={cn(className, {
        newsParagraphWithImage: imageSide === 'right',
      })}
    >
      <Picture
        sources={sources}
        className={cn('img-wrap', {
          'img-wrap_right-side': imageSide === 'right',
        })}
        alt={alt}
      />
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  children: node,
  className: string,
  sources: arrayOf(object),
  alt: string,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
