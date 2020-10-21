import React from 'react'
import { string, oneOf, arrayOf, object } from 'prop-types'
import cn from 'classnames'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './Separator.styles'
import { backgroundCss } from '@csssr/csssr.images/dist/utils'

const Separator = ({ className, sources, type, imageName }) => {
  return (
    <>
      <hr className={cn(className, `${className}_${imageName}`, type)} />
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
  imageName: string,
  type: oneOf(['color-line', 'bg-repeat']),
  sources: arrayOf(object),
}

export default styled(Separator)`
  ${styles}
`
