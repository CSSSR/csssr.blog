import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import React from 'react'

import { ReactComponent as Arrow } from '../../../../public/components/newsAudioLink/icons/arrow.svg'
import { ReactComponent as RightArrow } from '../../../../public/components/newsAudioLink/icons/right-arrow.svg'

import styles, { backgroundImagesStyles } from './NewsAudioLink.styles'

const NewsAudioLink = ({ className, href, testId = 'NewsAudio:link' }) => (
  <div className={className} data-testid={testId}>
    <div className="soundtrack-wrapper">
      <div className="soundtrack-image" />
    </div>

    <div className="links-wrapper">
      <a
        className="link"
        href="https://radio.csssr.com/rss/news512.rss"
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
        {'RSS подкаста'}
        <RightArrow className="arrow" />
      </a>
      <a className="link" href={href} target="_blank" rel="noopener nofollow noreferrer">
        Прослушать аудио-версию
        <Arrow className="arrow" />
      </a>
    </div>
    <Global styles={backgroundImagesStyles} />
  </div>
)

NewsAudioLink.propTypes = {
  className: string,
}

export default styled(NewsAudioLink)`
  ${styles}
`
