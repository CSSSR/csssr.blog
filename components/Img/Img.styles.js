import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }}) => css`
  & {
    display: block;
    margin-top: ${calcRem(30)};
    margin-bottom: ${calcRem(30)};
    grid-column: 4 / span 6;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(15)};
      margin-bottom: ${calcRem(15)};
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(20)};
      margin-bottom: ${calcRem(20)};
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
