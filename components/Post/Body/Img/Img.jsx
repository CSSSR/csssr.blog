import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { arrayOf, bool, object, string } from 'prop-types'
import React from 'react'

import styles from './Img.styles'

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

Img.componentID = Symbol('@csssr/blog/Img')

export default styled(Img)`
  ${styles}
`
