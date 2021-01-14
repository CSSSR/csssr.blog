import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Newsletter.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import { Grid } from '../Grid'
import ContactForm from './ContactForm'
import newsletterData from '../../data/newsletter'

const Newsletter = ({ className, kind, BENCHMARK_EMAIL_TOKEN, BENCHMARK_EMAIL_LIST_ID }) => {
  const { title, titlePost, subtitle, subtitlePost, img, postImg, imgAlt } = newsletterData

  return (
    <div className={cn(`${className}`, { post: kind === 'post' })}>
      <Grid as="section">
        <div className="container">
          <Heading.H2 type="regular" className="title">
            {kind === 'post' ? titlePost : title}
          </Heading.H2>
          <Text
            type="regular"
            size="s"
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: kind === 'post' ? subtitlePost : subtitle }}
          />

          <ContactForm
            kind={kind}
            BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
            BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
          />

          <PictureSmart
            requireImages={kind === 'post' ? postImg : img}
            className="picture"
            alt={imgAlt}
          />
        </div>
      </Grid>
    </div>
  )
}

export default styled(Newsletter)`
  ${styles}
`
