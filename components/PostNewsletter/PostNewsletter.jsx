import React, { useState } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'
import NewsPodcast from './NewsPodcast'
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
  const withoutSubscribeForm = language !== 'ru' || type === 'news'
  const withNewsPodcast = language == 'ru' && type === 'news'
  return (
    <div
      className={cn(className, {
        'without_subscribe-form': withoutSubscribeForm,
        with_news_podcast: withNewsPodcast,
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

      {withNewsPodcast && <NewsPodcast />}

      <PostShare language={language} type={type} />
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
