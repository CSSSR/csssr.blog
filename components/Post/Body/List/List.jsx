import React from 'react'
import styled from '@emotion/styled'
import styles from './List.styles'

const List = ({ className, children }) => {
  const list = React.createElement(
    `${className.includes('ordered') ? 'ol' : 'ul'}`,
    { className },
    ...children,
  )
  return list
}

export default styled(List)`
  ${styles}
`
