import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  &._is-large {
    font-family: 'Roboto','Arial',sans-serif;
  }

  ${desktop.all} {
    & {
      margin-top: 40px;
      grid-column: 4 / span 6;
      color: #18191B;
    }

    &._is-large {
      margin-top: 0;
      font-size: ${calcRem(24)};
      line-height: ${calcRem(40)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(38)};
      grid-column: 3 / span 8;
    }

    &._is-large {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(24)};
      line-height: ${calcRem(40)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    &._is-large {
      margin-top: ${calcRem(40)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }
  }
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
