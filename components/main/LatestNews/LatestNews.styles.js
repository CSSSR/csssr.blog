import { css } from '@emotion/react'

import { calcRem } from '../../../utils/style/calcRem'

const radioDesktop = require('../../../public/components/latestNews/radio/desktop.all.svg').default
const radioMobile = require('../../../public/components/latestNews/radio/mobile.all.svg').default

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(70)};
    display: flex;
    font-family: 'Roboto', 'Arial', sans-serif;
    color: ${colors.secondary.darken100};
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
  }

  .wrap {
    position: relative;
    padding-top: ${calcRem(24)};
    padding-bottom: ${calcRem(24)};
    background-color: #f1f2f7;
    height: ${calcRem(161)};

    &::before {
      content: '';
      position: absolute;
      top: ${calcRem(-17)};
      right: ${calcRem(-28)};
      width: ${calcRem(196)};
      height: ${calcRem(160)};
      background-image: url(${radioDesktop});
      background-size: ${calcRem(196)} ${calcRem(160)};
    }
  }

  .top {
    grid-column: 1 / span 4;
    grid-row: 1;
  }

  .tag {
    font-weight: 300;
    color: ${colors.secondary.darken100};
    margin-left: ${calcRem(32)};
  }

  .date {
    font-weight: 300;
    color: #9b9b9b;
    margin-left: ${calcRem(15)};
  }

  .episode {
    font-weight: 900;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(32)};
    grid-column: 1 / span 3;
    grid-row: 2;
    margin-top: ${calcRem(10)};
    margin-left: ${calcRem(32)};
  }

  .title {
    margin-top: ${calcRem(17)};
    grid-row: 2;
    grid-column: 4 / span 6;
    font-weight: 300;
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(80)};
      background-color: #f1f2f7;
      font-size: ${calcRem(14)};
    }

    .wrap {
      background-color: transparent;
      height: ${calcRem(244)};

      &::before {
        content: '';
        position: absolute;
        top: ${calcRem(-47)};
        right: ${calcRem(-15)};
        width: ${calcRem(94)};
        height: ${calcRem(129)};
        background-image: url(${radioMobile});
        background-size: ${calcRem(94)} ${calcRem(129)};
      }
    }

    .top {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .tag {
      margin-left: 0;
    }

    .episode {
      font-size: ${calcRem(22)};
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-left: 0;
    }

    .title {
      margin-top: ${calcRem(10)};
      grid-row: 3;
      grid-column: 1 / span 6;
      font-size: ${calcRem(16)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .episode {
        color: #0254d8;
        transition: color 150ms ease-in-out;
      }
    }

    .tag:hover {
      color: #0254d8;
      transition: color 150ms ease-in-out;
    }
  }
`

const LatestNews = (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default LatestNews
