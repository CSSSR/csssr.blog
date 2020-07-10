import React from 'react'
import { string, oneOf } from 'prop-types'
import cn from 'classnames'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './Separator.styles'
import { backgroundCss } from '@csssr/csssr.images/dist/utils'

const Separator = ({ className, sources, type }) => {
  return (
    <>
      <hr className={cn(className, type)} />
      <Global
        styles={css`
          ${backgroundCss(`.${className}::after`, sources)}
        `}
      />
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
