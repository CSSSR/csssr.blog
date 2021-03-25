import { Heading, Text } from '@csssr/core-design'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import React, { useState } from 'react'

import { postNewsletterData } from '../../data/newsletter'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'

import styles from './PostNewsletter.styles'

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
  const withoutSubscribeForm = language !== 'ru' || type === 'news'
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
