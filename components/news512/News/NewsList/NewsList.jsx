import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'

import DateFormatter from '../../../DateFormatter'
import cleaningTitle from '../../../../utils/client/cleaningTitle'

import styles from './NewsList.styles'

const NewsList = ({ posts, lastPostDate, className }) => {
  return (
    <ul className={className}>
      {posts.map(({ slug, title, episodeNumber, date }) => (
        <li key={slug} className={cn('news-item', { first: date === lastPostDate })}>
          <Link href={`/ru/news512/episode/${slug}`}>
            <a className="news-item-link">
              <div className="news-item-wrapper">
                <span className="news-item-number">#{episodeNumber}</span>

                <span className="news-item-date">
                  <DateFormatter language="ru">{date}</DateFormatter>
                </span>
              </div>

              <p className="news-item-title">{cleaningTitle(title)}</p>
            </a>
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
