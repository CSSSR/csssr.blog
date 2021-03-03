import React from 'react'
import styled from '@emotion/styled'
import { string, arrayOf, object, bool } from 'prop-types'
import styles from './Img.styles'
import cn from 'classnames'
import { Picture } from '@csssr/csssr.images/dist/react'

const Img = ({
  className,
  sources,
  src,
  alt,
  withBigMargin,
  withOutProcessing,
  align = 'center',
}) =>
  withOutProcessing ? (
    <img
      className={cn(className, {
        with_big_margin: withBigMargin,
        align_left: align === 'left',
        align_right: align === 'right',
        align_center: align === 'center',
      })}
      src={src}
      alt={alt}
    />
  ) : (
    <Picture
      className={cn(className, {
        with_big_margin: withBigMargin,
        align_left: align === 'left',
        align_right: align === 'right',
        align_center: align === 'center',
      })}
      sources={sources}
      alt={alt}
    />
  )

Img.propTypes = {
  className: string,
  sources: arrayOf(object),
  src: string,
  alt: string,
  withBigMargin: bool,
  withOutProcessing: bool,
}

export default styled(Img)`
  ${styles}
`
