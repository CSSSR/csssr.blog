import styled from '@emotion/styled'
import cn from 'classnames'
import { object, string } from 'prop-types'
import React from 'react'

import { Grid } from '../../Grid'
import PostNewsletter from '../../PostNewsletter'

import styles from './Body.styles'
import Comments from './Comments'
import ReadMore from './ReadMore'
import { compilerMdx } from './utils/compilerMdx'

const Body = ({
  className,
  posts,
  content,
  slug,
  images,
  language,
  type,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => (
  <Grid className={cn(`post-body ${className}`)} data-testid="Post:block">
    <PostNewsletter
      className={cn('post-newsletter', {
        hidden_mobile: type !== 'news',
      })}
      language={language}
      type={type}
      kind="post"
      HideShareLinksOnMobile
      BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
      BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      data-testid="Post:block"
    />
    {compilerMdx({ content, type, images })}

    <PostNewsletter
      className="post-newsletter hidden_desktop"
      language={language}
      type={type}
      HideNewsPodcastOnMobile
      kind="post"
      BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
      BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
    />

    {language === 'ru' && type !== 'news' && <ReadMore posts={posts} />}

    <Comments id={slug} language={language} type={type} />
  </Grid>
)

Body.propTypes = {
  className: string,
  content: string,
  images: object,
  slug: string,
}

export default styled(Body)`
  ${styles}
`
