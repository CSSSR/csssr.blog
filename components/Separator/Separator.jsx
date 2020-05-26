import React from 'react'
import { string, oneOf } from 'prop-types'
import cn from 'classnames'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './Separator.styles'

const getBackgroundImageSrcSet = (images, selector) => {
  const extensions = Object.keys(images)
  const srcSets = extensions.map(
    (extension) => `
      ${extension === 'webp' ? `html.webp ${selector}` : `${selector}`} {
        background-image: url(${images[extension]['1x']});
      }

      @media only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (min-resolution: 192dpi),
        only screen and (min-resolution: 2dppx) {
        ${extension === 'webp' ? `html.webp ${selector}` : `${selector}`} {
          background-image: url(${images[extension]['2x']});
        }
      }

      @media only screen and (-webkit-min-device-pixel-ratio: 3),
        only screen and (min-resolution: 288dpi),
        only screen and (min-resolution: 3dppx) {
        ${extension === 'webp' ? `html.webp ${selector}` : `${selector}`} {
          background-image: url(${images[extension]['3x']});
        }
      }
    `,
  )

  return css`
    ${srcSets.join('\n')}
  `
}


const getSrcObject = (imageName) => {
  return {
    '1x': `/assets/blog/test/${imageName}/mobile.all.png`,
    '2x': `/assets/blog/test/${imageName}/mobile.all.png`,
    '3x': `/assets/blog/test/${imageName}/mobile.all.png`
  }
}

export const backgroundImagesStyles = (imageName) => css`
  ${getBackgroundImageSrcSet({png: getSrcObject(imageName)}, `.${imageName}::after`)}
`

const Separator = ({ className, type, imageName }) => {
  return (
    <>
      <hr className={cn(className, imageName, type)} />
      <Global styles={backgroundImagesStyles(imageName)} />
    </>
  )
}

Separator.propTypes = {
  className: string,
  type: oneOf(['color-line', 'bg-repeat']),
  imageName: string,
  lineColor: string,
}

export default styled(Separator)`
  ${styles}
`
