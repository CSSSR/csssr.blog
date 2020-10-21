import { css } from '@emotion/core';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, lineColor }) => css`
  & {
    position: relative;
    margin-top: ${calcRem(80)};
    height: ${calcRem(111)};
    width: 100vw;
    grid-column: 1 / span 12;
    position: relative;
    transform: translateX(calc((100vw - var(--width-container)) / -2));
    border: none;

    &.color-line {
      position: relative;
      display: block;
      height: ${calcRem(150)};

      &::before {
        z-index: 1;
        content: '';
        background-color: ${lineColor};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${calcRem(111)};
      }

      &::after {
        z-index: 2;
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: ${calcRem(656)};
        background-position: center 100%;
      }
    }

    &.bg-repeat {
      height: ${calcRem(150)};

      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: repeat-x;
        background-color: #f4f7f6;
      }
    }
  }

  ${desktop.l} {
    --width-container: 1328px;
  }

  ${desktop.m} {
    --width-container: 1328px;
  }

  ${desktop.s}{
    --width-container: 1232px;
  }

  ${tablet.all} {
    --width-container: ${calcRem(944)};

    & {
      margin-top: ${calcRem(60)};
    }
  }

  ${mobile.all} {
    --width-container: 20.5rem;
    grid-column: 1 / span 6;
    margin-top: ${calcRem(60)};

    &.color-line {
      &::after {
        background-size: ${calcRem(360)};
      }
    }

    &&_peopleWithBasket {
      height: ${calcRem(124)};
    }

    &.bg-repeat {
      height: ${calcRem(100)};

      &::after {
        background-size: cover;
      }
    }

    &.manWithCafeBg {
      &::after {
        background-position: ${calcRem(20)} 100%;
      }
    }
  }
`

export default props =>{
  const { theme: { breakpoints } } = props
  const { lineColor } = props

  return css`
    ${base({breakpoints, lineColor})}
  `
}
