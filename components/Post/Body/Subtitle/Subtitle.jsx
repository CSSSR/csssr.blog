import React from 'react'
import styled from '@emotion/styled'
import { string, node } from 'prop-types'
import styles from './Subtitle.styles'
import { Text } from '@csssr/core-design'

const Subtitle = ({ className, children }) => (
  <Text className={className} type="strong" size="m" as="div">
    {children}
  </Text>
)

Subtitle.propTypes = {
  className: string,
  children: node,
}

export default styled(Subtitle)`
  ${styles}
`
