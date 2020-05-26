import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: block;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ${desktop.all} {
    & {
      margin-top: 30px;
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(40)};
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(20)};
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
