import React from 'react'
import styled from '@emotion/styled'
import { string, object, bool } from 'prop-types'
import styles from './Img.styles'
import cn from 'classnames'
import { Picture } from '@csssr/csssr.images/dist/react'

const Img = ({ className, pictureData, alt, withBigMargin }) =>
  <Picture className={cn(className, { with_big_margin: withBigMargin })}
           pictureData={pictureData}
           alt={alt} />

Img.propTypes = {
  className: string,
  pictureData: object,
  alt: string,
  withBigMargin: bool,
}

export default styled(Img)`
  ${styles}
`
