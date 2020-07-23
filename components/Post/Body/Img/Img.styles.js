import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: block;
    /* Максимальная ширина для картинки, вписанной в сетку на 1360px */
    max-width: 656px;
    min-height: ${calcRem(240)};
    margin-right: auto;

    & img {
      width: 100%;
    }
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
      min-height: ${calcRem(228)};
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
    }

    &.with_big_margin {
      margin-top: ${calcRem(60)};
    }
  }

  ${mobile.all} {
    & {
      min-height: ${calcRem(120)};
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
    }

    &.with_big_margin {
      margin-top: ${calcRem(50)};
    }
  }
`

export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
