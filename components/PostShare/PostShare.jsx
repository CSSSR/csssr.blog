import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostShare.styles'
import { Heading, Text } from '@csssr/core-design'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
} from 'react-share'

import { ReactComponent as FacebookIcon } from '../../public/icons/share/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../public/icons/share/twitter.svg'
import { ReactComponent as VkIcon } from '../../public/icons/share/vk.svg'
import { ReactComponent as EmailIcon } from '../../public/icons/share/mail.svg'
import { ReactComponent as CopyIcon } from '../../public/icons/share/copy.svg'

const PostShare = ({ className, language, type }) => {
  const router = useRouter()
  const shareTitle = language === 'ru' ? 'Поделиться' : 'Share'
  const copyMessage = language === 'ru' ? 'Скопировано!' : 'Copied!'

  const inputRef = useRef()
  const currentUrl = `${process.env.BLOG_HOST || 'http://localhost:3000'}${router.asPath}`

  const copyHandler = () => {
    function timerFunction() {
      const timer = setTimeout(() => {
        setIsMessageShown(false)
      }, 2000)
      return () => clearTimeout(timer)
    }

    if (window.isSecureContext) {
      navigator.clipboard.writeText(currentUrl)
    } else {
      inputRef.current.select() // для локальной работы копирования текста
      document.execCommand('copy')
    }
    setIsMessageShown(true)
    timerFunction()
  }

  const [isMessageShown, setIsMessageShown] = useState(false)

  return (
    <div
      className={cn(className, 'share', {
        without_margin_top: language !== 'ru' || type === 'news',
        with_news_podcast: language === 'ru' || type === 'news',
      })}
    >
      <Heading.H2 type="regular" className="share-title">
        {shareTitle}
      </Heading.H2>

      <ul className="links">
        <li className="link-item">
          <FacebookShareButton className="share-link facebook" url={currentUrl}>
            <FacebookIcon />
          </FacebookShareButton>
        </li>
        <li className="link-item">
          {language === 'ru' ? (
            <VKShareButton className="share-link vk" url={currentUrl}>
              <VkIcon />
            </VKShareButton>
          ) : (
            <EmailShareButton className="share-link mail" url={currentUrl}>
              <EmailIcon />
            </EmailShareButton>
          )}
        </li>
        <li className="link-item">
          <TwitterShareButton className="share-link twitter" url={currentUrl}>
            <TwitterIcon />
          </TwitterShareButton>
        </li>
        <li className="link-item copy">
          <button type="button" className="share-link copy" url={currentUrl} onClick={copyHandler}>
            <CopyIcon />
          </button>
          <input className="hidden-input" ref={inputRef} defaultValue={currentUrl} />

          {isMessageShown && (
            <Text
              as="span"
              className={cn('copy-message', {
                _en: language === 'en',
              })}
            >
              {copyMessage}
            </Text>
          )}
        </li>
      </ul>
    </div>
  )
}

export default styled(PostShare)`
  ${styles}
`
