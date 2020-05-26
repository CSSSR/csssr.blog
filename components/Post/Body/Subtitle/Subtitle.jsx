import React from 'react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import styles from './Subtitle.styles'
import { Text } from '@csssr/core-design'

const Subtitle = ({ className, children }) => (
  <Text className={className} type="strong" size="m" as="div">
    {children}
  </Text>
)

Subtitle.propTypes = {
  className: string,
  imgName: string,
  alt: string,
}

export default styled(Subtitle)`
  ${styles}
`
