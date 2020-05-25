import React from 'react'
import { string, oneOf } from 'prop-types'
import cn from 'classnames'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Separator.styles'

const Separator = ({ className, type, imgName, lineColor }) => {
  return (
    <>
      <hr className={cn(className, imgName, type)} lineColor={lineColor} />
      <Global styles={backgroundImagesStyles(imgName)} />
    </>
  )
}

Separator.propTypes = {
  className: string,
  type: oneOf(['color-line', 'bg-repeat']),
  imgName: string,
  lineColor: string,
}

export default styled(Separator)`
  ${styles}
`
