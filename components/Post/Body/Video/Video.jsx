import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import { string, node } from 'prop-types'
import styles from './Video.styles'

const Video = ({ className, src, children }) =>
  children ? (
    <>
      <div className={cn(className, 'aspect-ratio-box')}>
        <div className="inner-box">{children}</div>
      </div>
    </>
  ) : (
    <video controls className={className}>
      <source src={src} />

      <p>Error! Video is unavailable.</p>
    </video>
  )

Video.propTypes = {
  className: string,
  src: string,
  width: string,
  height: string,
  children: node,
}

export default styled(Video)`
  ${styles}
`
