import React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './NewsPodcast.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

const NewsPodcast = ({ className, HideNewsPodcastOnMobile }) => {
  const links = [
    {
      title: 'Apple Podcasts',
      href: 'https://podcasts.apple.com/us/podcast/id1370045815',
    },
    {
      title: 'Google Podcasts',
      href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz',
    },
    {
      title: 'SoundCloud',
      href: 'https://soundcloud.com/csssr/sets/512-news',
    },
    {
      title: 'Я.Музыка',
      href: 'https://music.yandex.ru/album/7040324',
    },
  ]

  return (
    <div
      className={cn(className, {
        hidden_mobile: HideNewsPodcastOnMobile,
      })}
      data-testid="NewsPodcast:block"
    >
      <PictureSmart
        className="picture"
        alt="Радио с заголовком 'Новости 512'"
        requireImages={require.context('../../../public/components/newsPodcast')}
      />
      <ul className="links">
        {links.map(({ title, href }, index) => (
          <li className="link-item" key={index}>
            <a
              className="link font_link-list_16"
              href={href}
              rel="nofollow noopener"
              target="_blank"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default styled(NewsPodcast)`
  ${styles}
`
