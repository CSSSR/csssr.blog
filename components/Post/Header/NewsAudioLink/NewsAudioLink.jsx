import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string } from 'prop-types'
import React from 'react'

import { ReactComponent as Arrow } from '../../../../public/components/newsAudioLink/icons/arrow.svg'

import styles, { backgroundImagesStyles } from './NewsAudioLink.styles'

const NewsAudioLink = ({ className, href, title, testId = 'NewsAudio:link' }) => (
  <a
    className={cn('news-audio-link', className)}
    href={href}
    target="_blank"
    rel="noopener nofollow noreferrer"
    data-testid={testId}
  >
    <div className="soundtrack-wrapper">
      <div className="soundtrack-image" />
      <div className="soundtrack-image_hover" />
    </div>

    <div className="title-wrapper">
      <span className="link-title" dangerouslySetInnerHTML={{ __html: title }} />
      <Arrow className="arrow" />
    </div>

    <Global styles={backgroundImagesStyles} />
  </a>
)

NewsAudioLink.propTypes = {
  className: string,
}

export default styled(NewsAudioLink)`
  ${styles}
`
