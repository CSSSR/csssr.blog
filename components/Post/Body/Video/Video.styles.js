import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    width: 100%;
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(80)};
      grid-column: 4 / span 6; 
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(60)};
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(50)};
      grid-column: 1 / span 6;
      width: 100vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
