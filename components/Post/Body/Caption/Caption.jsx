import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { node, oneOf, string } from 'prop-types'
import React from 'react'

import styles from './Caption.styles'

const Caption = ({ className, size, children }) => (
  <Text
    type="regular"
    size="m"
    as="div"
    className={cn(className, {
      size_s: size === 's',
      size_l: size === 'l',
    })}
  >
    {children}
  </Text>
)

Caption.propTypes = {
  className: string,
  children: node,
  size: oneOf(['s', 'l']),
}

export default styled(Caption)`
  ${styles}
`
