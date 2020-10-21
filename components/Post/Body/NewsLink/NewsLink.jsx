import React from 'react'
import styled from '@emotion/styled'
import { string, arrayOf, object } from 'prop-types'
import styles from './NewsLink.styles'

const NewsLink = ({ className, href, title }) => (
  <div className={className}>
    <a className="link" href={href} target="_blank" rel="noopener nofollow">
      <div className="soundtrack-image" />
      <span className="link-title" dangerouslySetInnerHTML={{ __html: title }} />
    </a>
  </div>
)

NewsLink.propTypes = {
  className: string,
  sources: arrayOf(object),
  src: string,
  alt: string,
}

export default styled(NewsLink)`
  ${styles}
`
