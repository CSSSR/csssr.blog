import styled from '@emotion/styled'
import Link from 'next/link'
import { number, shape, string } from 'prop-types'
import React from 'react'

import DateFormatter from '../../DateFormatter'
import MainGrid from '../MainGrid'

import styles from './LatestNews.styles'

const LatestNews = ({ className, latestNews: { title, date, slug, episodeNumber } }) => {
  return (
    <Link href={`/ru/news512/episode/${slug}`}>
      <a className={className} data-testid={`PostCard:link:article.${slug}`}>
        <MainGrid as="span" className="wrap">
          <span className="top">
            <object>
              <Link href="/ru/news512">
                <a className="tag" data-testid={`PostCard:link:category.news`}>
                  Новости 512
                </a>
              </Link>
            </object>

            <DateFormatter language="ru" className="date">
              {date}
            </DateFormatter>
          </span>

          <span className="episode">Выпуск #{episodeNumber}</span>

          <span className="title">{title}</span>
        </MainGrid>
      </a>
    </Link>
  )
}

LatestNews.propsTypes = {
  className: string,
  latestNews: shape({
    title: string,
    date: string,
    slug: string,
    episodeNumber: number,
  }),
}

export default styled(LatestNews)`
  ${styles}
`
