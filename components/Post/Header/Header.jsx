import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { string, arrayOf, object } from 'prop-types'
import { Picture, PictureSmart } from '@csssr/csssr.images/dist/react'
import cn from 'classnames'
import { Heading } from '@csssr/core-design'
import Subtitle from '../Subtitle'
import NewsAudioLink from './NewsAudioLink'
import { Grid } from '../../Grid'
import DateFormatter from '../../DateFormatter'
import categoriesByLanguage from '../../../data/categoriesByLanguage'

import styles from './Header.styles'

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
  setTopPosition,
}) => {
  const headerRef = useRef()

  useEffect(() => {
    const callback = function ([entry]) {
      setTopPosition(entry.isIntersecting)
    }

    const langAndPostCondition = language === 'ru' && type !== 'news'
    const rootMargin = langAndPostCondition ? '150px 0px 0px 0px' : '-105px 0px 0px 0px'
    const threshold = langAndPostCondition ? '0.8' : '0'

    const options = {
      root: null,
      rootMargin,
      threshold,
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(headerRef.current)

      return () => observer.disconnect()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Grid
      ref={headerRef}
      as="header"
      className={cn(className, {
        type_news: type === 'news',
      })}
    >
      <div className="post-meta">
        {author && <span className="author">{author}</span>}

        <DateFormatter className="date" language={language}>
          {date}
        </DateFormatter>

        {type === 'news' ? (
          <Link href={`/${language}/${tag}512`}>
            <a className="tag">{categoriesByLanguage[language][tag]}</a>
          </Link>
        ) : (
          <Link href="/[language]/[category]" as={`/${language}/${tag.toLowerCase()}`}>
            <a className="tag">{categoriesByLanguage[language][tag.toLowerCase()]}</a>
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
            <NewsAudioLink href={soundcloudLink} title="Прослушать аудио-версию" />
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
