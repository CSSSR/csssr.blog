import styled from '@emotion/styled'
import { string } from 'prop-types'
import React from 'react'

import styles from './VerticalGap.styles'

const VerticalGap = ({ className }) => {
  return <hr className={className} />
}

VerticalGap.propTypes = {
  className: string,
}

export default styled(VerticalGap)`
  ${styles}
`
