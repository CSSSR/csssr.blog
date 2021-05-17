import React from 'react'
import { string, node, boolean } from 'prop-types'
import styled from '@emotion/styled'

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
