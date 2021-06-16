import { Heading } from '@csssr/core-design'
import { Picture } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { arrayOf, object, string } from 'prop-types'
import React from 'react'

import categoriesByLanguage from '../../../data/categoriesByLanguage'
import { ReactComponent as NewsCoverImg } from '../../../public/components/post/header/news-cover-img.svg'
import DateFormatter from '../../DateFormatter'
import { Grid } from '../../Grid'
import Subtitle from '../Subtitle'

import styles from './Header.styles'
import NewsAudioLink from './NewsAudioLink'

const Header = ({
  className,
  title,
  author,
  tag,
  soundcloudLink,
  episodeNumber,
  date,
  coverImage,
  alt,
  language,
  type,
}) => {
  const isNews = type === 'news'

  return (
    <Grid
      as="header"
      className={cn(className, {
        type_news: isNews,
      })}
      data-testid="Post:block:header"
    >
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        {isNews ? (
          <Link href={`/${language}/${tag}512`}>
            <a className="tag" data-testid="Post:link.category.news">
              {categoriesByLanguage[language][tag]}
            </a>
          </Link>
        ) : (
          <Link href="/[language]/[category]" as={`/${language}/${tag.toLowerCase()}`}>
            <a className="tag" data-testid={`Post:link.category.${tag.toLowerCase()}`}>
              {categoriesByLanguage[language][tag.toLowerCase()]}
            </a>
          </Link>
        )}
      </div>

      {isNews ? (
        <>
          <Heading type="regular" size="l" className="title">
            Новости 512 {episodeNumber && <span className="episode-number">#{episodeNumber}</span>}
          </Heading>

          <Subtitle dangerouslySetInnerHTML={{ __html: title }} />

          {soundcloudLink && (
            <NewsAudioLink
              href={soundcloudLink}
              title="Прослушать аудио-версию"
              testId={'Post:link:newsAudio'}
            />
          )}
        </>
      ) : (
        <Heading
          type="regular"
          size="l"
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {isNews ? (
        <div className="news-cover">
          <NewsCoverImg className="news-cover-img" />
        </div>
      ) : (
        <Picture className="picture" sources={coverImage} alt={alt} />
      )}
    </Grid>
  )
}

Header.propTypes = {
  className: string,
  title: string,
  author: string,
  tag: string,
  date: string,
  coverImage: arrayOf(object),
  alt: string,
  language: string,
  type: string,
}

export default styled(Header)`
  ${styles}
`
