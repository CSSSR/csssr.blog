import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    overflow-x: hidden;
  }

  .title {
    margin-top: ${calcRem(98)};
    grid-column: 1 / span 6;
    color: #18191B;
  }

  .categories {
    grid-column: 1 / span 12;
  }

  .nav-list {
    grid-column: 1 / span 12;
  }

  ${desktop.all} {

  }

  ${desktop.l} {

  }

  ${desktop.m} {

  }

  ${desktop.s} {

  }

  ${tablet.all} {

  }

  ${mobile.all} {

  }
`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
