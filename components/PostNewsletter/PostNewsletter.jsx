import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'
import NewsPodcast from './NewsPodcast'
import { postNewsletterData } from '../../data/newsletter'
import { defaultTheme } from '@csssr/core-design'

const PostNewsletter = ({
  className,
  language,
  kind,
  type,
  HideShareLinksOnMobile,
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

      <PostShare language={language} type={type} HideShareLinksOnMobile={HideShareLinksOnMobile} />
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
