import React, { useContext, useState, useRef } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import PostShare from '../PostShare'
import { postNewsletterData } from '../../data/newsletter'
import { Context } from '../../utils/subscribeBlockProvider'
import useClickOutside from '../../utils/client/useClickOutside'

const PostNewsletter = ({
  className,
  language,
  kind,
  type,
  isTopPosition,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const { title, subtitle, img, imgAlt } = postNewsletterData

  const { isBottomPosition } = useContext(Context)

  const wrapperRef = useRef()

  const [isMessageHidden, setMessageHidden] = useState(true)
  const [inputValueLength, setInputValueLength] = useState(0)

  const onClickOutSideHandler = () => {
    inputValueLength !== 0 ? setMessageHidden(false) : setMessageHidden(true)
  }

  useClickOutside(wrapperRef, onClickOutSideHandler)

  return (
    <div
      className={cn(className, {
        onBottom: isBottomPosition,
        onTop: isTopPosition,
      })}
      ref={wrapperRef}
    >
      {language === 'ru' && type !== 'news' && (
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
            setInputValueLength={setInputValueLength}
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
