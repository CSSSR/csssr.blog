import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'

import { Text } from '@csssr/core-design'
import styles from './CookiesPopup.styles'

import localStorageAvailable from '../../utils/client/localStorageAvailable'
import { links, text } from '../../data/cookiesLinks'
import { ReactComponent as CrossIcon } from '../../public/icons/cross_white.svg'

const crossIcon = <CrossIcon width="100%" height="100%" />

const COOKIES_POLICY_ALERT_HIDDEN = 'hidden'

const CookiesPopup = ({ className, language }) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => {
    if (localStorageAvailable()) {
      localStorage.setItem('cookies_policy', COOKIES_POLICY_ALERT_HIDDEN)
    }
    setIsHidden(true)
  }

  useEffect(() => {
    if (localStorageAvailable()) {
      const isHidden = localStorage.getItem('cookies_policy') === COOKIES_POLICY_ALERT_HIDDEN
      setIsHidden(isHidden)
    } else {
      setIsHidden(false)
    }
  }, [])

  const cookiesLinks = links[language]
  const cookiesText = text[language]

  return (
    <div className={cn(className, { hide: isHidden })}>
      <button className="close" onClick={handleClick}>
        {crossIcon}
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: cookiesText.text }} />

          {cookiesLinks.map((url, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: cookiesText.link[index],
              }}
            />
          ))}
        </Text>
      </div>
    </div>
  )
}

export default styled(CookiesPopup)`
  ${styles}
`
