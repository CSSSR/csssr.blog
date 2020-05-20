/** @jsx jsx */
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import styles from './Note.styles'
import { jsx, css } from '@emotion/core'

import getScrollbarWidth from '../../utils/getScrollbarWidth'

const Note = ({children, className}) =>  {

  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth());
  })

  return (
    <div className={className}
         css={css`
          @media screen and (max-width: 767px) {
            width: calc(100vw - ${scrollbarWidth}px) !important
          }
        `}
    >
    {children}
  </div>
  )
}

export default styled(Note)`
  ${styles}
`



