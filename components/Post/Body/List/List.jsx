import styled from '@emotion/styled'
import { boolean, node, string } from 'prop-types'
import React from 'react'

import styles from './List.styles'

const List = ({ className, children, isOrdered }) => {
  const ListTag = isOrdered ? 'ol' : 'ul'

  return <ListTag className={className}>{children}</ListTag>
}

List.protoType = {
  className: string,
  children: node,
  isOrdered: boolean,
}

export default styled(List)`
  ${styles}
`
