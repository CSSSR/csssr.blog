import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, withImage}) => css`
  & {
    margin-top: ${calcRem(85)};
    grid-column: 1 / span 12;
  }

  .quote {
    position: relative;

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
    `&::before {
        content: '';
        position: absolute;
        top: 0;
        width: ${calcRem(48)};
        height: ${calcRem(32)};
        background-image: url(../../static/icons/quote/quotes.svg);
        background-repeat: no-repeat;
        background-size: cover;

      }`
    }
    ${withImage &&
      `&::after {
        content: '';
        position: absolute;
        background-image: url(../../static/icons/quote/angle.svg);
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

      &::before {
        right: calc(100% + 40px);
      }

      &::after {
        right: calc(100% + 40px);
        bottom: 47px;
        width: ${calcRem(34)};
        height: ${calcRem(37)};
      }
    }

    .author {
      margin-top: ${calcRem(30)};
    }

    .autor-post {
      margin-top: ${calcRem(10)};
    }

    .image-wrapper {
      grid-column: 4 / span 1;
      width: ${calcRem(108)};
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

      &::before {
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
    & {
      margin-top: ${calcRem(65)};
    }

    .quote {
      grid-column: 6 / span 5;

      &::before {
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
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(55)};
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

      &::before {
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
        background-image: url(../../static/icons/quote/mobile.all/angle.svg);
      }
    }

    .quote-text {
      margin: 0;
      padding: 0;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .author {
      margin-top: ${calcRem(20)};
    }

    .autor-post {
      margin-top: ${calcRem(5)};
    }
  }
`



export default props => {
  const breakpoints = props.theme.breakpoints
  const withImage = props.withImage

  return css`
    ${base({ breakpoints, withImage })}
  `
}
