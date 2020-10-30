import React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string, oneOf, node } from 'prop-types'
import styles from './Subtitle.styles'
import { Text } from '@csssr/core-design'

const Subtitle = ({ className, size, children }) => (
  <Text
    className={cn(className, {
      '_is-large': size === 'l',
    })}
    type="strong"
    size={size === 's' || size === 'm' ? size : 'm'}
    as="div"
  >
    {children}
  </Text>
)

Subtitle.propTypes = {
  className: string,
  children: node,
  size: oneOf(['l', 'm', 's']),
}

export default styled(Subtitle)`
  ${styles}
`
