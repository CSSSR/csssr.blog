import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import { Text } from '@csssr/core-design'
import { string, node, oneOf } from 'prop-types'
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
