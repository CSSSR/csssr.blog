import React from 'react'
import { string, node } from 'prop-types'
import styled from '@emotion/styled'

import styles from './Promo.styles'

const Promo = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

Promo.propTypes = {
  children: node,
  className: string,
}

export default styled(Promo)`
  ${styles}
`
