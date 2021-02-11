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
} from "react-share";

const PostShare = ({ className, language, postType }) => {
  const router = useRouter()
  const shareTitle = language === 'ru' ? 'Поделиться' : 'Share'
  const copyMessage = language === 'ru' ? 'Скопировано!' : 'Copied!'

  const inputRef = useRef()

  const currentUrl = postType === 'news' ?
   `http://blog.csssr.com/${language}/news512/episode/${router.query.slug}` :
   `http://blog.csssr.com/${language}/article/${router.query.slug}`

  const copyHandler = () => {
    function timerFunction() {
      const timer = setTimeout(() => {
        setIsMessageShown(false)
      }, 2000)
      return () => clearTimeout(timer)
    }

    if (window.isSecureContext) {
      navigator.clipboard.writeText(currentUrl)
      setIsMessageShown(true)
      timerFunction()
    } else {
      inputRef.current.select() // для локальной работы копирования текста
      document.execCommand('copy')
      setIsMessageShown(true)
      timerFunction()
    }
  }

  const [isMessageShown, setIsMessageShown] = useState(false)

  return (
    <div className={cn(className, 'share', {
      withMargin: language === 'ru' && postType !== 'news'
    })}>
      <Heading.H2 type="regular" className="share-title">
        {shareTitle}
      </Heading.H2>

      <ul className="links">
        <li className="link-item">
          <FacebookShareButton  className="share-link facebook" url={currentUrl} />
        </li>
        <li className="link-item">
          {language === 'ru' ? <VKShareButton className="share-link vk" url={currentUrl} /> : <EmailShareButton className="share-link mail" url={currentUrl} />}
        </li>
        <li className="link-item">
          <TwitterShareButton className="share-link twitter" url={currentUrl} />
        </li>
        <li className="link-item copy">
          <button type="button" className="share-link copy" url={currentUrl} onClick={copyHandler} />
          <input className="hidden-input" ref={inputRef} defaultValue={currentUrl} />

          {isMessageShown && (
            <Text as="span" className={cn('copy-message', {
              '_en': language === 'en'
            })}>
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
