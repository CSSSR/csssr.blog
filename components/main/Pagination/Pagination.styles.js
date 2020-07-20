import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .control-button {
    width: ${calcRem(6)};
    height: ${calcRem(12)};
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .prev {
    margin-right: ${calcRem(28)};
    background-image: url(${require('../../../public/components/pagination/leftArrow.svg').default});

    &._disabled {
      background-image: url(${require('../../../public/components/pagination/leftArrow_disabled.svg').default});
    }
  }

  .next {
    margin-left: ${calcRem(28)};
    background-image: url(${require('../../../public/components/pagination/rightArrow.svg').default});

    &._disabled {
      background-image: url(${require('../../../public/components/pagination/rightArrow_disabled.svg').default});
    }
  }

  .item {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 300;
    color: #000;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: ${calcRem(28)};
    }

    &:not(.active):hover {
      color: #0076FF;
    }

    &.active {
      font-weight: normal;
      color: #0076FF;

      &:hover {
        color: #0254D8;
      }
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
    .item {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};

      &.active {
        font-size: 24px;
      }
    }
  }

  ${mobile.all} {
    .item {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};

      &.active {
        font-size: 18px;
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
