import React from 'react'
import styled from '@emotion/styled'
import styles from './NewsPodcast.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

const NewsPodcast = ({ className }) => {
  const links = ['Apple Podcasts', 'Google Podcasts', 'SoundCloud', 'Я.Музыка']

  return (
    <div className={className} data-testid="NewsPodcast:block">
      <PictureSmart
        className="picture"
        alt="Радио с заголовком 'Новости 512'"
        requireImages={require.context('../../../public/components/newsPodcast')}
      />
      <ul className="links">
        {links.map((link, index) => (
          <li 
            className="link-item"
            key={index}
          >
            <a
              className="link font_link-list_16"
              href="https://podcasts.apple.com/us/podcast/id1370045815"
              rel="nofollow noopener"
              target="_blank"
            >
              {link}
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
