import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'
import { postNewsletterData } from '../../data/newsletter'

const PostNewsletter = ({ className, language, kind, postType, isTopPosition, isBottomPosition, BENCHMARK_EMAIL_TOKEN, BENCHMARK_EMAIL_LIST_ID }) => {
  const { title, subtitle, img, imgAlt } = postNewsletterData

  return (
    <div className={cn(className, {
      onBottom: isBottomPosition,
      onTop: isTopPosition
    })}
    >
      {(language === 'ru' && postType !== 'news') && (
       <div className="container">
        <PictureSmart
          requireImages={img}
          className="picture"
          alt={imgAlt}
        />
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
          BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
          BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
        />
      </div>
      )}

      <PostShare 
        language={language}
        postType={postType}
      />
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
