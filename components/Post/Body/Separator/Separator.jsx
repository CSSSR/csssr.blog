import React from 'react'
import { string, oneOf } from 'prop-types'
import cn from 'classnames'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Separator.styles'

const Separator = ({ className, type, imageName }) => {
  return (
    <>
      <hr className={cn(className, imageName, type)} />
      <Global styles={backgroundImagesStyles(imageName)} />
    </>
  )
}

Separator.propTypes = {
  className: string,
  type: oneOf(['color-line', 'bg-repeat']),
  imageName: string,
  lineColor: string,
}

export default styled(Separator)`
  ${styles}
`
