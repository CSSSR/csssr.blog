import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const soundtrackImages = require.context('../../../../public/components/newsAudioLink/images')
const soundtrackImagesHovered = require.context('../../../../public/components/newsAudioLink/images_hovered')

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .soundtrack-wrapper {
    position: relative;
  }

  .soundtrack-image,
  .soundtrack-image_hover {
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    will-change: opacity;
  }

  .soundtrack-image {
    z-index: 2;
    opacity: 1;
  }

  .soundtrack-image_hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .title-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${calcRem(5)};
    color: #7D7FFE;
  }

  .link-title {
    font-family: 'Amita', sans-serif;
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(31)};
  }

  .arrow {
    margin-left: ${calcRem(7)};
  }

  ${desktop.all} {
    & {
      grid-column: 4 / span 6;
      margin-top: 60px;
    }

    .soundtrack-image,
    .soundtrack-image_hover {
      height: 21px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(40)};
      grid-column: 3 / span 8;
    }

    .soundtrack-image,
    .soundtrack-image_hover {
      height: ${calcRem(21)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(43)};
      grid-column: 1 / span 6;
      width: 100%;
    }

    .soundtrack-image,
    .soundtrack-image_hover {
      height: ${calcRem(18)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .title-wrapper {
        color: #0254d8;
      }
    }

    &:hover .soundtrack-image {
      opacity: 0;
    }

    &:hover .soundtrack-image_hover {
      opacity: 1;
    }
  }
`

export const backgroundImagesStyles = css`
  & {
    ${backgroundCssSmart('.soundtrack-image', soundtrackImages)}

    ${backgroundCssSmart('.soundtrack-image_hover', soundtrackImagesHovered)}
  }
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${backgroundImagesStyles}
  `
}
