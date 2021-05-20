import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, withImage, colors}) => css`
  & {
    padding-top: ${calcRem(45)};
    padding-bottom: ${calcRem(30)};
    grid-column: 1 / span 12;
  }

  &.type_black {
    .quotes {
      color: #D2D2FF;
    }

    .quote-text,
    .author {
      color: ${colors.secondary.darken100};
    }
  }

  &.type_blue {
    .quotes {
      color: ${colors.secondary.darken100};
    }

    .quote-text {
      color: #0254D8;
    }
  }

  .quote {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;

    .quotes {
      display: none;
    }

    ${withImage ?
      `&::before {
        content: '';
        position: absolute;
        display: block;
        height: 100%;
        width: 4px;
        background-color: #0254D8;
      }`
    :
    `
      .quotes {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        width: ${calcRem(48)};
        height: ${calcRem(32)};
      }
    `
    }
    ${withImage &&
      `&::after {
        content: '';
        position: absolute;
        background-image: url(${require('../../../../public/components/quote/icons/angle.svg').default});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: ${calcRem(7)} 100%;
      }`
    }
  }

  .image-wrapper {
    display: flex;

    img {
      margin-top: auto;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .quote-text {
    color: ${withImage ? '#18191B' : '#0254D8'};
  }

  .quote-text > p:first-of-type {
    padding-top: 0;
  }

  .quote-text > p:last-of-type {
    padding-bottom: 0;
  }

  .author {
    margin-top: ${calcRem(25)};
  }

  .author,
  .autor-post  {
    display: block;
  }

  .autor-post  {
    padding-bottom: 0;
  }

  ${desktop.all} {
    .quote {
      grid-column: 6 / span 4;

      &::before,
      .quotes {
        right: calc(100% + 40px);
      }

      &::after {
        right: calc(100% + 40px);
        bottom: 47px;
        width: ${calcRem(34)};
        height: ${calcRem(37)};
      }
    }

    .autor-post {
      margin-top: ${calcRem(10)};
    }

    .image-wrapper {
      grid-column: 4 / span 1;
      width: ${calcRem(108)};
    }

    .quote-link {
      font-size: 12px;
      font-weight: 300;
      line-height: 24px;
    }
  }

  ${desktop.l} {
    .image-wrapper {
      margin-left: ${calcRem(100)};
    }

    .quote {
      &::after {
        width: ${calcRem(32)};
      }
    }
  }

  ${desktop.m} {
    .quote {
      &::after {
        bottom: 44px;
        width: ${calcRem(35)};
      }
    }

    .image-wrapper {
      margin-left: ${calcRem(21)};
    }
  }

  ${desktop.s} {
    .quote {

      &::before,
      .quotes {
        right: calc(100% + 38px);
      }

      &::after {
        right: calc(100% + 38px);
        bottom: 41px;
        width: ${calcRem(31)};
      }
    }

    .image-wrapper {
      margin-left: ${calcRem(6)};
    }
  }

  ${tablet.all} {
    .quote {
      grid-column: 6 / span 5;

      &::before,
      .quotes {
        top: ${withImage ? calcRem(-5) : '0'};
        right: calc(100% +  ${calcRem(28)});
        width: ${withImage ? calcRem(4) : calcRem(48)};
        height: ${withImage ? '100%' : calcRem(32)};
      }

      &::after {
        right: calc(100% + ${calcRem(28)});
        bottom: 43px;
        width: ${calcRem(38)};
        height: ${calcRem(37)};
      }
    }

    .image-wrapper {
      grid-column: 4 / span 2;
      max-width: ${calcRem(108)};
      margin-left: ${calcRem(-23)};
    }

    .quote-text {
      margin: 0;
      padding: 0;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .author {
      margin-top: ${calcRem(30)};
    }

    .autor-post {
      margin-top: ${calcRem(5)};
    }

    .quote-link {
      margin-top: ${calcRem(5)};
      font-size: ${calcRem(10)};
      font-weight: 400;
      line-height: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(35)};
      padding-bottom: ${calcRem(20)};
      grid-column: 1 / span 6;
    }

    .image-wrapper {
      grid-column: 1 / span 2;
      max-width: ${calcRem(91)};
      margin-left: ${calcRem(-13)};

      img {
        margin-bottom: ${calcRem(112)};
      }
    }

    .quote {
      grid-column: ${withImage ? '3 / span 4' : '2 / span 5'};

      &::before,
      .quotes {
        top: ${withImage ? calcRem(-6) : '0'};
        right: calc(100% + ${calcRem(15)});
        width: ${withImage ? calcRem(2) : calcRem(36)};
        height: ${withImage ? '100%' : calcRem(24)};
      }

      &::after {
        right: calc(100% + ${calcRem(4)});
        bottom: ${calcRem(126)};
        width: ${calcRem(39)};
        height: ${calcRem(36)};
        background-image: url(${require('../../../../public/components/quote/icons/mobile.all/angle.svg').default});
      }
    }

    .quote-text {
      margin: 0;
      padding: 0;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .author {
      margin-top: ${calcRem(15)};
    }

    .autor-post {
      margin-top: ${calcRem(5)};
    }

    .quote-link {
      margin-top: ${calcRem(5)};
      font-size: ${calcRem(10)};
      font-weight: 400;
      line-height: ${calcRem(16)};
    }
  }
`

const StyledQuote = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const withImage = props.withImage

  return css`
    ${base({ breakpoints, withImage, colors })}
  `
}

export default StyledQuote
