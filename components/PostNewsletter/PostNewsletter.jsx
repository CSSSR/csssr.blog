import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'
import { postNewsletterData } from '../../data/newsletter'

const PostNewsletter = ({
  className,
  language,
  kind,
  type,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const { title, subtitle, img, imgAlt } = postNewsletterData

  const [isMessageHidden, setMessageHidden] = useState(true)
  const [isMobile, setMobile] = useState(null)
  const withoutSubscribeForm = language !== 'ru' || type === 'news'

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }

    window.addEventListener('load', updateWindowDimensions)
    
    return () => window.removeEventListener('load', updateWindowDimensions)
  })

  return (
    <div
      className={cn(className, {
        'without_subscribe-form': withoutSubscribeForm,
      })}
    >
      {!withoutSubscribeForm && (
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
            BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
            BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
          />
        </div>
      )}

      <PostShare language={language} type={type} />
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
