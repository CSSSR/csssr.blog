import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: block;
    /* Максимальная ширина для картинки, вписанной в сетку на 1360px */
    max-width: 656px;

    & img {
      width: 100%;
    }
  }

  &.align_center {
    margin-left: auto;
    margin-right: auto;
  }

  &.align_right {
    margin-left: auto;
    margin-right: 0;
  }

  &.align_left {
    margin-left: 0;
    margin-right: auto;
  }

  ${desktop.all} {
    & {
      margin-top: 30px;
      grid-column: 4 / span 6;
    }

    &.with_big_margin {
      margin-top: 80px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
      max-width: 100%;
    }

    &.with_big_margin {
      margin-top: ${calcRem(60)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      width: 100%;
    }

    &.with_big_margin {
      margin-top: ${calcRem(50)};
    }

  }
`
const StyledImg = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledImg
