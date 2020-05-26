import React from 'react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import styles from './Img.styles'
import cn from 'classnames'
import { useTheme } from 'emotion-theming'

const Img = ({ className, name, slug, withBigMargin, alt }) => {
  const theme = useTheme()

  const images = {
    mobile: {
      '1x': `/assets/blog/posts/${slug}/mobile.all/${name}`,
      '2x': `/assets/blog/posts/${slug}/mobile.all/${name}`,
      '3x': `/assets/blog/posts/${slug}/mobile.all/${name}`,
    },
    tablet: {
      '1x': `/assets/blog/posts/${slug}/tablet.all/${name}`,
      '2x': `/assets/blog/posts/${slug}/tablet.all/${name}`,
      '3x': `/assets/blog/posts/${slug}/tablet.all/${name}`,
    },
    desktop: {
      '1x': `/assets/blog/posts/${slug}/desktop.all/${name}`,
      '2x': `/assets/blog/posts/${slug}/desktop.all/${name}`,
      '3x': `/assets/blog/posts/${slug}/desktop.all/${name}`,
    },
  }

  const getSrcSet = (type, extension) => {
    return `${images[type]['1x']}@1x.${extension} 1x, ${images[type]['2x']}@2x.${extension} 2x, ${images[type]['3x']}@3x.${extension} 3x`
  }

  return (
    <picture className={cn(className, { with_big_margin: withBigMargin })}>
      {/* TODO раскомментить webp после того как Андрей закончить работу с картинками */}
      {/* <source
        media={theme.breakpoints.mobile.all.slice(7)}
        type="image/webp"
        srcSet={getSrcSet('mobile', 'webp')}
      /> */}

      <source
        media={theme.breakpoints.tablet.all.slice(7)}
        type="image/png"
        srcSet={getSrcSet('tablet', 'png')}
      />

      {/* <source
        media={theme.breakpoints.tablet.all.slice(7)}
        type="image/webp"
        srcSet={getSrcSet('tablet', 'webp')}
      /> */}

      <source
        media={theme.breakpoints.desktop.all.slice(7)}
        type="image/png"
        srcSet={getSrcSet('desktop', 'png')}
      />

      {/* <source
        media={theme.breakpoints.desktop.all.slice(7)}
        type="image/webp"
        srcSet={getSrcSet('desktop', 'webp')}
      /> */}

      <img srcSet={getSrcSet('mobile', 'png')} src={`${images.mobile['1x']}@1x.png`} alt={alt} />
    </picture>
  )
}

Img.propTypes = {
  className: string,
  imgName: string,
  alt: string,
}

export default styled(Img)`
  ${styles}
`
