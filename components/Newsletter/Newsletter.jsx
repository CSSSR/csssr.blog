import React from 'react'
import styled from '@emotion/styled'
import styles, { dynamicFooterStyles } from './Newsletter.styles'
import { Global } from '@emotion/react'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Heading, Text } from '@csssr/core-design'
import { Grid } from '../Grid'
import ContactForm from '../ContactForm'
import { newsletterData } from '../../data/newsletter'

const Newsletter = ({
  className,
  language,
  kind,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const { title, subtitle, img, imgAlt } = newsletterData

  return (
    <div className={className}>
      <Grid as="section" className="section" data-testid="Newsletter:block">
        <div className="container">
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

          <PictureSmart requireImages={img} className="picture" alt={imgAlt} />

          {language === 'ru' && <Global styles={dynamicFooterStyles} />}
        </div>
      </Grid>
    </div>
  )
}

export default styled(Newsletter)`
  ${styles}
`
