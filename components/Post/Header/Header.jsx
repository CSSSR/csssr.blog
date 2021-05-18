import { Heading } from '@csssr/core-design'
import { Picture, PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { arrayOf, object, string } from 'prop-types'
import React from 'react'

import categoriesByLanguage from '../../../data/categoriesByLanguage'
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
  return (
    <Grid
      as="header"
      className={cn(className, {
        type_news: type === 'news',
      })}
      data-testid="Post:block:header"
    >
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        {type === 'news' ? (
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

      {type === 'news' ? (
        <>
          <div className="title-wrapper">
            <Heading type="regular" size="l" className="title">
              Новости 512
            </Heading>

            {episodeNumber && (
              <Heading.H2 type="regular" size="l" className="episode-number">
                #{episodeNumber}
              </Heading.H2>
            )}
          </div>

          <Subtitle dangerouslySetInnerHTML={{ __html: title }} size="l" />

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

      {type === 'news' ? (
        <PictureSmart
          className="picture"
          requireImages={require.context('../../../public/components/post/header/postCover')}
          alt="Человек с громкоговорителем оглашающий новости"
        />
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
