import { css } from "@emotion/core";
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }}) => css`
 & {
    width: ${calcRem(880)};
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: ${calcRem(50)};
    padding-top: ${calcRem(50)};
    padding-right: ${calcRem(111)};
    padding-bottom: ${calcRem(54)};
    padding-left: ${calcRem(112)};
    background-color: #F1F2F7;
 }

  ${tablet.all} {
    & {
      width: ${calcRem(784)};
      margin-top: ${calcRem(30)};
      padding-top: ${calcRem(40)};
      padding-right: ${calcRem(80)};
      padding-bottom: ${calcRem(40)};
      padding-left: ${calcRem(80)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(50)};
      padding-top: ${calcRem(24)};
      padding-right: ${calcRem(16)};
      padding-bottom: ${calcRem(16)};
      padding-left: ${calcRem(16)};
    }
  }

`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}