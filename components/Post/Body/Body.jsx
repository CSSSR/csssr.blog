import React from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'

import { Grid } from '../../Grid'
import PostNewsletter from '../../PostNewsletter'
import Comments from './Comments'
import ReadMore from './ReadMore'

import styles from './Body.styles'

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
      isHideShareLinksOnMobile
      BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
      BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
      data-testid="Post:block"
    />
    {compilerMdx({ content, images })}

    <PostNewsletter
      className="post-newsletter hidden_desktop"
      language={language}
      type={type}
      isHideNewsPodcastOnMobile
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
