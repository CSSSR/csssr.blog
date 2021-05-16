import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { node, oneOf, string } from 'prop-types'
import React from 'react'

import styles from './Subtitle.styles'

const Subtitle = ({ className, size, dangerouslySetInnerHTML, children }) =>
  children ? (
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
  ) : (
    <Text
      className={cn(className, {
        '_is-large': size === 'l',
      })}
      type="strong"
      size={size === 's' || size === 'm' ? size : 'm'}
      as="div"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  )

Subtitle.propTypes = {
  className: string,
  children: node,
  size: oneOf(['l', 'm', 's']),
}

export default styled(Subtitle)`
  ${styles}
`
