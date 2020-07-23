import React from 'react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import styles from './Video.styles'

const Video = ({ className, src }) => (
  <video controls className={className}>
    <source src={src} />

    <p>Error! Video is unavailable.</p>
  </video>
)

Video.propTypes = {
  className: string,
  src: string,
}

export default styled(Video)`
  ${styles}
`
