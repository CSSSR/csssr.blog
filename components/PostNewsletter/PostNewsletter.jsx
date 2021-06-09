import { defaultTheme, Heading, Text } from '@csssr/core-design'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'

import { postNewsletterData } from '../../data/newsletter'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'

import NewsPodcast from './NewsPodcast'
import styles from './PostNewsletter.styles'

const PostNewsletter = ({
  className,
  language,
  kind,
  type,
  isHideShareLinksOnMobile,
  HideNewsPodcastOnMobile,
}) => {
  const { title, subtitle, img, imgAlt } = postNewsletterData

  const [isMessageHidden, setMessageHidden] = useState(true)
  const withSubscribeForm = language === 'ru' && type !== 'news'
  const withNewsPodcast = type === 'news'
  const [isMobile, setMobile] = useState(null)

  useEffect(() => {
    const checkWindowWidth = () => {
      setMobile(
        window.matchMedia(defaultTheme.breakpoints.mobile.all.slice('@media '.length)).matches,
      )
    }

    window.addEventListener('load', checkWindowWidth)

    return () => window.removeEventListener('load', checkWindowWidth)
  }, [])

  return (
    <div
      className={cn(className, {
        'without_subscribe-form': !withSubscribeForm,
        with_news_podcast: withNewsPodcast,
      })}
    >
      {withSubscribeForm && (
        <div className="container">
          <PictureSmart requireImages={img} className="picture" alt={imgAlt} />
          <Heading.H2 type="regular" className="title">
            {title}
          </Heading.H2>
          <Text
            type="regular"
            size="s"
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          <ContactForm
            kind={kind}
            isMobile={isMobile}
            isMessageHidden={isMessageHidden}
            setMessageHidden={setMessageHidden}
          />
        </div>
      )}

      {withNewsPodcast && <NewsPodcast HideNewsPodcastOnMobile={HideNewsPodcastOnMobile} />}

      <PostShare
        language={language}
        type={type}
        isHideShareLinksOnMobile={isHideShareLinksOnMobile}
      />
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
