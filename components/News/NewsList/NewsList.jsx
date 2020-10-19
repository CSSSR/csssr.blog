import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'

import DateFormatter from '../../DateFormatter'
import { Grid } from '../../Grid'

import styles from './NewsList.styles'

const NewsList = ({ posts, className }) => {
  return (
    <div className={className}>
      {posts.map(({ slug, title, number, date }, index) => (
        <Link key={slug} href={`/ru/news512/episode/${slug}`}>
          <Grid as="a" className={cn('news-item', { first: index === 0 })}>
            <span className="news-item-number">#{number}</span>

            <span className="news-item-date">
              <DateFormatter language="ru">{date}</DateFormatter>
            </span>

            <span className="news-item-title">{title}</span>
          </Grid>
        </Link>
      ))}
    </div>
  )
}

NewsList.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      slug: string,
      date: string,
      number: number,
    }),
  ),
  className: string,
}

export default styled(NewsList)`
  ${styles}
`
