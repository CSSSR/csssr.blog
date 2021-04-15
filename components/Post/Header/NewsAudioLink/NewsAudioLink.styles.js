import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const soundtrackImages = require.context('../../../../public/components/newsAudioLink/images')

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .soundtrack-wrapper {
    position: relative;
  }

  .soundtrack-image {
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

  .links-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${calcRem(15)};
    color: #7D7FFE;
  }

  .link {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(19)};
    color: #0076FF;
  }

  .arrow {
    margin-left: ${calcRem(6)};
  }

  ${desktop.all} {
    & {
      grid-column: 4 / span 6;
      margin-top: 60px;
    }

    .soundtrack-image {
      height: 21px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(40)};
      grid-column: 3 / span 8;
    }

    .soundtrack-image {
      height: ${calcRem(21)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(43)};
      grid-column: 1 / span 6;
      width: 100%;
    }

    .soundtrack-image {
      height: ${calcRem(18)};
    }

    .links-wrapper {
      align-items: flex-start;
      flex-direction: column;
      margin-top: ${calcRem(15)};
    }

    .link {
      line-height: ${calcRem(19)};
      &:not(:first-of-type) {
        margin-top: ${calcRem(15)};
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .link:hover {
      color: #0254d8;
    }
  }
`

export const backgroundImagesStyles = css`
  & {
    ${backgroundCssSmart('.soundtrack-image', soundtrackImages)}
  }
`

export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${backgroundImagesStyles}
  `
}
