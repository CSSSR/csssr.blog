import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './NewsPodcast.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

// import { ReactComponent as FacebookIcon } from '../../public/icons/share/facebook.svg'

const NewsPodcast = ({ className }) => {
  const router = useRouter()

  const inputRef = useRef()
  const currentUrl = `${process.env.BLOG_HOST || 'http://localhost:3000'}${router.asPath}`

  return (
    <div className={className}>
      <PictureSmart
        className="picture"
        alt="Радио с заголовком 'Новости 512'"
        requireImages={require.context('../../../public/components/newsPodcast')}
      />

      <ul className="links">
        <li className="link-item">
          <a className="link font_link-list_16" href="https://podcasts.apple.com/us/podcast/id1370045815" rel="nofollow noopener" target="_blank">Apple Podcasts</a>
        </li>
        <li className="link-item">
          <a className="link font_link-list_16" href="https://podcasts.google.com/feed/aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz?ep=14" rel="nofollow noopener" target="_blank">Google Podcasts</a>
        </li>
        <li className="link-item">
          <a className="link font_link-list_16" href="https://soundcloud.com/csssr/sets/512-news" rel="nofollow noopener" target="_blank">SoundCloud</a>
        </li>
        <li className="link-item">
          <a className="link font_link-list_16" href="https://music.yandex.ru/album/7040324/track/54795992" rel="nofollow noopener" target="_blank">Я.Музыка</a>
        </li>
      </ul>
    </div>
  )
}

export default styled(NewsPodcast)`
  ${styles}
`
