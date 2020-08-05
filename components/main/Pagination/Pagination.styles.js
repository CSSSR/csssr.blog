import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:not(:first-of-type) {
    margin-left: ${calcRem(28)};
  }

  .item {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 300;
    color: #000;
    cursor: pointer;

    &.active {
      font-weight: normal;
      color: #0076FF;
      pointer-events: none;
    }

    &.dots {
      color: ${colors.secondary.darken100};
      pointer-events: none;
    }
  }

  ${desktop.all} {
    & {
      margin-top: 108px;
    }

    .item {
      font-size: 16px;
      line-height: 24px;

      &.active {
        font-size: 24px;
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(71)};
    }

    .item {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};

      &.active {
        font-size: 24px;
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(50)};
    }

    .item {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};

      &.active {
        font-size: 18px;
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .item {
      &:hover {
        color: #0076FF;
      }
    }
  }
`

export default props => {
  const { theme: { breakpoints, colors } } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}
