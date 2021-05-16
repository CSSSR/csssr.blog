import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import React from 'react'

import styles from './ErrorLeftContent.styles'

const ErrorLeftContent = ({ className }) => (
  <PictureSmart
    className={className}
    alt="404"
    requireImages={require.context('../../../public/components/error/images/404')}
    testId="ErrorPage404:block:img"
  />
)

export default styled(ErrorLeftContent)`
  ${styles}
`
