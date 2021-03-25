import { backgroundCss } from '@csssr/csssr.images/dist/utils'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { arrayOf, object, oneOf, string } from 'prop-types'
import React from 'react'

import styles, { bodyDynamicStyle } from './Separator.styles'

const Separator = ({ className, sources, type, imageName }) => {
  return (
    <>
      <hr className={cn(className, `${className}_${imageName}`, type)} />
      <Global
        styles={css`
          ${backgroundCss(`.${className}::after`, sources)}
        `}
      />
      <Global styles={bodyDynamicStyle} />
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
