import styled from '@emotion/styled'
import React from 'react'

import styles from './List.styles'

const List = ({ className, children, ...otherProps }) => {
  const list = React.createElement(
    `${className.includes('is_ordered') ? 'ol' : 'ul'}`,
    { className, ...otherProps },
    ...children,
  )
  return list
}

export default styled(List)`
  ${styles}
`
