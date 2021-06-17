import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    position: relative;
    display: flex;
  }

  .dot {
    transition: color 150ms ease-in-out;
    position: relative;
    width: ${calcRem(10)};
    height: ${calcRem(10)};
    border: ${calcRem(1)} solid ${colors.secondary.darken100};
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
    flex-shrink: 0;

    &.active {
      background-color: ${colors.secondary.darken100};
    }

    &::before {
      content: '';
      position: absolute;
      width: ${calcRem(20)};
      height: ${calcRem(20)};
      top: ${calcRem(-5)};
      left: ${calcRem(-5)};
    }
  }

  .dot + .dot {
    margin-left: ${calcRem(10)};
  }

  ${mobile.all} {
    & {
      justify-content: center;
      align-items: center;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .dot:not(.active):hover {
      border-color: #0254d8;
      transition: color 150ms ease-in-out;
    }
  }
`

const StyledDots = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledDots
