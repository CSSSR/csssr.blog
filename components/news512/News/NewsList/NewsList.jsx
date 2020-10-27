import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'

import DateFormatter from '../../../DateFormatter'
import cleaningTitle from '../../../../utils/client/cleaningTitle'
import { Grid } from '../../../Grid'

import styles from './NewsList.styles'

const NewsList = ({ posts, lastPostDate, className }) => {
  return (
    <ul className={className}>
      {posts.map(({ slug, title, episodeNumber, date }) => (
        <li key={slug}>
          <Link href={`/ru/news512/episode/${slug}`}>
            <Grid as="a" className={cn('news-item', { first: date === lastPostDate })}>
              <span className="news-item-number">#{episodeNumber}</span>

              <span className="news-item-date">
                <DateFormatter language="ru">{date}</DateFormatter>
              </span>

              <span className="news-item-title">{cleaningTitle(title)}</span>
            </Grid>
          </Link>
        </li>
      ))}
    </ul>
  )
}

NewsList.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      slug: string,
      date: string,
      episodeNumber: number,
    }),
  ),
  lastPostDate: string,
  className: string,
}

export default styled(NewsList)`
  ${styles}
`
