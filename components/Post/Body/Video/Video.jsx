import styled from '@emotion/styled'
import cn from 'classnames'
import { node, string } from 'prop-types'
import React from 'react'

import styles from './Video.styles'

const Video = ({ className, src, children }) =>
  children ? (
    <>
      <div className={cn(className, 'aspect-ratio-box')}>
        <div className="inner-box">{children}</div>
      </div>
    </>
  ) : (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video controls className={className}>
      <source src={src} />

      <p>Error! Video is unavailable.</p>
    </video>
  )

Video.propTypes = {
  className: string,
  src: string,
  children: node,
}

export default styled(Video)`
  ${styles}
`
