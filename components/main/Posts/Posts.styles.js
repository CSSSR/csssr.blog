import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    margin-top: 72px;
  }

  ${desktop.m} {
    margin-top: 50px;
  }

  ${desktop.s} {
    margin-top: 50px;
  }

  ${tablet.all} {
    margin-top: ${calcRem(58)};
  }

  ${mobile.all} {
    margin-top: ${calcRem(44)};
  }
`

const dynamic = ({ breakpoints: { mobile }, size, side }) => {
  return css`
    grid-column-end: ${size === 'l' ? 'span 7' : 'span 3'};
    grid-column-start: ${side === 'r' ? size === 'l' ? 5 : 9 : 2};

    ${mobile.all} {
      grid-column: 1 / span 6;
    }
  `
}

export default props => {
  const { theme: { breakpoints, colors }, size, side } = props

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic({ breakpoints, size, side})}
  `
}
