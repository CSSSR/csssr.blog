import React from 'react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import styles from './PictureForAllResolutions.styles'

const PictureForAllResolutions = ({ className, imgName, alt }) => {
  const images = {
    mobile: {
      '1x': `/assets/blog/posts/mobile.all/${imgName}`,
      '2x': `/assets/blog/posts/mobile.all/${imgName}`,
      '3x': `/assets/blog/posts/mobile.all/${imgName}`,
    },
    tablet: {
      '1x': `/assets/blog/posts/tablet.all/${imgName}`,
      '2x': `/assets/blog/posts/tablet.all/${imgName}`,
      '3x': `/assets/blog/posts/tablet.all/${imgName}`,
    },
    desktop: {
      '1x': `/assets/blog/posts/desktop.all/${imgName}`,
      '2x': `/assets/blog/posts/desktop.all/${imgName}`,
      '3x': `/assets/blog/posts/desktop.all/${imgName}`,
    },
  }

  const getSrcSet = (type, extension) => {
    return `${images[type]['1x']}@1x.${extension} 1x, ${images[type]['2x']}@2x.${extension} 2x, ${images[type]['3x']}@3x.${extension} 3x`
  }

  return (
    <picture className={className}>
      <source media="(max-width: 767px)" type="image/webp" srcSet={getSrcSet('mobile', 'webp')} />

      <source
        media="(min-width: 768px) and (max-width: 1279px)"
        type="image/png"
        srcSet={getSrcSet('tablet', 'png')}
      />

      <source
        media="(min-width: 768px) and (max-width: 1279px)"
        type="image/webp"
        srcSet={getSrcSet('tablet', 'webp')}
      />

      <source media="(min-width: 1280px)" type="image/png" srcSet={getSrcSet('desktop', 'png')} />

      <source media="(min-width: 1280px)" type="image/png" srcSet={getSrcSet('desktop', 'webp')} />

      <img srcSet={getSrcSet('mobile', 'png')} src={`${images.mobile['1x']}@1x.png`} alt={alt} />
    </picture>
  )
}

PictureForAllResolutions.propTypes = {
  className: string,
  imgName: string,
  alt: string,
}

export default styled(PictureForAllResolutions)`
  ${styles}
`
