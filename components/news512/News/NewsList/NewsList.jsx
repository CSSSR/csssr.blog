import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { arrayOf, number, shape, string } from 'prop-types'
import React from 'react'

import cleaningTitle from '../../../../utils/client/cleaningTitle'
import DateFormatter from '../../../DateFormatter'

import styles from './NewsList.styles'

const NewsList = ({ posts, lastPostDate, className }) => {
  return (
    <ul className={className} data-testid="NewsList:block">
      {posts.map(({ slug, title, episodeNumber, date }, index) => (
        <li key={slug} className={cn('news-item', { first: date === lastPostDate })}>
          <Link href={`/ru/news512/episode/${slug}`}>
            <a className="news-item-link" data-testid={`NewsList:link:episode[${index}]`}>
              <div className="news-item-wrapper">
                <span className="news-item-number">#{episodeNumber}</span>

                <span className="news-item-date">
                  <DateFormatter language="ru">{date}</DateFormatter>
                </span>
              </div>

              <p
                className="news-item-title"
                dangerouslySetInnerHTML={{ __html: cleaningTitle(title) }}
              />
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
