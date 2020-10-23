import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const soundtrackImages = require.context('../../../../public/components/newsAudioLink/images?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: 60px;
  }

  .link {
    &:visited {
      color: #7D7FFE;
    }
  }

  .soundtrack-image {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }

  .title-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${calcRem(5)};
    color: #7D7FFE;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;
      }
    }
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
    }

    .soundtrack-image {
      height: 21px;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-image: url('/icons/newsLink/soundtrack_hover/desktop.all.png');
        }
      }
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
  }
`

export const backgroundImagesStyles = () => css`
  ${backgroundCssSmart('.soundtrack-image', soundtrackImages)}
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
