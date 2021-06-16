import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(40)};
    font-size: ${calcRem(20)};
    line-height: ${calcRem(32)};
  }

  ${desktop.all} {
    & {
      grid-column: 4 / span 6;
      color: #18191B;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(28)};
      grid-column: 1 / span 6;
    }
  }
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
