import React from 'react'
import { Global } from '@emotion/core'
import cn from 'classnames'
import styled from '@emotion/styled'
import { string, arrayOf, object } from 'prop-types'
import styles, { backgroundImagesStyles } from './NewsAudioLink.styles'

import { ReactComponent as Arrow } from '../../../../public/components/newsAudioLink/icons/arrow.svg'

const NewsAudioLink = ({ className, href, title }) => (
  <a
    className={cn('news-audio-link', className)}
    href={href}
    target="_blank"
    rel="noopener nofollow"
  >
    <div className="soundtrack-image" />

    <div className="title-wrapper">
      <span className="link-title" dangerouslySetInnerHTML={{ __html: title }} />
      <Arrow className="arrow" />
    </div>

    <Global styles={backgroundImagesStyles} />
  </a>
)

NewsAudioLink.propTypes = {
  className: string,
  sources: arrayOf(object),
  src: string,
  alt: string,
}

export default styled(NewsAudioLink)`
  ${styles}
`
