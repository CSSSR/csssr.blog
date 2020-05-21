import React from 'react'
import { string, oneOf } from 'prop-types'
import cn from 'classnames'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Separator.styles'

const Separator = ({ className, type }) => {
  return (
    <div className={cn(className, type)}>
      <Global styles={backgroundImagesStyles()} />
    </div>
  )
}

Separator.propTypes = {
  className: string,
  type: oneOf(['man-with-cafe', 'people-with-basket', 'people-with-gramophone', 'people-with-dog']),
}

export default styled(Separator)`
  ${styles}
`
