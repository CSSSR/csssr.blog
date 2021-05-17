import React from 'react'
import { string, oneOf, arrayOf, object } from 'prop-types'
import cn from 'classnames'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import styles, { bodyDynamicStyle } from './Separator.styles'
import { backgroundCss } from '@csssr/csssr.images/dist/utils'

const Separator = ({ className, sources, type, imageName }) => {
  return (
    <div className={cn(className)}>
      <hr className={cn('hr', `hr_${imageName}`, type)} />
      <Global
        styles={css`
          ${backgroundCss(`.hr_${imageName}::after`, sources)}
        `}
      />
      <Global styles={bodyDynamicStyle} />
    </div>
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
