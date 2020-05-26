import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    margin-top: 142px;
  }

  ${desktop.m} {
    margin-top: 120px;
  }

  ${desktop.s} {
    margin-top: 120px;
  }

  ${tablet.all} {
    margin-top: ${calcRem(128)};
  }

  ${mobile.all} {
    margin-top: ${calcRem(111)};
  }
`

const dynamic = ({ breakpoints: { mobile }, size, side }) => {
  return css`
    grid-column-end: ${size === 'm' ? 'span 7' : 'span 3'};
    grid-column-start: ${side === 'r' ? size === 'm' ? 5 : 9 : 2};

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
