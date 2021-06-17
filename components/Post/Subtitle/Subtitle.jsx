import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import { node, string } from 'prop-types'
import React from 'react'

import styles from './Subtitle.styles'

const Subtitle = ({ className, dangerouslySetInnerHTML, children }) =>
  children ? (
    <Text className={className} type="strong" size="m" as="div">
      {children}
    </Text>
  ) : (
    <Text
      className={className}
      type="strong"
      size="m"
      as="div"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  )

Subtitle.propTypes = {
  className: string,
  children: node,
}

export default styled(Subtitle)`
  ${styles}
`
