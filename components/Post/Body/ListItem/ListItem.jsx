import styled from '@emotion/styled'
import { boolean, node, string } from 'prop-types'
import React from 'react'

import styles from './ListItem.styles'

const ListItem = ({ className, children }) => {
  return <li className={className}>{children}</li>
}

ListItem.protoType = {
  className: string,
  children: node,
  isOrdered: boolean,
}

export default styled(ListItem)`
  ${styles}
`
