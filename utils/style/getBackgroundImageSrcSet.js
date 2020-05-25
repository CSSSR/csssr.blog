import { css } from '@emotion/core'

export default (images, selector) => {
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
