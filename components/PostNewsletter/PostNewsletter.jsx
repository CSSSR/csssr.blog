import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PostNewsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import ContactForm from '../ContactForm'
import { postNewsletterData } from '../../data/newsletter'

const PostNewsletter = ({ className, kind, BENCHMARK_EMAIL_TOKEN, BENCHMARK_EMAIL_LIST_ID }) => {
  const { title, subtitle, img, imgAlt } = postNewsletterData

  const [isFixedPosition, setFixedPosition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 460 ? setFixedPosition(true) : setFixedPosition(false)
    })

    return () => setFixedPosition(false)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cn(className, {
      _fixed: isFixedPosition
    })}
    >
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
    </div>
  )
}

export default styled(PostNewsletter)`
  ${styles}
`
