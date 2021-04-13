import React from 'react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { string, arrayOf, object } from 'prop-types'
import styles, { backgroundImagesStyles } from './NewsAudioLink.styles'

import { ReactComponent as Arrow } from '../../../../public/components/newsAudioLink/icons/arrow.svg'
import { ReactComponent as RightArrow } from '../../../../public/components/newsAudioLink/icons/right-arrow.svg'

const NewsAudioLink = ({ className, href, testId = 'NewsAudio:link' }) => (
  <div
    className={className}
    data-testid={testId}
  >
    <div className="soundtrack-wrapper">
      <div className="soundtrack-image" />
    </div>

    <div className="links-wrapper">
      <a className="link"
         href="https://radio.csssr.com/rss/news512.rss"
         target="_blank"
         rel="noopener nofollow"
      >
        {'RSS подкаста'}
        <RightArrow className="arrow" />
      </a>
      <a className="link"
         href={href}
         target="_blank"
         rel="noopener nofollow"
      >
        Прослушать аудио-версию
        <Arrow className="arrow" />
      </a>
    </div>
    <Global styles={backgroundImagesStyles} />
  </div>
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
