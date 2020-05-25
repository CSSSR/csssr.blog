import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }}) => css`
  & {
    margin: 0 auto;
  }

  & > p:first-of-type strong:first-of-type {
    font-family: "Amita";
    font-style: normal;
    font-weight: normal;
    font-size: 76px;
    line-height: 32px;
    padding-top: ${calcRem(20)};
    padding-right: ${calcRem(7)};
    float: left;
  }

  ${tablet.all} {
    & > p:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
    }
  }

  ${mobile.all} {
    & > p:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
