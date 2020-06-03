import React from 'react'
import styled from '@emotion/styled'
import { string, array, bool } from 'prop-types'
import styles from './Img.styles'
import cn from 'classnames'
import { Picture } from '@csssr/csssr.images/dist/react'

const Img = ({ className, sources, alt, withBigMargin }) =>
  <Picture className={cn(className, { with_big_margin: withBigMargin })}
           sources={sources}
           alt={alt} />

Img.propTypes = {
  className: string,
  sources: array,
  alt: string,
  withBigMargin: bool,
}

export default styled(Img)`
  ${styles}
`
