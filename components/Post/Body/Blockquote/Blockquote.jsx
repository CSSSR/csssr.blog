import React from 'react'
import styled from '@emotion/styled'

import styles from './Blockquote.styles'

const Blockquote = ({ className, children }) => {
  return (
    <div className={className}>
      <blockquote className="blockquote">{children}</blockquote>
    </div>
  )
}

export default styled(Blockquote)`
  ${styles}
`
